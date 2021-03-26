import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/app/config/api-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ExternalSource } from 'src/app/models/domain/external-source';
import { BehaviorSubject, Observable } from 'rxjs';
import { WizardPage } from 'src/app/models/domain/wizard-page';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/domain/project';

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  public allUserProjects: Array<Project>;
  public selectedUserProject: Project;
  public selectedSource: ExternalSource;
  protected readonly datasourceUrl = API_CONFIG.url + API_CONFIG.dataSourceRoute;
  protected readonly wizardUrl = API_CONFIG.url + API_CONFIG.wizardRoute;
  private steps$: BehaviorSubject<Array<WizardPage>>;
  private currentStep$: BehaviorSubject<WizardPage> = new BehaviorSubject<WizardPage>(null);
  private publicFlow: Array<WizardPage>;
  private privateFlow: Array<WizardPage>;
  private selectedFlow: Array<WizardPage>;
  private currentWizardPage: WizardPage;
  private defaultSteps: Array<WizardPage> = [
    {authFlow: false, orderIndex: 1, name: 'project-icon', description: 'Do you have any images that fit your project?', isComplete: true},
    {authFlow: false, orderIndex: 2, name: 'project-name', description: 'What would you like to name your project?', isComplete: true},
    {authFlow: false, orderIndex: 3, name: 'project-description', description: 'How would you describe your project?', isComplete: true},
    {authFlow: false, orderIndex: 4, name: 'project-collaborators', description: 'Who collaborated to your project?', isComplete: true},
    {authFlow: false, orderIndex: 5, name: 'project-link', description: 'Do you have a link for you project?', isComplete: true},
  ];
  private userToken: string;

  constructor(
      private http: HttpClient,
      private router: Router) { }

  /**
   * This function fetches all the available external sources
   */
  public fetchExternalSources(): Observable<Array<ExternalSource>> {
    return this.http.get<Array<ExternalSource>>(this.datasourceUrl);
  }

  public fetchProjectsFromExternalSource(selectedSourceGuid: string, token: string): Observable<Array<Project>> {
    let params = new HttpParams();
    params = params.append('dataSourceGuid', selectedSourceGuid);
    params = params.append('token', token);
    params = params.append('needsAuth', this.steps$.value[0].authFlow.toString());

    return this.http.get<Array<Project>>(this.wizardUrl + '/projects', {
      params: params
    });
  }

  public selectProject(project: Project): void {
    this.selectedUserProject = project;
    console.log('Selected project', this.selectedUserProject);
  }

  public selectExternalSource(source: ExternalSource): void {
    this.selectedSource = source;
  }

  public selectManualSource(): void {
    this.selectedFlow = this.defaultSteps;
  }

  /**
   * This function can be used to select the public or private flow
   * @param {string} selectedFlow - The selected flow (private/public)
   */
  public selectFlow(selectedFlow: string): void {
    // Reset position in flow so we know for sure that we begin at the first page
    // When a user changes flow in the middle of the flow.
    this.currentWizardPage = undefined;
    this.steps$ = null;
    if (selectedFlow.toLowerCase() === 'public') {
      this.selectedFlow = this.publicFlow;
      this.goToNextStep();
    } else if (selectedFlow.toLowerCase() === 'private') {
      this.selectedFlow = this.privateFlow;
      this.goToNextStep();
    } else {
      throw new Error('Invalid flow type');
    }
  }

  /**
   * This function determines the next step in the wizard flow
   */
  public goToNextStep(): void {
    if (!this.steps$) {
      this.determineFlow();
    } else {
      this.moveToNextStep();
    }
  }

  public serviceIsValid(): boolean {
    return this.steps$.value.length > 0;
  }

  public setCurrentStep(step: WizardPage): void {
    this.currentStep$.next(step);
  }

  public getCurrentStep(): Observable<WizardPage> {
    return this.currentStep$.asObservable();
  }

  public getSteps(): Observable<Array<WizardPage>> {
    return this.steps$.asObservable();
  }

  public moveToNextStep(): void {
    const index = this.currentStep$.value.orderIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  public isLastStep(): boolean {
    return this.currentStep$.value.orderIndex === this.steps$.value.length;
  }

  public resetService(): void {
    this.steps$ = undefined;
    this.selectedSource = undefined;
    this.selectedFlow = undefined;
  }

  private determineFlow(): void {
    // There is no flow selected yet, check which options we have
    // Make sure there are wizard pages
    if (this.selectedSource?.wizardPages.length > 0) {
      this.publicFlow = this.selectedSource.wizardPages.filter(s => s.authFlow === false).sort((s1, s2) => s1.orderIndex - s2.orderIndex);
      this.privateFlow = this.selectedSource.wizardPages.filter(s => s.authFlow === true).sort((s1, s2) => s1.orderIndex - s2.orderIndex);

      if (this.publicFlow.length === 0 && this.privateFlow.length > 0) {
        // There only is a private flow
        this.setBehaviourSubject(this.privateFlow);
        this.goToNextStep();
      } else if (this.publicFlow.length > 0 && this.privateFlow.length === 0) {
        // There is only a public flow
        this.setBehaviourSubject(this.publicFlow);
      } else {
        // TODO: Change this to determine flow so the user can pick.
        this.setBehaviourSubject(this.publicFlow);
      }
    } else {
      // Flow is invalid or the manual flow was selected
      this.setBehaviourSubject(this.defaultSteps);
    }
  }

  private setBehaviourSubject(wizardPages: Array<WizardPage>) {
    if (wizardPages !== this.defaultSteps) {
      // Make sure that we do not end up with duplicate pages
      wizardPages = [...wizardPages, ...this.defaultSteps];
      for (let i = 1; i < wizardPages.length; i++) {
        wizardPages[i].orderIndex = i;
      }
    }
    this.steps$ = new BehaviorSubject<Array<WizardPage>>(wizardPages);
    this.currentStep$.next(this.steps$.value[0]);
  }
}
