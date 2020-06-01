import {createQACustom as qa} from '../utils/utils';

class ProjectSettings {
  //Locators
  projectSettingsTitle = 'Project Settings';
  confirmDeleteButton = 'Yes, delete setting';
  deleteSettingModalTitle = 'Delete Setting';
  closeModalButton = 'Close';
  tableRow = 'tr';
  addProjectButton = qa('projectsSettingsAddBtn');
  editProjectButton = qa('projectsSettingsEditBtn');
  settingInput = qa('settingsInput');
  confirmProjectButton = qa('projectsSettingsConfirmBtn');
  deleteProjectButton = qa('projectsSettingsDeleteBtn');
  cancelProjectButton = qa('projectsSettingsCancelBtn');

  //Text utils
  projectWasNotAddedErrorMessage = 'Error: project was not added';
  projectIsDuplicatedErrorMessage = 'Error: project already exists';
  emptyProjectNameErrorMessage = 'Please enter project abbreviation.';
  emptyProjectAbbreviationErrorMessage = 'Please enter project name';
  projectAbbreviationLengthErrorMessage = 'Abbreviation shoud contain min 2 max 3 letters or digits.';
  projectNameLengthErrorMessage = 'This input should have between 1 and 30 characters (numbers and/or letters)';
  generalSettingsPath = '/settings/general';
  addProjectRequestObject = {
    method: 'POST',
    url: '**/api/v1/Projects',
  };
  editProjectRequestObject = {
    method: 'PUT',
    url: '**/api/v1/Projects/**',
  };
  addProjectBadRequestObject = {
    method: 'POST',
    url: '**/api/v1/Projects',
    status: 500,
    response: {},
  };
  addProjectRequestAlias = 'postAddProject';
  addProjectBadRequestAlias = 'postAddProjectBadRequest';
  editProjectRequestAlias = 'putEditProject';
  successStatusMessage = '201 (Created)';

  //Methods
  visitGeneralSettingsPage = () => {
    cy.visit(this.generalSettingsPath);
  };

  accessProjectSettings = () => {
    this.visitGeneralSettingsPage();
    cy.contains(this.projectSettingsTitle).click();
  };

  completeProjectData = (name, abbreviation) => {
    //Type a project name
    cy.get(this.settingInput).eq(0).clear().type(name);
    //Type a project abbreviation
    cy.get(this.settingInput).eq(1).clear().type(abbreviation);
  };

  addProject = (name, abbreviation) => {
    //Click on Add button
    cy.get(this.addProjectButton).click();
    this.completeProjectData(name, abbreviation);
    //Click on the confirmation button
    cy.get(this.confirmProjectButton).click();
  };

  editProject = (oldName, newName, newAbbreviation) => {
    cy.contains(this.tableRow, oldName).find(this.editProjectButton).click();
    this.completeProjectData(newName, newAbbreviation);
    cy.get(this.confirmProjectButton).click();
  };

  deleteProject = (name) => {
    //Identify project row & click delete button
    cy.contains(this.tableRow, name).find(this.deleteProjectButton).click();
    //Confirm delete
    cy.contains(this.confirmDeleteButton).click();
  };

  checkProjectIsAdded = (projectName, projectAbbreviation) => {
    cy.contains(projectName).should('be.visible');
    cy.contains(projectAbbreviation).should('be.visible');
  };

  checkProjectIsNotVisible = (projectName) => {
    cy.contains(projectName).should('not.be.visible');
  };

  checkProjectWasNotAddedError = () => {
    cy.contains(this.projectWasNotAddedErrorMessage).should('be.visible');
  };

  checkCurrentPageIsGeneralSettings = () => {
    //Check URL is correct for General Settings page
    cy.url().should('contain', this.generalSettingsPath);
    //Check that Project Settings text is displayed
    cy.contains(this.projectSettingsTitle).should('be.visible');
    //Check that Add button is not displayed
    cy.get(this.addProjectButton).should('not.be.visible');
  };

  checkProjectIsDuplicatedError = () => {
    cy.contains(this.projectIsDuplicatedErrorMessage).should('be.visible');
  };

  checkProjectIsEmptyErrorMessages = () => {
    cy.get(this.addProjectButton).click();
    cy.get(this.confirmProjectButton).click();
    cy.contains(this.emptyProjectNameErrorMessage).should('be.visible');
    cy.contains(this.emptyProjectAbbreviationErrorMessage).should('be.visible');
  };

  checkInputsDisappearOnCancel = () => {
    cy.get(this.addProjectButton).click();
    cy.get(this.cancelProjectButton).click();
    cy.get(this.settingInput).should('not.be.visible');
  };

  checkProjectAbbreviationLengthErrorMessage = (invalidAbbreviation) => {
    cy.get(this.addProjectButton).click();
    cy.get(this.settingInput).eq(1).clear().type(invalidAbbreviation);
    cy.contains(this.projectAbbreviationLengthErrorMessage).should('be.visible');
    cy.get(this.cancelProjectButton).click();
  };

  checkProjectNameLengthErrorMessage = (invalidName) => {
    cy.get(this.addProjectButton).click();
    cy.get(this.settingInput).eq(0).clear().type(invalidName);
    cy.contains(this.projectNameLengthErrorMessage).should('be.visible');
    cy.get(this.cancelProjectButton).click();
  };

  captureAddProjectRequest = () => {
    cy.server();
    cy.route(this.addProjectRequestObject).as(this.addProjectRequestAlias);
  };

  captureAddProjectBadRequest = () => {
    cy.server();
    cy.route(this.addProjectBadRequestObject).as(this.addProjectBadRequestAlias);
  };

  checkAddProjectRequestIsSuccessful = () => {
    cy.wait(`@${this.addProjectRequestAlias}`).then((xhr) => {
      expect(xhr.status).to.eq(201);
      expect(xhr.statusMessage).to.eq(this.successStatusMessage);
    });
  };

  captureEditProjectRequest = () => {
    cy.server();
    cy.route(this.editProjectRequestObject).as(this.editProjectRequestAlias);
  };

  checkEditProjectRequestIsSuccessful = () => {
    cy.wait(`@${this.editProjectRequestAlias}`).then((xhr) => {
      expect(xhr.status).to.eq(204);
    });
  };

  closeDeleteModal = () => {
    cy.contains(this.closeModalButton).click();
  };

  openDeleteModal = (name) => {
    cy.contains(this.tableRow, name).find(this.deleteProjectButton).click();
  };

  checkDeleteModalIsClosed = () => {
    cy.contains(this.deleteSettingModalTitle).should('not.be.visible');
  };
}

export default new ProjectSettings();
