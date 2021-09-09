import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { DetailsComponent } from 'src/app/modules/project/details/details.component';
import { SEOService } from 'src/app/services/seo.service';


/**
 * This class is responsible for opening the project overview modal on a certain page.
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectDetailModalUtility {

  private modalRef: BsModalRef;
  private modalSubscriptions: Subscription[] = [];

  constructor(private modalService: BsModalService,
              private location: Location,
              private seoService: SEOService) { }

  /**
   * Triggers on project click in the list.
   * @param id project id.
   * @param name project name
   */
  public openProjectModal(id: number, name: string, returnPage: string): void {
    name = name.split(' ').join('-');

    this.createProjectModal(id, returnPage);
    this.location.replaceState(`/project/details/${id}-${name}`);
  }

    /**
   * Method to update like-count in background of modal
   * @param id project id.
   * @param element the object that needs to be updated in background
   */
  public subscribeToLikes(id: number, element) {
    console.log(element);
    this.modalRef.content.onLike.subscribe(isLiked => {
      const projectIndexToUpdate = element.findIndex(project => project.id === id);
      if (isLiked) {
        element[projectIndexToUpdate].likeCount++;
        element[projectIndexToUpdate].userHasLikedProject = true;
      } else {
        element[projectIndexToUpdate].likeCount--;
        element[projectIndexToUpdate].userHasLikedProject = false;
      }
    });
  }

  /**
   * Method to open the modal for a projects detail
   * @param projectId the id of the project that should be shown.
   * @param activeTab Define the active tab
   */
  private createProjectModal(projectId: number, returnPage: string, activeTab: string = 'description') {
    const initialState = {
      projectId: projectId,
      activeTab: activeTab,
      returnPage: returnPage
    };

    if (projectId) {
      this.modalRef = this.modalService.show(DetailsComponent, {animated: true, initialState});
      this.modalRef.setClass('project-modal');

      // Go back to home page after the modal is closed
      this.modalSubscriptions.push(
          this.modalService.onHide.subscribe(() => {
                if (this.location.path().startsWith('/project/details')) {
                  this.location.replaceState(returnPage);
                  this.updateSEOTags();
                }
              }
          ));
    }
  }

  /**
   * Methods to update the title and description through the SEO service
   */
  private updateSEOTags() {
    // Updates meta and title tags
    this.seoService.updateTitle('Digital Excellence');
    this.seoService.updateDescription('Dex homepage');
  }
}
