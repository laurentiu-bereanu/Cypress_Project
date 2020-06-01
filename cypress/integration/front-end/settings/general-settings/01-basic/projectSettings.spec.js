/*import {createRandomString} from '../../../../../support/utils/utils';
import projectSettingsPage from '../../../../../support/pages/projectSettings';
import loginPage from '../../../../../support/pages/login';

let projectName;
let projectAbbreviation;

describe('General settings page tests', () => {
  beforeEach(() => {
    //Create unique test data for tests
    projectName = createRandomString(5);
    projectAbbreviation = createRandomString(3);

    loginPage.login(loginPage.testUsername);
    projectSettingsPage.accessProjectSettings();
  });

  describe('Tests that require cleanup', () => {
    afterEach(() => {
      //Clean up
      projectSettingsPage.deleteProject(projectName);
    });

    it('Checks that new project can be added.', () => {
      projectSettingsPage.addProject(projectName, projectAbbreviation);
      projectSettingsPage.checkProjectIsAdded(projectName, projectAbbreviation);
    });

    it('Checks that new project can be added with request validation. (A more advanced example)', () => {
      //open server and capture the POST request
      projectSettingsPage.captureAddProjectRequest();
      projectSettingsPage.addProject(projectName, projectAbbreviation);
      projectSettingsPage.checkProjectIsAdded(projectName, projectAbbreviation);
      //wait for the request and check status code and status message
      projectSettingsPage.checkAddProjectRequestIsSuccessful();
    });

    it('Checks that a project can be edited.', () => {
      const newProjectName = createRandomString(5);
      const newProjectAbbreviation = createRandomString(2);

      projectSettingsPage.addProject(projectName, projectAbbreviation);
      projectSettingsPage.editProject(projectName, newProjectName, newProjectAbbreviation);
      projectSettingsPage.checkProjectIsAdded(newProjectName, newProjectAbbreviation);

      //We change projectName to equal newProjectName so that we can delete the project with the afterEach method.
      projectName = newProjectName;
    });

    it('Checks that a project can be edited with request validation', () => {
      const newProjectName = createRandomString(5);
      const newProjectAbbreviation = createRandomString(2);

      projectSettingsPage.captureEditProjectRequest();
      projectSettingsPage.addProject(projectName, projectAbbreviation);
      projectSettingsPage.editProject(projectName, newProjectName, newProjectAbbreviation);
      projectSettingsPage.checkProjectIsAdded(newProjectName, newProjectAbbreviation);
      projectSettingsPage.checkEditProjectRequestIsSuccessful();

      //We change projectName to equal newProjectName so that we can delete the project with the afterEach method.
      projectName = newProjectName;
    });

    it.skip('Checks that error messages appear when trying to insert a project name that already exists', () => {
      projectSettingsPage.addProject(projectName, projectAbbreviation);
      projectSettingsPage.addProject(projectName, projectAbbreviation);
      projectSettingsPage.checkProjectIsDuplicatedError();
    });

    it('Checks that when pressing on cancel when deleting a project it closes the modal.', () => {
      projectSettingsPage.addProject(projectName, projectAbbreviation);
      projectSettingsPage.openDeleteModal(projectName);
      projectSettingsPage.closeDeleteModal();
      projectSettingsPage.checkProjectIsAdded(projectName, projectAbbreviation);
      projectSettingsPage.checkDeleteModalIsClosed();
    });
  });

  it('Checks that new project can be deleted.', () => {
    projectSettingsPage.addProject(projectName, projectAbbreviation);
    projectSettingsPage.deleteProject(projectName);
    projectSettingsPage.checkProjectIsNotVisible(projectName);
  });

  it.skip('Check error message appears when add project request returns 500. (A more advanced example)', () => {
    //open server, capture the POST request and make it return 500.
    projectSettingsPage.captureAddProjectBadRequest();
    projectSettingsPage.addProject(projectName, projectAbbreviation);
    projectSettingsPage.checkProjectIsNotVisible(projectName);
    //chek that an error message is shown to the user that says the project was not added. It will fail because the website doesn't cover this.
    projectSettingsPage.checkProjectWasNotAddedError();
  });

  it('Can access general settings page.', () => {
    projectSettingsPage.visitGeneralSettingsPage();
    projectSettingsPage.checkCurrentPageIsGeneralSettings();
  });

  it('Checks that error messages appear when project inputs are empty', () => {
    projectSettingsPage.checkProjectIsEmptyErrorMessages();
  });

  it('Checks that inputs disappear when pressing the cancel icon', () => {
    projectSettingsPage.checkInputsDisappearOnCancel();
  });

  it('Checks that error message appears when project abbreviation is not between 2 and 3 characters', () => {
    const invalidAbbreviations = [createRandomString(1), createRandomString(4)];

    invalidAbbreviations.forEach((invalidAbbreviation) => {
      projectSettingsPage.checkProjectAbbreviationLengthErrorMessage(invalidAbbreviation);
    });
  });

  it('Checks that error messages appear when project name is not between 1 and 30 characters', () => {
    const invalidNames = ['!', createRandomString(31)];

    invalidNames.forEach((invalidName) => {
      projectSettingsPage.checkProjectNameLengthErrorMessage(invalidName);
    });
  });
});
*/
