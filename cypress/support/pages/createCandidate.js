import {createQACustom as qa, createRandomString, createRandomNumber, createRandomEmail} from '../utils/utils';
import _ from 'lodash';
class createCandidate {
  //Locators
  createCandidateTitle = 'Create Candidate';
  createCandidateModalTitle = '#rcDialogTitle0';
  closeModalCancelButton = '.customCloseBtn';

  closeCreateCandidateModalXButton = '.ant-modal-close-x';

  candidateNameInput = '.qa-name';
  candidatePhoneInput = '.qa-phone';
  candidateCityInput = '.qa-city';
  candidateEmailInput = '.qa-email';
  candidateCurrentCompanyInput = '.qa-currentCompany';
  candidateCurrentJobInput = '.qa-currentJob';
  candidateExperienceInput = '#experience';
  candidateSkillsInput = '#skills';
  candidateSeniorityInput = '#seniorityId>div';
  candidateFirstContactDateInput = '#firstContactDate';
  candidateLastContactDateInput = '#lastContactDate';
  candidateCvSourceInput = '#cvSourceId';
  candidateRoleInput = '#roleId';
  candidateContactStatusInput = '#contactStatusId';
  candidateFutureContactDateInput = '#futureContactDate';
  candidateIsReferreredButton = '#isReference';
  candidateReferralInput = '#referral';
  candidateRecruiterInput = '#recruiter';
  calendarTextInput = 'input.ant-calendar-input';
  candidateUploadFileButton = '#filesUpload';
  candidateUploadRemoveButton = '.ant-upload-list-item-card-actions > a'; //Nu am gasit alt locator :(
  calendarTable = '.ant-calendar';
  seniorityIdSelectValue = '.qa-seniorityIdSelectValue';
  roleIdSelectValue = '.qa-roleIdSelectValue';
  recruiterIdSelectValue = '.qa-recruiterSelectValue';
  cvSourceIdSelectValue = '.qa-cvSourceIdSelectValue';
  contactStatusIdSelectValue = '.qa-contactStatusIdSelectValue';
  deleteCandidateButton = qa('deleteRow');
  documentsCandidateButton = qa('attachmentsRow');
  viewCandidateButton = qa('viewRow');
  editCandidateButton = qa('editRow');
  assignJobButton = qa('assignRow');
  startProcessButton = qa('startProcessRow');
  searchButton = qa('searchCandidatesBtn');
  clearSearchButton = qa('clearSearchBtn');
  searchNameInput = '.qa-name';
  searchPhoneInput = '.qa-phone';
  searchEmailInput = '.qa-email';
  searchCityInput = '.qa-city';
  searchRecruiterInput = '.qa-recruiter';
  searchSkillsInput = '#skills';
  searchContactStatus = '.qa-contactStatusAutocomplete';
  searchCurrentCompany = '.qa-currentCompany';
  searchCurrentJob = '.qa-currentJob';
  searchCvSource = '.qa-cvSource';
  //Data

  //API URL
  settingsApiUrl = 'http://52.233.158.155:8080/api/v1/Settings';
  talentTeamApiUrl = 'http://52.233.158.155:8080/api/v1/Employees/talentTeam';
  employeesApiUrl = 'http://52.233.158.155:8080/api/v1/Employees/employees';
  //View Candidate Header Cells
  jobSelectionText = 'Please select job/s';
  jobProcessSelectionText = 'Please select a job';
  jobName = 'Levi9Test - T1-4';
  assignText = 'Assign';
  startProcessText = 'Start Process';
  nameHeader = 'Name';
  phoneHeader = 'Phone';
  emailHeader = 'Email';
  currentCompanyHeader = 'Current Company';
  currentJobHeader = 'Current Job';
  roleHeader = 'Role';
  experienceHeader = 'Experience';
  seniorityHeader = 'Seniority';
  cityHeader = 'City';
  skillsHeader = 'Skills';
  firstContactDateHeader = 'First contact date';
  lastContactDateHeader = 'Last contact date';
  cvSourceHeader = 'CV Source';
  contactStatusHeader = 'Contact Status';
  referralHeader = 'Referral employee';
  recruiterHeader = 'Recruiter';
  futureContactDateHeader = 'Future Contact Date';
  //Test Data
  seniorityValue = 'Test50';
  seniorityNewValue = 'NewTest';
  cvSourceValue = 'Cvsource';
  cvSourceNewValue = 'Newcvsource';
  contactStatusValue = 'fiipractic';
  contactStatusNewValue = 'itpebune';
  roleValue = 'manager';
  roleNewValue = 'angajat';
  //Text utils
  processPath = 'process';
  seniorityParentId = '49a35189-8a6a-4358-a31e-5722bed2945c';
  seniorityType = 'seniority';
  cvSourceParentId = '9213a23d-4d50-4b0c-aa0b-db6b6357a542';
  cvSourceType = 'cvSource';

  contactStatusParentId = '9213a23d-4d50-4b0c-aa0b-db6b6357a542';
  contactStatusType = 'contactStatus';

  roleParentId = '9213a23d-4d50-4b0c-aa0b-db6b6357a542';
  roleType = 'role';

  div = 'div';
  list = 'li';
  tableRow = 'tr';
  tableHeaderCell = 'th';
  tableStandardCell = 'td';
  days = 'days';
  months = 'months';
  years = 'years';
  MinExperience = '0';
  MaxExperience = '100';
  randomDate = '11/02/1997';
  confirmSaveCandidateText = 'Save candidate';
  confirmUpdateCandidateText = 'Yes, update candidate';
  candidatesPath = '/candidates';
  comma = ',';
  slash = '/';
  attributeAriaExpanded = 'aria-expanded';
  attributeValue = 'value';
  valueTrue = 'true';
  valueFalse = 'false';
  searchText = 'Search';
  advancedSearchText = 'Advanced Search';
  viewCandidateDocumenetsModalText = 'View candidate documents';
  viewCandidateModalText = 'View Candidate';
  editCandidateModalText = 'Edit Candidate';
  assignJobCandidateModalText = 'Assign job to candidate';
  candidatesInProcessModalText = 'Start process for candidate';

  deleteCandidateConfirmText = 'Yes, delete candidate';
  candidateNameInvalidErrorMessage = 'Name should contain only letters.';
  candidatePhoneInvalidErrorMessage = 'Phone does not have the correct format.';
  candidateCityInvalidErrorMessage = 'City should contain only letters.';
  candidateEmailInvalidErrorMessage = 'Email does not have the correct format.';
  candidateEmailDuplicateErrorMessage = 'There is another candidate registered with this email address';
  candidateExperienceIsRequiredErrorMessage = 'Experience is required.';
  candidateEmailIsRequiredErrorMessage = 'Email is required.';
  candidateNameIsRequiredErrorMessage = 'Full name is required.';
  candidateSeniorityIsRequiredErrorMessage = 'Seniority is required.';
  candidateRecruiterIsRequiredErrorMessage = 'The recruiter is required.';
  candidateFirstContactDateIsRequiredErrorMessage = 'First contact date is required.';
  candidateLastContactDateIsRequiredErrorMessage = 'Last contact date is required.';
  candidateCvSourceIsRequiredErrorMessage = 'CV source is required.';
  candidateContactStatusIsRequiredErrorMessage = 'Contact Status is required.';
  candidateRoleIsRequiredErrorMessage = 'Role is required.';
  candidateReferralIsRequiredErrorMessage = 'The referral employee is required.';
  candidateInvalidFileFormatErrorMessage = "You can't add files with this format.";
  candidateDuplicateFilesErrorMessage = "You can't have multiple files with the same name";
  candidateMaxFilesUploadMessage = "You can't have more than 10 attachments";

  searchInvalidNameErrorMessage = 'Name should contain only letters.';
  searchInvalidPhoneErrorMessage = 'Phone does not have the correct format.';
  searchInvalidCityErrorMessage = 'City should contain only letters.';
  //Request Alias
  checkCandidateEmailAlias = 'headEmailCandidate';
  addCandidateAlias = 'postAddCandidate';
  patchViewDateAlias = 'updateLastViewDate';
  assignJobCandidateAlias = 'assignJobCandidate';
  candidateProcessesAlias = 'candidatesProcesses';
  postSearchCandidateAlias = 'searchCandidate';

  //Request Objects
  checkCandidateEmailRequestObject = {
    method: 'HEAD',
    url: '**/api/v1/Candidates/**',
  };

  checkAddCandidateRequestObject = {
    method: 'POST',
    url: '**/api/v1/Candidates',
  };

  checkPatchViewDateRequestObject = {
    method: 'PATCH',
    url: '**/api/v1/Candidates/**/updateLastViewDate',
  };
  checkPutAssignJobCandidateRequestObject = {
    method: 'PUT',
    url: '**/api/v1/Candidates/**/assignedJobs',
  };
  checkPostCandidatesProcessesRequestObject = {
    method: 'POST',
    url: '**/api/v1/CandidatesProcesses',
  };

  checkPostSearchCandidateRequestObject = {
    method: 'POST',
    url: '**/api/v1/Candidates/search',
  };

  //Methods

  visitCandidatesPage = () => {
    cy.visit(this.candidatesPath);
  };
  clickSeniorityDropDown = () => {
    cy.get(this.candidateSeniorityInput).scrollIntoView().click();
  };

  clickPhoneInput = () => {
    cy.get(this.candidatePhoneInput).click();
  };

  clickCreateCandidateButton = () => {
    cy.contains(this.createCandidateTitle).click();
  };

  checkCreateCandidateModalIsOpened = () => {
    cy.get(this.createCandidateModalTitle).should('be.visible');
  };

  checkCreateCandidateModalIsClosed = () => {
    cy.get(this.createCandidateModalTitle).should('not.be.visible');
  };

  closeModalByPressingXButton = () => {
    cy.get(this.closeCreateCandidateModalXButton).click();
  };
  closeModalByPressingCancelButton = () => {
    cy.get(this.closeModalCancelButton).click();
  };
  completeCandidateName = (name) => {
    cy.get(this.candidateNameInput).clear().type(name);
  };
  completeCandidatePhone = (phone) => {
    cy.get(this.candidatePhoneInput).clear().type(phone);
  };
  completeCandidateCity = (city) => {
    cy.get(this.candidateCityInput).clear().type(city);
  };
  completeCandidateEmail = (email) => {
    cy.get(this.candidateEmailInput).clear().type(email);
  };
  completeCandidateCurrentCompany = (currentCompany) => {
    cy.get(this.candidateCurrentCompanyInput).clear().type(currentCompany);
  };
  completeCandidateCurrentJob = (currentJob) => {
    cy.get(this.candidateCurrentJobInput).clear().type(currentJob);
  };
  completeCandidateExperience = (experience) => {
    cy.get(this.candidateExperienceInput).type('{backspace}{backspace}{backspace}').type(experience);
  };
  completeCandidateSingleSkill = (skills) => {
    cy.get(this.candidateSkillsInput).type('{backspace}').type(skills).type('{enter}');
  };
  completeCandidateMultipleSkills = (skills, numberOfSkills, numberOfChractersInSkill) => {
    for (var i = 0; i < numberOfSkills; i++) {
      cy.wait(20);
      skills = createRandomString(numberOfChractersInSkill);
      cy.get(this.candidateSkillsInput).type(skills).type(this.comma);
      skills = '';
    }
  };
  completeCandidateFirstContactDateTyping = (firstContactDate) => {
    cy.get(this.candidateFirstContactDateInput)
      .type(
        '{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}',
      )
      .type(firstContactDate)
      .type('{enter}');
  };

  completeCandidateLastContactDateTyping = (lastContactDate) => {
    cy.get(this.candidateLastContactDateInput)
      .type(
        '{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}',
      )
      .type(lastContactDate)
      .type('{enter}');
  };
  completeCandidateFutureContactDateTyping = (futureContactDate) => {
    cy.get(this.candidateFutureContactDateInput)
      .type(
        '{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}',
      )
      .type(futureContactDate)
      .type('{enter}');
  };
  completeCandidateSeniority = (seniority) => {
    cy.get(this.candidateSeniorityInput).scrollIntoView().click();
    cy.get(this.seniorityIdSelectValue).contains(seniority).click();
  };
  completeCandidateRecruiter = (recruiter) => {
    cy.get(this.candidateRecruiterInput).scrollIntoView().click();
    cy.get(this.recruiterIdSelectValue).contains(recruiter).click();
  };

  completeCandidateCvSource = (cvSource) => {
    cy.get(this.candidateCvSourceInput).scrollIntoView().click();
    cy.get(this.cvSourceIdSelectValue).contains(cvSource).click();
  };

  completeCandidateContactStatus = (contactStatus) => {
    cy.get(this.candidateContactStatusInput).scrollIntoView().click();
    cy.get(this.contactStatusIdSelectValue).contains(contactStatus).click();
  };
  completeCandidateRole = (role) => {
    cy.get(this.candidateRoleInput).scrollIntoView().click();
    cy.get(this.roleIdSelectValue).contains(role).click();
  };
  completeCandidateReferral = (referral) => {
    cy.get(this.candidateReferralInput).scrollIntoView().click();
    cy.get(this.candidateReferralInput)
      .siblings(this.div)
      .within(() => {
        cy.contains(this.list, referral).scrollIntoView().click();
      });
  };

  checkCandiateNameInvalidErrorMessage = (name) => {
    this.completeCandidateName(name);
    cy.contains(this.candidateNameInvalidErrorMessage).should('be.visible');
  };

  checkCandiatePhoneInvalidErrorMessage = (phone) => {
    this.completeCandidatePhone(phone);
    cy.contains(this.candidatePhoneInvalidErrorMessage).should('be.visible');
  };

  checkCandiateCityInvalidErrorMessage = (city) => {
    this.completeCandidateCity(city);
    cy.contains(this.candidateCityInvalidErrorMessage).should('be.visible');
  };

  checkCandiateEmailInvalidErrorMessage = (email) => {
    this.completeCandidateEmail(email);
    cy.get(this.candidatePhoneInput).click();
    cy.contains(this.candidateEmailInvalidErrorMessage).should('be.visible');
  };

  checkCandiateEmailDuplicateErrorMessage = () => {
    cy.get(this.candidatePhoneInput).click();
    cy.contains(this.candidateEmailDuplicateErrorMessage).should('be.visible');
  };
  checkCandidateExperienceIsRequiredErrorMessage = (experience) => {
    this.completeCandidateExperience(experience);
    cy.get(this.candidateSkillsInput).click();
    cy.contains(this.candidateExperienceIsRequiredErrorMessage).should('be.visible');
  };

  checkCandidateInputIsRequiredErrorMessage = (input, error_message) => {
    cy.get(input).click();
    cy.get(this.candidatePhoneInput).click();
    cy.contains(error_message).scrollIntoView().should('be.visible');
  };
  checkCandidateContactDateIsRequiredErrorMessage = (input, error_message) => {
    cy.get(input).click();
    cy.get(this.calendarTextInput).type(this.randomDate).clear();
    cy.get(this.candidatePhoneInput).click();
    cy.contains(error_message).scrollIntoView().should('be.visible');
  };
  checkIfNameInvalidErrorMessageIsDisplayed = () => {
    cy.contains(this.searchInvalidNameErrorMessage).should('be.visible');
  };
  checkIfPhoneInvalidErrorMessageIsDisplayed = () => {
    cy.contains(this.searchInvalidPhoneErrorMessage).should('be.visible');
  };
  checkIfCityInvalidErrorMessageIsDisplayed = () => {
    cy.contains(this.searchInvalidCityErrorMessage).should('be.visible');
  };

  checkIfFileFormatItsInvalidErrorMessage = () => {
    cy.contains(this.candidateInvalidFileFormatErrorMessage).scrollIntoView().should('be.visible');
  };
  checkIfDuplicateFileErrorMessage = () => {
    cy.contains(this.candidateDuplicateFilesErrorMessage).should('be.visible');
  };
  clickReferredByButton = () => {
    cy.get(this.candidateIsReferreredButton).click();
  };

  checkCandidateExperienceIsSetTo0 = (value) => {
    cy.get(this.candidateExperienceInput).click().type(value);
    cy.get(this.candidateSkillsInput).click();
    cy.get(this.candidateExperienceInput).invoke('attr', 'value').should('equal', this.MinExperience);
  };

  checkCandidateExperienceIsSetTo100 = (value) => {
    cy.get(this.candidateExperienceInput).click().type(value);
    cy.get(this.candidateSkillsInput).click();
    cy.get(this.candidateExperienceInput).invoke('attr', 'value').should('equal', this.MaxExperience);
  };

  uploadFile = (file) => {
    cy.get(this.candidateUploadFileButton, {force: true}).scrollIntoView().attachFile(file);
  };
  uploadFileMultipleTimes = (file, number) => {
    for (var i = 0; i < number; i++) {
      cy.get(this.candidateUploadFileButton, {force: true}).attachFile(file[i]);
    }
  };
  uploadFileMultipleTimesUsingDragAndDrop = (file, number) => {
    for (var i = 0; i < number; i++) {
      cy.get(this.candidateUploadFileButton, {force: true}).attachFile(file[i], {subjectType: 'drag-n-drop'});
    }
  };

  checkIfTheFileUploaded = (file) => {
    cy.contains(file).scrollIntoView().should('be.visible');
  };

  checkMaxFilesUploadedErrorMessage = () => {
    cy.contains(this.candidateMaxFilesUploadMessage).scrollIntoView().should('be.visible');
  };

  checkIfFileIsNotDisplayed = (fileName) => {
    cy.contains(fileName).should('not.be.visible');
  };

  clickRemoveFile = () => {
    cy.get(this.candidateUploadRemoveButton).click();
  };

  checkIfReferralInputIsDisplayed = () => {
    cy.get(this.candidateReferralInput).should('be.visible');
  };

  checkIfReferralInputIsNotDisplayed = () => {
    cy.get(this.candidateReferralInput).should('not.be.visible');
  };

  checkIfReferralButtonIsEnabled = () => {
    cy.get(this.candidateIsReferreredButton).invoke('attr', 'aria-checked').should('equal', 'true');
  };

  checkIfReferralButtonIsDisabled = () => {
    cy.get(this.candidateIsReferreredButton).invoke('attr', 'aria-checked').should('equal', 'false');
  };

  checkIfAnAttributeItsEqualToAValue = (element, attribute, value) => {
    cy.get(element).invoke('attr', attribute).should('equal', value);
  };

  completeDataForCandidate = (object) => {
    //Required fields
    if (!_.isEmpty(object.name)) {
      this.completeCandidateName(object.name);
    }
    if (!_.isEmpty(object.seniority)) {
      this.completeCandidateSeniority(object.seniority);
    }
    if (!_.isEmpty(object.email)) {
      this.completeCandidateEmail(object.email);
    }
    if (!_.isEmpty(object.firstContactDate)) {
      this.completeCandidateFirstContactDateTyping(object.firstContactDate);
    }
    if (!_.isEmpty(object.recruiter)) {
      this.completeCandidateRecruiter(object.recruiter);
    }

    if (!_.isEmpty(object.lastContactDate)) {
      this.completeCandidateLastContactDateTyping(object.lastContactDate);
    }
    if (!_.isEmpty(object.cvSource)) {
      this.completeCandidateCvSource(object.cvSource);
    }
    if (!_.isEmpty(object.contactStatus)) {
      this.completeCandidateContactStatus(object.contactStatus);
    }
    if (!_.isEmpty(object.role)) {
      this.completeCandidateRole(object.role);
    }

    this.completeCandidateExperience(object.experience);

    if (!_.isEmpty(object.referral)) {
      this.clickReferredByButton();
      this.completeCandidateReferral(object.referral);
    }
    //Optional fields
    if (!_.isEmpty(object.phone)) {
      this.completeCandidatePhone(object.phone);
    }
    if (!_.isEmpty(object.city)) {
      this.completeCandidateCity(object.city);
    }
    if (!_.isEmpty(object.currentCompany)) {
      this.completeCandidateCurrentCompany(object.currentCompany);
    }
    if (!_.isEmpty(object.currentJob)) {
      this.completeCandidateCurrentJob(object.currentJob);
    }
    if (!_.isEmpty(object.futureContactDate)) {
      this.completeCandidateFutureContactDateTyping(object.futureContactDate);
    }
    if (!_.isEmpty(object.skills)) {
      this.completeCandidateSingleSkill(object.skills);
    }
  };

  checkViewCandidateRowIsVisible = (header, object) => {
    cy.contains(this.viewCandidateModalText)
      .parent()
      .next()
      .contains(this.tableHeaderCell, header)
      .parent()
      .contains(this.tableStandardCell, object)
      .should('be.visible');
  };
  checkViewCandidateInformations = (object) => {
    this.checkViewCandidateRowIsVisible(this.nameHeader, object.name);
    this.checkViewCandidateRowIsVisible(this.emailHeader, object.email);
    this.checkViewCandidateRowIsVisible(this.roleHeader, object.role);
    this.checkViewCandidateRowIsVisible(this.experienceHeader, object.experience);
    this.checkViewCandidateRowIsVisible(this.seniorityHeader, object.seniority);
    //this.checkViewCandidateRowIsVisible(this.firstContactDateHeader, object.firstContactDate);
    //this.checkViewCandidateRowIsVisible(this.lastContactDateHeader, object.lastContactDate);
    this.checkViewCandidateRowIsVisible(this.cvSourceHeader, object.cvSource);
    this.checkViewCandidateRowIsVisible(this.contactStatusHeader, object.contactStatus);
    //Optional fields
    if (!_.isEmpty(object.referral)) {
      this.checkViewCandidateRowIsVisible(this.referralHeader, object.referral);
    }
    if (!_.isEmpty(object.phone)) {
      this.checkViewCandidateRowIsVisible(this.phoneHeader, object.phone);
    }
    if (!_.isEmpty(object.city)) {
      this.checkViewCandidateRowIsVisible(this.cityHeader, object.city);
    }
    if (!_.isEmpty(object.currentCompany)) {
      this.checkViewCandidateRowIsVisible(this.currentCompanyHeader, object.currentCompany);
    }
    if (!_.isEmpty(object.currentJob)) {
      this.checkViewCandidateRowIsVisible(this.currentJobHeader, object.currentJob);
    }
    /* if (!_.isEmpty(object.futureContactDate)) {
      this.checkViewCandidateRowIsVisible(this.futureContactDateHeader, object.futureContactDate);
    }*/
    if (!_.isEmpty(object.skills)) {
      this.checkViewCandidateRowIsVisible(this.skillsHeader, object.skills);
    }
  };
  clickSaveCandidateButton = () => {
    cy.contains(this.confirmSaveCandidateText).scrollIntoView().click();
  };
  clickUpdateCandidateButton = () => {
    cy.contains(this.confirmUpdateCandidateText).click();
  };
  checkIfCalendarIsDisplayed = (element) => {
    cy.get(element).click();
    cy.get(this.calendarTable).scrollIntoView().should('be.visible');
    cy.get(this.candidatePhoneInput).click();
  };

  deleteCandidate = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().find(this.deleteCandidateButton).click({force: true});
    return cy.contains(this.deleteCandidateConfirmText).click();
  };
  checkIftheGoodCandidateIsDisplayed = (candidateName) => {
    cy.contains(this.tableRow, candidateName).should('be.visible');
  };
  clickSearchButton = () => {
    cy.get(this.searchButton).click({force: true});
  };
  checkCandidateDocumentsButtonIsDisplayed = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().find(this.documentsCandidateButton).should('exist');
  };

  clickCandidateDocumentsButton = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().find(this.documentsCandidateButton).click({force: true});
  };

  clickEditCandidateButton = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().find(this.editCandidateButton).click({force: true});
  };

  clickViewCandidate = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().find(this.viewCandidateButton).click({force: true});
  };
  clickAssignJobCandidate = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().find(this.assignJobButton).click({force: true});
  };
  clickStartProcessCandidate = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().find(this.startProcessButton).click({force: true});
  };
  checkIfCandidatesInProcessButtonIsDisplayed = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().find(this.startProcessButton).should('exist');
  };
  checkIfCandidatesInProcessButtonIsNotDisplayed = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().find(this.startProcessButton).should('not.exist');
  };
  checkIfEditCandidateModalIsDisplayed = () => {
    cy.contains(this.editCandidateModalText).should('be.visible');
  };
  checkIfEditCandidateModalIsNotDisplayed = () => {
    cy.contains(this.editCandidateModalText).should('not.be.visible');
  };
  checkIfAssignJobCandidateModalIsDisplayed = () => {
    cy.contains(this.assignJobCandidateModalText).should('be.visible');
  };
  checkIfAssignJobCandidateModalIsNotDisplayed = () => {
    cy.contains(this.assignJobCandidateModalText).should('not.be.visible');
  };
  checkIfCandidateProcessModalIsDisplayed = () => {
    cy.contains(this.candidatesInProcessModalText).should('be.visible');
  };
  checkIfCandidateProcessModalIsNotDisplayed = () => {
    cy.contains(this.candidatesInProcessModalText).should('not.be.visible');
  };

  checkIfViewCandidateModalIsDisplayed = () => {
    cy.contains(this.viewCandidateModalText).should('be.visible');
  };

  checkIfViewCandidateModalIsNotDisplayed = () => {
    cy.contains(this.viewCandidateModalText).should('not.be.visible');
  };
  checkIfViewCandidateDocumentsModalIsDisplayed = () => {
    cy.contains(this.viewCandidateDocumenetsModalText).should('be.visible');
  };
  checkIfTheFileIsTheSameAsTheFileUploaded = (fileName) => {
    cy.contains(fileName).should('be.visible');
  };

  captureCheckEmailRequest = () => {
    cy.server();
    cy.route(this.checkCandidateEmailRequestObject).as(this.checkCandidateEmailAlias);
  };

  captureAddCandidateRequest = () => {
    cy.server();
    cy.route(this.checkAddCandidateRequestObject).as(this.addCandidateAlias);
  };

  capturePatchViewDateRequest = () => {
    cy.server();
    cy.route(this.checkPatchViewDateRequestObject).as(this.patchViewDateAlias);
  };
  capturePutAssignJobCandidateRequest = () => {
    cy.server();
    cy.route(this.checkPutAssignJobCandidateRequestObject).as(this.assignJobCandidateAlias);
  };

  capturePostCandidatesProcessesRequest = () => {
    cy.server();
    cy.route(this.checkPostCandidatesProcessesRequestObject).as(this.candidateProcessesAlias);
  };

  captureSearchRequest = () => {
    cy.server();
    cy.route(this.checkPostSearchCandidateRequestObject).as(this.postSearchCandidateAlias);
  };
  checkRequestIsMadeWithStatus = (alias, status) => {
    cy.wait(`@${alias}`).then((xhr) => {
      expect(xhr.status).to.eq(status);
    });
  };

  checkCandidateIsAdded = (candidateName) => {
    cy.contains(this.tableRow, candidateName).scrollIntoView().should('be.visible');
  };

  generateDataCreateCandidateOptionalFields = () => {
    candidate.city = createRandomString(5);
    candidate.phone = createRandomNumber(10);
    candidate.currentCompany = createRandomString(5);
    candidate.currentJob = createRandomString(6);
    candidate.futureContactDate = tomorrowDate;
    candidate.skills = '8787';
  };

  getRecruiter = () => {
    return cy
      .request(this.talentTeamApiUrl)
      .its('body')
      .then((response) => {
        var randomNumber = Math.floor(Math.random() * response.length);
        var recruiter = response[randomNumber].name;
        return recruiter;
      });
  };
  getReferral = () => {
    return cy
      .request(this.employeesApiUrl)
      .its('body')
      .then((response) => {
        var randomNumber = Math.floor(Math.random() * response.length);
        var referral = response[randomNumber].name;
        return referral;
      });
  };
  postSeniorityRequest = () => {
    return cy
      .request({
        method: 'POST',
        url: this.settingsApiUrl,
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: {
          parentSettingId: this.seniorityParentId,
          type: this.seniorityType,
          value: this.seniorityValue,
        },
      })
      .then((response) => {
        var seniorObj = [
          {
            seniorityId: response.body.id,
            seniority: response.body.value,
          },
        ];
        return seniorObj;
      });
  };
  postCvSourceRequest = () => {
    return cy
      .request({
        method: 'POST',
        url: this.settingsApiUrl,
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: {
          parentSettingId: this.cvSourceParentId,
          type: this.cvSourceType,
          value: this.cvSourceValue,
        },
      })
      .then((response) => {
        var cvSourceObj = [
          {
            cvSourceId: response.body.id,
            cvSource: response.body.value,
          },
        ];
        return cvSourceObj;
      });
  };
  postContactStatusRequest = () => {
    return cy
      .request({
        method: 'POST',
        url: this.settingsApiUrl,
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: {
          parentSettingId: this.contactStatusParentId,
          type: this.contactStatusType,
          value: this.contactStatusValue,
        },
      })
      .then((response) => {
        var contactStatusObj = [
          {
            contactStatusId: response.body.id,
            contactStatus: response.body.value,
          },
        ];
        return contactStatusObj;
      });
  };

  postRoleRequest = () => {
    return cy
      .request({
        method: 'POST',
        url: this.settingsApiUrl,
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: {
          parentSettingId: this.roleParentId,
          type: this.roleType,
          value: this.roleValue,
        },
      })
      .then((response) => {
        var roleObj = [
          {
            roleId: response.body.id,
            role: response.body.value,
          },
        ];
        return roleObj;
      });
  };

  postNewSeniorityRequest = () => {
    return cy
      .request({
        method: 'POST',
        url: this.settingsApiUrl,
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: {
          parentSettingId: this.seniorityParentId,
          type: this.seniorityType,
          value: this.seniorityNewValue,
        },
      })
      .then((response) => {
        var seniorObj = [
          {
            seniorityId: response.body.id,
            seniority: response.body.value,
          },
        ];
        return seniorObj;
      });
  };
  postNewCvSourceRequest = () => {
    return cy
      .request({
        method: 'POST',
        url: this.settingsApiUrl,
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: {
          parentSettingId: this.cvSourceParentId,
          type: this.cvSourceType,
          value: this.cvSourceNewValue,
        },
      })
      .then((response) => {
        var cvSourceObj = [
          {
            cvSourceId: response.body.id,
            cvSource: response.body.value,
          },
        ];
        return cvSourceObj;
      });
  };
  postNewContactStatusRequest = () => {
    return cy
      .request({
        method: 'POST',
        url: this.settingsApiUrl,
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: {
          parentSettingId: this.contactStatusParentId,
          type: this.contactStatusType,
          value: this.contactStatusNewValue,
        },
      })
      .then((response) => {
        var contactStatusObj = [
          {
            contactStatusId: response.body.id,
            contactStatus: response.body.value,
          },
        ];
        return contactStatusObj;
      });
  };

  postNewRoleRequest = () => {
    return cy
      .request({
        method: 'POST',
        url: this.settingsApiUrl,
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: {
          parentSettingId: this.roleParentId,
          type: this.roleType,
          value: this.roleNewValue,
        },
      })
      .then((response) => {
        var roleObj = [
          {
            roleId: response.body.id,
            role: response.body.value,
          },
        ];
        return roleObj;
      });
  };

  deleteSettingRequest = (setting) => {
    return cy.request({
      method: 'DELETE',
      url: `${this.settingsApiUrl}/${setting}`,
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
      body: '{}',
    });
  };

  addCandidate = (candidate) => {
    this.completeDataForCandidate(candidate);
    this.clickSaveCandidateButton();
    cy.wait(1000);
  };
  editCandidate = (candidate) => {
    this.completeDataForCandidate(candidate);
    this.clickUpdateCandidateButton();
  };
  assignJobCandidate = (candidate) => {
    this.clickAssignJobCandidate(candidate.name);
    cy.wait(100);
    cy.contains(this.jobSelectionText).click({force: true});
    cy.contains(this.jobName).click();
    cy.contains(this.assignJobCandidateModalText).click().parent().next().contains(this.assignText).click();
  };
  startProcessJobCandidate = () => {
    cy.wait(100);
    cy.contains(this.jobProcessSelectionText).click({force: true});
    cy.contains(this.jobName).click();
    cy.contains(this.candidatesInProcessModalText).click().parent().next().contains(this.startProcessText).click();
  };

  checkIfAssignButtonIsDisabled = () => {
    cy.contains(this.assignJobCandidateModalText).parent().next().contains(this.assignText).should('be.disabled');
  };
  checkIfNumberOfAssignedJobsHasChanged = (candidate) => {
    cy.contains(this.tableRow, candidate.name).find(this.tableStandardCell).eq(8).should('contain', '1');
  };
  checkIfProcessPageIsDisplayed = () => {
    cy.url().should('include', this.processPath);
  };
  clickAdvancedSearchButton = () => {
    cy.contains(this.advancedSearchText).click();
  };
  checkIfSearchFormIsDisplayed = () => {
    cy.contains(this.advancedSearchText)
      .parent()
      .next()
      .children()
      .children()
      .invoke('attr', this.attributeAriaExpanded)
      .should('equal', this.valueTrue);
  };
  checkIfSearchFormIsNotDisplayed = () => {
    cy.contains(this.advancedSearchText)
      .parent()
      .next()
      .children()
      .children()
      .invoke('attr', this.attributeAriaExpanded)
      .should('equal', this.valueFalse);
  };
  checkSearchButtonIsDisabled = () => {
    cy.get(this.searchButton).should('be.disabled');
  };
  clickClearButton = () => {
    cy.get(this.clearSearchButton).click();
  };
  checkIfFieldIsEmpty = (field) => {
    cy.get(field).invoke('attr', this.attributeValue).should('equal', '');
  };
  completeSearchName = (name) => {
    cy.get('.qa-name').type(name);
  };
  completeSearchPhone = (phone) => {
    cy.get('.qa-phone').type(phone);
  };
  completeSearchCity = (city) => {
    cy.get('.qa-city').type(city);
  };

  searchCandidateCompleteData = (object) => {
    if (!_.isEmpty(object.name)) {
      this.completeSearchName(object.name);
    }
    if (!_.isEmpty(object.phone)) {
      this.completeSearchPhone(object.phone);
    }
    if (!_.isEmpty(object.city)) {
      this.completeSearchCity(object.city);
    }
  };
}
export default new createCandidate();
