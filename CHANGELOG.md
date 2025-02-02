# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

##  Release v.1.8.0-beta - []

### Added

### Changed

### Deprecated

### Removed

### Fixed
- Fixed pagination project overview - [#564](https://github.com/DigitalExcellence/dex-frontend/issues/564)

### Security

##  Release v.1.7.0-beta - 8-10-2021

### Added
- Pagination to own projects page. [#526](https://github.com/DigitalExcellence/dex-frontend/issues/526)
- Back button to add project wizard - [#563](https://github.com/DigitalExcellence/dex-frontend/issues/563)
- Frontend implementation of transfer project ownership - [#581](https://github.com/DigitalExcellence/dex-frontend/issues/581)
- Option to remove a previously uploaded icon to edit page and wizard[#482](https://github.com/DigitalExcellence/dex-frontend/issues/482)

### Changed
- Projects overview not sorting on Likes High > Low [#557](https://github.com/DigitalExcellence/dex-frontend/issues/557)
- Changed project-edit page. Was a separate page, is now a part of te detail-modal [#536](https://github.com/DigitalExcellence/dex-frontend/issues/536)

### Deprecated

### Removed

### Fixed
- Highlight project modal, not dissapearing when clicking out of it.[#569](https://github.com/DigitalExcellence/dex-frontend/issues/569)
- Project filter is not cleared anymore after editing project. [#561](https://github.com/DigitalExcellence/dex-frontend/issues/561)
- The wizard long description text area to wrap words. - [#562](https://github.com/DigitalExcellence/dex-frontend/issues/562)

### Security

##  Release v.1.6.0-beta - 15-9-2021

### Added

### Changed

### Deprecated

### Removed

### Fixed
- Liking a project from the homepage in a modal does not update the like amount in the card on the homepage. - [#512](https://github.com/DigitalExcellence/dex-frontend/issues/512)
- Added styling to the PopOver and Cogwheel. Fixed typo in highlight [#568](https://github.com/DigitalExcellence/dex-frontend/issues/568)
- When clicking on a project on the overview page the card in the background changes size and dimension [#571](https://github.com/DigitalExcellence/dex-frontend/issues/571)
- Filter menu doesn't scale as expected on smaller screens [#555](https://github.com/DigitalExcellence/dex-frontend/issues/555)
- Improved way to share projects [#442](https://github.com/DigitalExcellence/dex-frontend/issues/442)
### Security

## Release v.1.5.1-beta - 30-06-2021

### Changed

## Release v.1.6.0-beta - 15-09-2021

### Added

### Changed

### Deprecated

### Removed

### Fixed
- Recommended project cards now update likes given on an open modal - [#512](https://github.com/DigitalExcellence/dex-frontend/issues/512)
- Added scroll to the filtermenu to make sure it doesn't hide on screens with small height - [#555](https://github.com/DigitalExcellence/dex-frontend/issues/555)
- Fixed problem where project overview card changes size on open modal - [#571](https://github.com/DigitalExcellence/dex-frontend/issues/571)

### Security

## Release v.1.5.1-beta - 30-06-2021

### Changed

- Gifs are now supported for project images and highlight images - [#546](https://github.com/DigitalExcellence/dex-frontend/issues/546)

## Release v.1.5.0-beta - 30-06-2021

### Added

- Added my projects page - [#505](https://github.com/DigitalExcellence/dex-frontend/issues/505)
- Added project images. - [#464](https://github.com/DigitalExcellence/dex-frontend/issues/464)
- Added images to highlights - [#463](https://github.com/DigitalExcellence/dex-frontend/issues/463)
- Updated selection color to improve branding - [#539](https://github.com/DigitalExcellence/dex-frontend/issues/539)
- Added bot to optimize image sizes - [#440](https://github.com/DigitalExcellence/dex-frontend/issues/540)
- Added search functionality based on the number of likes - [#499](https://github.com/DigitalExcellence/dex-frontend/issues/499)

### Changed

- URL does now contain project overview filter parameters - [#517](https://github.com/DigitalExcellence/dex-frontend/issues/517)
- Support multiple call-to-actions. [#454](https://github.com/DigitalExcellence/dex-frontend/issues/454)
- Refactored content on the homepage - [#502](https://github.com/DigitalExcellence/dex-frontend/issues/502)
- Changed location of the buttons on the project details page - [#518](https://github.com/DigitalExcellence/dex-frontend/issues/518)

### Fixed

- Resolved links in footer that navigated to non-existing pages - [#513](https://github.com/DigitalExcellence/dex-frontend/issues/513)

## Release v.1.4.0-beta - 07-06-2021

### Added

- Implemented categories - [#475](https://github.com/DigitalExcellence/dex-frontend/issues/475)
- Added filter parameters to the url, so a user can share their search settings - [#493](https://github.com/DigitalExcellence/dex-frontend/issues/493)
- Added search bar inside navbar with autocomplete suggested results. - [#403](https://github.com/DigitalExcellence/dex-frontend/issues/403)
- Refactored the home page. - [#380](https://github.com/DigitalExcellence/dex-frontend/issues/380)
- Added project recommendations on the home page. - [#497](https://github.com/DigitalExcellence/dex-frontend/issues/497)

### Changed

- Clicking to the next step in the wizard step-header will now skip the step & removed orange progress bar [#460](https://github.com/DigitalExcellence/dex-frontend/issues/460)
- Made Project URI optional - [#492](https://github.com/DigitalExcellence/dex-frontend/issues/492)
- Changed the global styling of scrollbars - [#448](https://github.com/DigitalExcellence/dex-frontend/issues/448)

### Fixed

- Fixed issue where collaborator roles would always get set to developer - [#462](https://github.com/DigitalExcellence/dex-frontend/issues/462)
- Fixed issue where the same project could be added multiple times by spamming the finish
  button [#490](https://github.com/DigitalExcellence/dex-frontend/issues/490)
- Fixed issue where alerts would never get dismissed - [#441](https://github.com/DigitalExcellence/dex-frontend/issues/441)

## Release v.1.3.0-beta - 05-05-2021

### Added

- Added icons to the call-to-action buttons - [#451](https://github.com/DigitalExcellence/dex-frontend/issues/451)

### Changed

- Hide data sources that have the IsVisible property set to false - [#474](https://github.com/DigitalExcellence/dex-frontend/issues/474)

### Fixed

- Fixed issue where the edit- & delete project would always be shown - [#458](https://github.com/DigitalExcellence/dex-frontend/issues/458)
- Fixed issue where the privacy modal and alerts were not responsive - [#426](https://github.com/DigitalExcellence/dex-frontend/issues/426)
- Fixed issue where the wizard would not import projects that missed a required property. [#471](https://github.com/DigitalExcellence/dex-frontend/issues/471)

### Hotfix

- Fixed issue where icon were not being previewed in edit project overview. [Hotfix](https://github.com/DigitalExcellence/dex-frontend/pull/480)
- Fixed issue where project was still being showed after deletion until refresh . [Hotfix](https://github.com/DigitalExcellence/dex-frontend/pull/481)

## Release v.1.2.0-beta - 15-04-2021

### Added

- Added the new wizard to make adding projects more user-friendly - [#361](https://github.com/DigitalExcellence/dex-frontend/issues/361)

### Changed

- Styling fixes pagination menu detail popup and cards - [#440](https://github.com/DigitalExcellence/dex-frontend/issues/440)

### Fixed
- Added icon for data sources - [#466](https://github.com/DigitalExcellence/dex-frontend/issues/466)

## Release v.1.1.0-beta - 18-03-2021

### Fixed

- Fixed list view animation bug which prevented like animation from playing - [#419](https://github.com/DigitalExcellence/dex-frontend/issues/419)
- Auto dismiss the login warning when liking project if you're not logged in - [#433](https://github.com/DigitalExcellence/dex-frontend/issues/433)
- Hide the active modal when you navigate to another page via browser navigation arrows
  - [#423](https://github.com/DigitalExcellence/dex-frontend/issues/423)


## Release v.1.0.1-beta - 31-01-2021

### Added

- Added SEO & performance check when pushing new code to develop branch - [#285](https://github.com/DigitalExcellence/dex-frontend/issues/285)
- Added a DeX preview with title, description and image for more user-friendliness - [#347](https://github.com/DigitalExcellence/dex-frontend/issues/347)
- Added functionality to like projects - [#389](https://github.com/DigitalExcellence/dex-frontend/issues/389)
- Added update highlight functionality - [#294](https://github.com/DigitalExcellence/dex-frontend/issues/294)
- Added animations on clickable items and while project pages are loading - [#321](https://github.com/DigitalExcellence/dex-frontend/issues/321)
- Added animations when user likes (or unlikes) a project - [#414](https://github.com/DigitalExcellence/dex-frontend/issues/414)
- Added the option to add a Call-To-Action button to a project - [#267](https://github.com/DigitalExcellence/dex-frontend/issues/267)

### Changed

- Changed the open graph tags in order to show a more appealing website preview - [#405](https://github.com/DigitalExcellence/dex-frontend/issues/405)
- Changed it so you can now clear query paramters like pagination or search by clicking on 'projects' again - [#401](https://github.com/DigitalExcellence/dex-frontend/issues/401)
- Changed the design of the filtermenu on project overview page - [#287](https://github.com/DigitalExcellence/dex-frontend/issues/287)

### Fixed

- Fixed issue where images in the project-details view would go outside the page - [#397](https://github.com/DigitalExcellence/dex-frontend/issues/397)
- Fixed issue where builds failed due to Lighthouse budgets not being high enough - [#411](https://github.com/DigitalExcellence/dex-backend/issues/411)
- Fixed issue where long collaborator names would mess up styling - [#354](https://github.com/DigitalExcellence/dex-frontend/issues/354)
- Fixed issue where in some cases the alert banner would not disapear automatically - [#392](https://github.com/DigitalExcellence/dex-frontend/issues/392)
- Fixed issue where opening a modal or long usernames would cause the page to get unaligned - [#400](https://github.com/DigitalExcellence/dex-frontend/issues/400)

## Release v.0.9.0-beta - 09-12-2020

### Added

- Added SEO & performance check when pushing new code to develop branch [#285](https://github.com/DigitalExcellence/dex-frontend/issues/285)
- Added a DeX preview when linking DeX in social media with a title, description and image for more user friendliness [#347](https://github.com/DigitalExcellence/dex-frontend/issues/347)

### Changed

- Redesigned project overview page [#365](https://github.com/DigitalExcellence/dex-frontend/issues/365)
- Implemented redesigned project details page [#362](https://github.com/DigitalExcellence/dex-frontend/issues/362)

### Fixed

- Fixed issue where the project icons would shrink if the description or title was too long - [#349](https://github.com/DigitalExcellence/dex-frontend/issues/349)
- Fixed alert box blocking project edit/-delete buttons - [#352](https://github.com/DigitalExcellence/dex-frontend/issues/352)
- Fixed issue where the pagination parameter was not getting reset on a new search - [#302](https://github.com/DigitalExcellence/dex-frontend/issues/302)
- Fixed images showing alt when image could not be loaded, it now shows placeholder image instead - [#339](https://github.com/DigitalExcellence/dex-frontend/issues/339)
- Fixed issue where tags were not hidden in production - [#373](https://github.com/DigitalExcellence/dex-frontend/issues/373)
- Fixed issue where images were not being lazy loaded - [#374](https://github.com/DigitalExcellence/dex-frontend/issues/374)
- Fixed low accessibility score within Lighthouse tests on home and project overview page [#366](https://github.com/DigitalExcellence/dex-frontend/issues/366)

## Release v.0.8.0-beta - 06-11-2020

### Added

- Added functionality to upload an project icon when creating a project - [#266](https://github.com/DigitalExcellence/dex-frontend/issues/266)
- Added an image to the background - [#320](https://github.com/DigitalExcellence/dex-frontend/issues/320)

### Changed

- Display uploaded project icons - [#311](https://github.com/DigitalExcellence/dex-frontend/issues/311)

## Release v.0.7.0-beta - 09-10-2020

### Added

- Added basic SEO for better google discoverability - [#283](https://github.com/DigitalExcellence/dex-frontend/issues/283)
- Added dynamic updates of meta tags for better discoverability - [#286](https://github.com/DigitalExcellence/dex-frontend/issues/286)

### Changed

- Changed all file line endings from CRLF to LF and added the .gitattributes to enforce it - [#163](https://github.com/DigitalExcellence/dex-backend/issues/163)
- Changed footer styling to be responsive on small screens - [#163](https://github.com/DigitalExcellence/dex-frontend/issues/163)
- Changed header styling to be responsive on small screens - [#258](https://github.com/DigitalExcellence/dex-frontend/issues/258)
- Highlight now shows highlight description instead of project description. - [#273](https://github.com/DigitalExcellence/dex-frontend/issues/273)
- Changed images on the login and home page to new copyright-free images from unDraw - [#97](https://github.com/DigitalExcellence/dex-frontend/issues/97)
- Changed highlight styling to be responsive on small screens - [#195](https://github.com/DigitalExcellence/dex-frontend/issues/195)
- Project detail URLs now show the project name instead of just a project ID - [#298](https://github.com/DigitalExcellence/dex-frontend/issues/298)
- Updates some styling issues for more consistency in the platform - [#299](https://github.com/DigitalExcellence/dex-frontend/issues/299)

### Fixed

- Fixed issue where the project overview page was not responsive on smaller viewports - [#296](https://github.com/DigitalExcellence/dex-frontend/issues/296)
- Fixed issue where the feedback button would block the footer content on smaller screens - [#289](https://github.com/DigitalExcellence/dex-frontend/issues/289)
- Fixed redirect to the project detail page after editing a project - [#256](https://github.com/DigitalExcellence/dex-frontend/issues/256)
- Fixed issue that caused users to log out because token did not get refreshed - [#253](https://github.com/DigitalExcellence/dex-frontend/issues/253)

## Release v.0.6.1-beta - 17-08-2020

### Added

- Added cancel button to project edit page - [#251](https://github.com/DigitalExcellence/dex-frontend/issues/251)

### Changed

- External project links are now opened in a new tab - [#254](https://github.com/DigitalExcellence/dex-frontend/issues/254)

### Fixed

- Fixed issue where long project URI's would overlap other text on details page - [#252](https://github.com/DigitalExcellence/dex-frontend/issues/252)
- Fixed issue where edit & details page would display error message while still loading the project - [#247](https://github.com/DigitalExcellence/dex-frontend/issues/247)

## Release v.0.6-beta - 22-06-2020

### Added

- Added this very changelog - [#62](https://github.com/DigitalExcellence/dex-frontend/issues/62)
- Added issue & pull request templates (bug & report) - [#11](https://github.com/DigitalExcellence/dex-backend/issues/11)
- Added Footer - [#68](https://github.com/DigitalExcellence/dex-frontend/issues/68)
- Implementing design: Edit project page - [#98](https://github.com/DigitalExcellence/dex-frontend/issues/98)
- Implemented new design login page - [#66](https://github.com/DigitalExcellence/dex-frontend/issues/66)
- Implemented search functionality for project overview - [#72](https://github.com/DigitalExcellence/dex-frontend/issues/72)
- Added an embed button and embed page - [#140](https://github.com/DigitalExcellence/dex-frontend/issues/140)
- Get current user role from the backend - [#141](https://github.com/DigitalExcellence/dex-frontend/issues/141)
- Implemented global error handling & logging to Sentry - [#77](https://github.com/DigitalExcellence/dex-frontend/issues/77)
- Implemented wizard for GitHub and GitLab source url's - [#146](https://github.com/DigitalExcellence/dex-frontend/issues/146)
- Implemented the highlight modal - [#75](https://github.com/DigitalExcellence/dex-frontend/issues/75)
- Added the pipeline for the frontend - [#143](https://github.com/DigitalExcellence/dex-frontend/issues/143)
- Implemented alert service & displaying of alerts - [#76](https://github.com/DigitalExcellence/dex-frontend/issues/76)
- Implemented 404 page and catch all route - [#99](https://github.com/DigitalExcellence/dex-frontend/issues/99)
- Implemented pagination on search results and project overview - [#158](https://github.com/DigitalExcellence/dex-frontend/issues/158)
- Implemented the functionality to delete one/multiple highlighted project(s), and implemented a modal where the user can select and confirm the higlights that need to be removed - [#180](https://github.com/DigitalExcellence/dex-frontend/issues/180)
- Implemented alerts to display user friendly success & error messages - [#172](https://github.com/DigitalExcellence/dex-frontend/issues/172)
- Implemented sorting & filtering accordion for project overview - [#171](https://github.com/DigitalExcellence/dex-frontend/issues/171)
- Added privacy policy and updated footer links accordingly - [#211](https://github.com/DigitalExcellence/dex-frontend/issues/211)
- Implemented beta banner & feedback button - [#198](https://github.com/DigitalExcellence/dex-frontend/issues/198)
- Implemented search functionality on home page - [#166](https://github.com/DigitalExcellence/dex-frontend/issues/166)
- Added user to project-overview page, user is now also searchable - [#207](https://github.com/DigitalExcellence/dex-frontend/issues/207)
- Implemented remove project modal - [#193](https://github.com/DigitalExcellence/dex-frontend/issues/193)
- Added a privacy policy modal before the login - [215](https://github.com/DigitalExcellence/dex-frontend/issues/215)
- Implemented permission validation for project edit / delete / highlight / embed buttons - [#213](https://github.com/DigitalExcellence/dex-frontend/issues/213)
- Implemented WYSIWYG Editor for project description - [#216](https://github.com/DigitalExcellence/dex-frontend/issues/216)
- Added pipe to strip html to fix the html showing in highlights - [#243](https://github.com/DigitalExcellence/dex-frontend/issues/243)

### Changed

- Changed from Clarity framework to NGX Bootstrap - [#101](https://github.com/DigitalExcellence/dex-frontend/issues/101)
- Changed the oauth scopes to include email - [#112](https://github.com/DigitalExcellence/dex-frontend/issues/112)
- Updated design for Project Edit page, buttons and other Quality of Life changes - [#128](https://github.com/DigitalExcellence/dex-frontend/pull/128)
- Added more structure to styling & moved scss to specific files in the assets folder - [#122](https://github.com/DigitalExcellence/dex-frontend/issues/122)
- Updated favicon to match branding & added favicon support for various platforms - [#145](https://github.com/DigitalExcellence/dex-frontend/issues/145)
- Hidden project tags for production mode - [#148](https://github.com/DigitalExcellence/dex-frontend/issues/148)
- Changed Login page to display only one login with FHICT button & improved styling of login button - [#157](https://github.com/DigitalExcellence/dex-frontend/issues/157)
- Moved accordion styling out of the global stylesheet and into the stylesheet of the overview component - [#106](https://github.com/DigitalExcellence/dex-frontend/issues/106)
- Changed the login flow to the identity to support direct access to external providers. - [#173](https://github.com/DigitalExcellence/dex-frontend/issues/173)
- Changed default profile picture for users which are logged in - [#147](https://github.com/DigitalExcellence/dex-frontend/issues/147)
- Changed login button text to sign in for consistency - [#186](https://github.com/DigitalExcellence/dex-frontend/issues/186)
- Changed the design of the "Add Project" page - [#188](https://github.com/DigitalExcellence/dex-frontend/issues/188)
- Changed the project-add input and search inputs so you can now press the enter key to submit - [#224](https://github.com/DigitalExcellence/dex-frontend/issues/224)
- Added localStorage Utils class to access the localStorage and it's keys from one central piece of code - [#238](https://github.com/DigitalExcellence/dex-frontend/issues/238)
- Changed the wizard requests, fixed URL not supported error and added message - [#236](https://github.com/DigitalExcellence/dex-frontend/issues/236)
- Changed styling of project overview filters and project add collaborators to match the designs - [#242](https://github.com/DigitalExcellence/dex-frontend/issues/242)
- Changed when Sentry logs http errors - [#231](https://github.com/DigitalExcellence/dex-frontend/issues/231)
- Changed text when there are no Highlights - [#221](https://github.com/DigitalExcellence/dex-frontend/issues/221)

### Removed

- Removed the 'x' from search inputs - [#224](https://github.com/DigitalExcellence/dex-frontend/issues/224)

### Fixed

- Fixed the bug when there are less than 3 highlights - [#113](https://github.com/DigitalExcellence/dex-frontend/issues/113)
- Fixed the bug where requests made to external API's would also receive our access token - [#184](https://github.com/DigitalExcellence/dex-frontend/issues/184)
- Users can no longer edit a project of which they are not the owner - [#168](https://github.com/DigitalExcellence/dex-frontend/issues/168)
- Fixed issue where user would need to login again after a window refresh - [#176](https://github.com/DigitalExcellence/dex-frontend/issues/176)
- Fixed issue where the alert container would display itself while there are no alerts active - [#200](https://github.com/DigitalExcellence/dex-frontend/issues/200)
- Fixed issue where user endpoint would get called when a user is not authenticated - [#189](https://github.com/DigitalExcellence/dex-frontend/issues/189)
- Fixed issue where empty search would cause a 404 error to appear on the projects overview page - [#179](https://github.com/DigitalExcellence/dex-frontend/issues/179)
- Fixed the styling of the contributors overview on the project detail page - [#182](https://github.com/DigitalExcellence/dex-frontend/issues/182)
- Fixed issue where a not authenticated user was able to open the project-add modals - [#224](https://github.com/DigitalExcellence/dex-frontend/issues/224)
- Fixed the layout of project embed pages breaking on smaller viewports - [#223](https://github.com/DigitalExcellence/dex-frontend/issues/223)
- Fixed issue where beta banner was not dismissible - [#239](#https://github.com/DigitalExcellence/dex-frontend/issues/239)
- Fixed styling to match the designs, replaced images on home and sign in - [#233](https://github.com/DigitalExcellence/dex-frontend/issues/233)
- Fixed issue where invalid project id would trigger error - [#235](https://github.com/DigitalExcellence/dex-frontend/issues/235)
