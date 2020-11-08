import {
  createRandomString,
  createRandomNumber,
  createRandomEmail,
  createBigDoubleNumber,
  generateDataCreateCandidateRequiredFields,
  findObjectByKey,
  findObjectByTwoKeys,
} from '../../../../support/utils/utils';
import createCandidatePage from '../../../../support/pages/createCandidate';
import loginPage from '../../../../support/pages/login';
import _ from 'lodash';
let seniority,
  seniorityId,
  seniorityNewId,
  contactStatus,
  contactStatusId,
  contactStatusNewId,
  cvSource,
  cvSourceId,
  cvSourceNewId,
  role,
  roleId,
  roleNewId,
  recruiter,
  referral,
  dateTypeInput;
let search = [
  {
    name: '',
    phone: '',
    city: '',
    email: '',
    recruiter: '',
    lastContactDateFrom: '',
    lastContactDateTo: '',
    currentCompany: '',
    cvSource: '',
    currentJob: '',
    contactStatus: '',
    role: '',
    lastViewFrom: '',
    lastViewTo: '',
    futureContactDateFrom: '',
    futureContactDateTo: '',
    experienceLeast: '',
    experienceMost: '',
    skills: '',
  },
];
let candidate = [
  {
    name: '',
    seniority: '',
    phone: '',
    city: '',
    email: '',
    firstContactDate: '',
    recruiter: '',
    lastContactDate: '',
    currentCompany: '',
    cvSource: '',
    currentJob: '',
    contactStatus: '',
    role: '',
    futureContactDate: '',
    experience: '',
    skills: 'ok',
    referral: '',
  },
];
let candidateNew = [
  {
    name: '',
    seniority: '',
    phone: '',
    city: '',
    email: '',
    firstContactDate: '',
    recruiter: '',
    lastContactDate: '',
    currentCompany: '',
    cvSource: '',
    currentJob: '',
    contactStatus: '',
    role: '',
    futureContactDate: '',
    experience: '',
    skills: 'ok',
    referral: '',
  },
];

var yesterdayDate = Cypress.moment().subtract(1, 'days').format('DD-MM-YYYY');
var todaysDate = Cypress.moment().format('DD-MM-YYYY');
var tomorrowDate = Cypress.moment().add(1, 'days').format('DD-MM-YYYY');

const goodFiles = [
  {
    fileName: 'fileDoc.doc',
    filePath: '../uploadFilesTests/fileDoc.doc',
  },
  {
    fileName: 'fileDocx.docx',
    filePath: '../uploadFilesTests/fileDocx.docx',
  },
  {
    fileName: 'filePdf.pdf',
    filePath: '../uploadFilesTests/filePdf.pdf',
  },
  {
    fileName: 'fileTxt.txt',
    filePath: '../uploadFilesTests/fileTxt.txt',
  },
  {
    fileName: 'fileXls.xls',
    filePath: '../uploadFilesTests/fileXls.xls',
  },
  {
    fileName: 'fileXlsx.xlsx',
    filePath: '../uploadFilesTests/fileXlsx.xlsx',
  },
  {
    fileName: 'filePpt.ppt',
    filePath: '../uploadFilesTests/filePpt.ppt',
  },
  {
    fileName: 'filePptx.pptx',
    filePath: '../uploadFilesTests/filePptx.pptx',
  },
  {
    fileName: 'filePng.png',
    filePath: '../uploadFilesTests/filePng.png',
  },
  {
    fileName: 'fileJpeg.jpeg',
    filePath: '../uploadFilesTests/fileJpeg.jpeg',
  },
  {
    fileName: 'fileJpg.jpg',
    filePath: '../uploadFilesTests/fileJpg.jpg',
  },
  {
    fileName: 'fileBmp.bmp',
    filePath: '../uploadFilesTests/fileBmp.bmp',
  },
];
const badFiles = [
  {
    fileName: 'fileBin.bin',
    filePath: '../uploadFilesTests/fileBin.bin',
  },
];
describe('Candidates page tests', () => {
  //Merge ->
  describe('Create Candidate Modal actions tests', () => {
    beforeEach(() => {
      loginPage.login(loginPage.testUsername);
      createCandidatePage.visitCandidatesPage();
    });

    it('Checks if the Create Candidate Modal is displayed when you click  "Create Candidate" button', () => {
      createCandidatePage.clickCreateCandidateButton();
      createCandidatePage.checkCreateCandidateModalIsOpened();
    });

    it('Checks if the Create Candidate Modal is closed when you click "X" button', () => {
      createCandidatePage.clickCreateCandidateButton();
      createCandidatePage.checkCreateCandidateModalIsOpened();
      createCandidatePage.closeModalByPressingXButton();
      createCandidatePage.checkCreateCandidateModalIsClosed();
    });

    it('Checks if the Create Candidate Modal is closed when you click "Cancel" button', () => {
      createCandidatePage.clickCreateCandidateButton();
      createCandidatePage.checkCreateCandidateModalIsOpened();
      createCandidatePage.closeModalByPressingCancelButton();
      createCandidatePage.checkCreateCandidateModalIsClosed();
    });
  });
  //Merge ->
  describe('Create Candidate Input tests', () => {
    beforeEach(() => {
      loginPage.login(loginPage.testUsername);
      createCandidatePage.visitCandidatesPage();
      createCandidatePage.clickCreateCandidateButton();
    });
    it('Check if you enable "Referred By"  button displays a new input file ', () => {
      createCandidatePage.clickReferredByButton();
      createCandidatePage.checkIfReferralButtonIsEnabled();
      createCandidatePage.checkIfReferralInputIsDisplayed();
    });

    it('Check if you disable "Referred By" button hides the input file displayed before ', () => {
      createCandidatePage.clickReferredByButton();
      createCandidatePage.checkIfReferralButtonIsEnabled();
      createCandidatePage.clickReferredByButton();
      createCandidatePage.checkIfReferralButtonIsDisabled();
      createCandidatePage.checkIfReferralInputIsNotDisplayed();
    });
    it('Check if the aria expands when you click a drop-down list', () => {
      createCandidatePage.clickSeniorityDropDown();
      createCandidatePage.checkIfAnAttributeItsEqualToAValue(
        createCandidatePage.candidateSeniorityInput,
        createCandidatePage.attributeAriaExpanded,
        createCandidatePage.valueTrue,
      );
    });
    it('Check if the aria closes when you click a open drop-down list', () => {
      createCandidatePage.clickSeniorityDropDown();
      createCandidatePage.clickPhoneInput();
      createCandidatePage.checkIfAnAttributeItsEqualToAValue(
        createCandidatePage.candidateSeniorityInput,
        createCandidatePage.attributeAriaExpanded,
        createCandidatePage.valueFalse,
      );
    });
    it('Check if the Calendar  opens if you click an Date type input', () => {
      dateTypeInput = [
        createCandidatePage.candidateFirstContactDateInput,
        createCandidatePage.candidateLastContactDateInput,
        createCandidatePage.candidateFutureContactDateInput,
      ];
      dateTypeInput.forEach((element) => {
        createCandidatePage.checkIfCalendarIsDisplayed(element);
      });
    });
  });
  //Merge ->
  describe('"Create Candidate" Page Inputs Error Messages Tests', () => {
    beforeEach(() => {
      loginPage.login(loginPage.testUsername);
      createCandidatePage.visitCandidatesPage();
      createCandidatePage.clickCreateCandidateButton();
    });
    it('Check the Candidate Name is invalid, error message is displayed', () => {
      candidate.name = createRandomNumber(10);
      createCandidatePage.checkCandiateNameInvalidErrorMessage(candidate.name);
    });
    it('Check the Candidate Phone is invalid, error message is displayed', () => {
      candidate.phone = createRandomString(10);
      createCandidatePage.checkCandiatePhoneInvalidErrorMessage(candidate.phone);
    });

    it('Check the Candidate City is invalid, error message is displayed', () => {
      candidate.city = createRandomNumber(10);
      createCandidatePage.checkCandiateCityInvalidErrorMessage(candidate.city);
    });
    it('Check the Candidate Email is invalid, error message is displayed', () => {
      candidate.email = createRandomNumber(10);
      createCandidatePage.checkCandiateEmailInvalidErrorMessage(candidate.email);
    });

    it('Check the Required Full Name error message is displayed', () => {
      createCandidatePage.checkCandidateInputIsRequiredErrorMessage(
        createCandidatePage.candidateNameInput,
        createCandidatePage.candidateNameIsRequiredErrorMessage,
      );
    });
    it('Check the Required Email error message is displayed', () => {
      createCandidatePage.checkCandidateInputIsRequiredErrorMessage(
        createCandidatePage.candidateEmailInput,
        createCandidatePage.candidateEmailIsRequiredErrorMessage,
      );
    });
    it('Check the Required Seniority error message is displayed', () => {
      createCandidatePage.checkCandidateInputIsRequiredErrorMessage(
        createCandidatePage.candidateSeniorityInput,
        createCandidatePage.candidateSeniorityIsRequiredErrorMessage,
      );
    });

    it('Check the Required Recruiter error message is displayed', () => {
      createCandidatePage.checkCandidateInputIsRequiredErrorMessage(
        createCandidatePage.candidateRecruiterInput,
        createCandidatePage.candidateRecruiterIsRequiredErrorMessage,
      );
    });

    it('Check the Required Cv Source error message is displayed', () => {
      createCandidatePage.checkCandidateInputIsRequiredErrorMessage(
        createCandidatePage.candidateCvSourceInput,
        createCandidatePage.candidateCvSourceIsRequiredErrorMessage,
      );
    });

    it('Check the Required Contact Status error message is displayed', () => {
      createCandidatePage.checkCandidateInputIsRequiredErrorMessage(
        createCandidatePage.candidateContactStatusInput,
        createCandidatePage.candidateContactStatusIsRequiredErrorMessage,
      );
    });

    it('Check the Required Experience error message is displayed', () => {
      candidate.experience = createRandomString(10);
      createCandidatePage.checkCandidateExperienceIsRequiredErrorMessage(candidate.experience);
    });

    it('Check the Required Role error message is displayed', () => {
      createCandidatePage.checkCandidateInputIsRequiredErrorMessage(
        createCandidatePage.candidateRoleInput,
        createCandidatePage.candidateRoleIsRequiredErrorMessage,
      );
    });

    it('Check if Experience Input is a different character than number', () => {
      candidate.experience = createRandomString(2);
      createCandidatePage.checkCandidateExperienceIsRequiredErrorMessage(candidate.experience);
    });

    it('Check if Experience Input is a number below 0', () => {
      createCandidatePage.checkCandidateExperienceIsSetTo0(-300);
    });

    it('Check if Experience Input is a number above  100', () => {
      createCandidatePage.checkCandidateExperienceIsSetTo100(1250);
    });

    it('Check if Experience Input is a large, large number', () => {
      //High Severity bug but low Priority  beacuse have a low, low chance to be made in a real case
      candidate.experience = createBigDoubleNumber(9, 400);
      createCandidatePage.checkCandidateExperienceIsRequiredErrorMessage(candidate.experience);
    });

    it('Check the Required Referral error message is displayed', () => {
      createCandidatePage.clickReferredByButton();
      createCandidatePage.checkCandidateInputIsRequiredErrorMessage(
        createCandidatePage.candidateReferralInput,
        createCandidatePage.candidateReferralIsRequiredErrorMessage,
      );
    });

    it('Check the Required First Contact date error message is displayed', () => {
      createCandidatePage.checkCandidateContactDateIsRequiredErrorMessage(
        createCandidatePage.candidateFirstContactDateInput,
        createCandidatePage.candidateFirstContactDateIsRequiredErrorMessage,
      );
    });

    it('Check the Required Last Contact date error message is displayed', () => {
      createCandidatePage.checkCandidateContactDateIsRequiredErrorMessage(
        createCandidatePage.candidateLastContactDateInput,
        createCandidatePage.candidateLastContactDateIsRequiredErrorMessage,
      );
    });
  });
  //Merge ->
  describe('"Create Candidate" Upload a file Tests', () => {
    beforeEach(() => {
      loginPage.login(loginPage.testUsername);
      createCandidatePage.visitCandidatesPage();
      createCandidatePage.clickCreateCandidateButton();
    });
    describe('Using Click Upload Button', () => {
      it('Check if you upload a file using Click Button, the file name is displayed in the list of upload files', () => {
        createCandidatePage.uploadFile(goodFiles[0].filePath);
        createCandidatePage.checkIfTheFileUploaded(goodFiles[0].fileName);
      });
      //Type of files accepted by upload (.doc, .docx, .pdf, .txt, .xls, .xlsx, .ppt, .pptx, .png, .jpeg, .jpg, .bmp);
      goodFiles.forEach(({filePath, fileName}) => {
        it(`Check if you can successfully uploads a ${fileName} using Selecting a file`, () => {
          createCandidatePage.uploadFile({filePath});
          createCandidatePage.checkIfTheFileUploaded(fileName);
        });
      });

      it('Check if the Invalid Format Error message is displayed.', () => {
        createCandidatePage.uploadFile(badFiles[0].filePath);
        createCandidatePage.checkIfFileFormatItsInvalidErrorMessage();
      });
      it('Check if the Duplicate File Error message is displayed.', () => {
        createCandidatePage.uploadFile(goodFiles[0].filePath);
        createCandidatePage.checkIfTheFileUploaded(goodFiles[0].fileName);
        createCandidatePage.uploadFile(goodFiles[0].filePath);
        createCandidatePage.checkIfDuplicateFileErrorMessage();
      });

      it('Check if Max Files Uploaded Error Message is displayed', () => {
        createCandidatePage.uploadFileMultipleTimes(goodFiles, 11);
        createCandidatePage.checkMaxFilesUploadedErrorMessage();
      });

      it('Check if you can Remove a Uploaded File', () => {
        //Not such a good test (May have to improve it)
        createCandidatePage.uploadFile(goodFiles[0].filePath);
        createCandidatePage.clickRemoveFile();
        createCandidatePage.checkIfFileIsNotDisplayed(goodFiles[0].fileName);
      });
    });
    describe('Using Drag-n-Drop', () => {
      it('Check if you upload a file using Drag and Drop, the file name is displayed in the list of upload files', () => {
        createCandidatePage.uploadFile(goodFiles[0].filePath, {subjectType: 'drag-n-drop'});
        createCandidatePage.checkIfTheFileUploaded(goodFiles[0].fileName);
      });
      //Type of files accepted by upload (.doc, .docx, .pdf, .txt, .xls, .xlsx, .ppt, .pptx, .png, .jpeg, .jpg, .bmp);
      goodFiles.forEach(({filePath, fileName}) => {
        it(`Check if you can successfully uploads a ${fileName} using Drag-n-Drop`, () => {
          createCandidatePage.uploadFile({filePath}, {subjectType: 'drag-n-drop'});
          createCandidatePage.checkIfTheFileUploaded(fileName);
        });
      });

      it('Check if the Invalid Format Error message is displayed.', () => {
        createCandidatePage.uploadFile(badFiles[0].filePath, {subjectType: 'drag-n-drop'});
        createCandidatePage.checkIfFileFormatItsInvalidErrorMessage();
      });

      it('Check if the Duplicate File Error message is displayed.', () => {
        createCandidatePage.uploadFile(goodFiles[0].filePath, {subjectType: 'drag-n-drop'});
        createCandidatePage.checkIfTheFileUploaded(goodFiles[0].fileName);
        createCandidatePage.uploadFile(goodFiles[0].filePath, {subjectType: 'drag-n-drop'});
        createCandidatePage.checkIfDuplicateFileErrorMessage();
      });

      it('Check if Max Files Uploaded Error Message is displayed', () => {
        createCandidatePage.uploadFileMultipleTimesUsingDragAndDrop(goodFiles, 11);
        createCandidatePage.checkMaxFilesUploadedErrorMessage();
      });

      it('Check if you can Remove a Uploaded File', () => {
        //Not such a good test (May have to improve it)
        createCandidatePage.uploadFile(goodFiles[0].filePath, {subjectType: 'drag-n-drop'});
        createCandidatePage.clickRemoveFile();
        createCandidatePage.checkIfFileIsNotDisplayed(goodFiles[0].fileName);
      });
    });
  });
  //Merge ->
  describe.skip("'Create Candidate' tests", () => {
    beforeEach(() => {
      loginPage.login(loginPage.testUsername);
      //Generate Data for Tests
      {
        createCandidatePage.getReferral().then((referral) => {
          candidate.referral = referral;
        });
        createCandidatePage.getRecruiter().then((recruiter) => {
          candidate.recruiter = recruiter;
        });
        createCandidatePage.postSeniorityRequest().then((seniority) => {
          seniorityId = seniority[0].seniorityId;
          candidate.seniority = seniority[0].seniority;
        });
        createCandidatePage.postCvSourceRequest().then((cvSource) => {
          cvSourceId = cvSource[0].cvSourceId;
          candidate.cvSource = cvSource[0].cvSource;
        });
        createCandidatePage.postContactStatusRequest().then((contactStatus) => {
          contactStatusId = contactStatus[0].contactStatusId;
          candidate.contactStatus = contactStatus[0].contactStatus;
        });
        createCandidatePage.postRoleRequest().then((role) => {
          roleId = role[0].roleId;
          candidate.role = role[0].role;
        });

        candidate.name = createRandomString(10);
        candidate.email = createRandomEmail('@testerlevi9.com', 10);
        candidate.experience = createRandomNumber(2);
        candidate.firstContactDate = yesterdayDate;
        candidate.lastContactDate = todaysDate;
      }
      createCandidatePage.visitCandidatesPage();
      createCandidatePage.clickCreateCandidateButton();
    });

    afterEach(() => {
      createCandidatePage.visitCandidatesPage();
      createCandidatePage
        .deleteCandidate(candidate.name)
        .wait(1000)
        .then(() => {
          createCandidatePage.deleteSettingRequest(seniorityId);
          createCandidatePage.deleteSettingRequest(cvSourceId);
          createCandidatePage.deleteSettingRequest(contactStatusId);
          createCandidatePage.deleteSettingRequest(roleId);
          if (!_.isEmpty(seniorityNewId)) {
            createCandidatePage.deleteSettingRequest(seniorityNewId);
            createCandidatePage.deleteSettingRequest(cvSourceNewId);
            createCandidatePage.deleteSettingRequest(contactStatusNewId);
            createCandidatePage.deleteSettingRequest(roleNewId);
          }
        });
    });
    it('Check that if you can Create a Candidate using only the required fields without Referral with Request Validation', () => {
      candidate.referral = '';
      candidate.phone = '';
      createCandidatePage.completeDataForCandidate(candidate);
      createCandidatePage.captureAddCandidateRequest();
      createCandidatePage.captureCheckEmailRequest();
      createCandidatePage.clickSaveCandidateButton();
      cy.wait(1000);
      createCandidatePage.checkCandidateIsAdded(candidate.name);
      createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.addCandidateAlias, 201);
      createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.checkCandidateEmailAlias, 404);
    });
    it('Check that if you can Create a Candidate using only the required fields with Referral with Request Validation', () => {
      createCandidatePage.completeDataForCandidate(candidate);
      createCandidatePage.captureAddCandidateRequest();
      createCandidatePage.captureCheckEmailRequest();
      createCandidatePage.clickSaveCandidateButton();
      cy.wait(1000);
      createCandidatePage.checkCandidateIsAdded(candidate.name);
      createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.addCandidateAlias, 201);
      createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.checkCandidateEmailAlias, 404);
    });
    it('Check that if you can Create a Candidate using all fields with Request Validation', () => {
      //Optional fields
      candidate.city = createRandomString(5);
      candidate.phone = createRandomNumber(10);
      candidate.currentCompany = createRandomString(5);
      candidate.currentJob = createRandomString(6);
      candidate.futureContactDate = tomorrowDate;
      candidate.skills = createRandomString(10);

      createCandidatePage.completeDataForCandidate(candidate);
      createCandidatePage.captureAddCandidateRequest();
      createCandidatePage.captureCheckEmailRequest();
      createCandidatePage.clickSaveCandidateButton();
      createCandidatePage.checkCandidateIsAdded(candidate.name);
      createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.addCandidateAlias, 201);
      createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.checkCandidateEmailAlias, 404);
    });
    it('Check if Error Message is displayed when you want to insert a Candidate with an e-mail that already exists ', () => {
      //Requiered fields
      candidate.name = createRandomString(10);
      candidate.email = createRandomEmail('@testerlevi9.com', 10);
      candidate.experience = createRandomNumber(2);
      candidate.firstContactDate = yesterdayDate;
      candidate.lastContactDate = todaysDate;

      createCandidatePage.addCandidate(candidate);
      createCandidatePage.clickCreateCandidateButton();
      createCandidatePage.captureCheckEmailRequest();
      createCandidatePage.completeCandidateEmail(candidate.email);
      createCandidatePage.checkCandiateEmailDuplicateErrorMessage();
      createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.checkCandidateEmailAlias, 200);
    });
    it('Check if you can create a Candidate with an attachement', () => {
      createCandidatePage.completeDataForCandidate(candidate);
      createCandidatePage.uploadFile(goodFiles[createRandomNumber(1)].filePath);
      createCandidatePage.clickSaveCandidateButton();
      createCandidatePage.checkCandidateIsAdded(candidate.name);
    });
    it('Check if Candidate Documents Icon is added if you create a Candidate with an attachement', () => {
      createCandidatePage.completeDataForCandidate(candidate);
      createCandidatePage.uploadFile(goodFiles[createRandomNumber(1)].filePath);
      createCandidatePage.clickSaveCandidateButton();
      createCandidatePage.checkCandidateDocumentsButtonIsDisplayed(candidate.name);
    });
    it('Check if Candidate Documents Modal is displayed', () => {
      createCandidatePage.completeDataForCandidate(candidate);
      createCandidatePage.uploadFile(goodFiles[6].filePath);
      createCandidatePage.clickSaveCandidateButton();
      createCandidatePage.clickCandidateDocumentsButton(candidate.name);
      createCandidatePage.checkIfViewCandidateDocumentsModalIsDisplayed();
    });

    it('Check if Candidate Documents have the same file as the file-uploaded', () => {
      createCandidatePage.completeDataForCandidate(candidate);
      createCandidatePage.uploadFile(goodFiles[6].filePath);
      createCandidatePage.clickSaveCandidateButton();
      createCandidatePage.clickCandidateDocumentsButton(candidate.name);
      createCandidatePage.checkIfTheFileIsTheSameAsTheFileUploaded(goodFiles[6].fileName);
    });
    it('Check if View Candidate Modal is displayed if you click View Candidate Button', () => {
      createCandidatePage.addCandidate(candidate);
      createCandidatePage.clickViewCandidate(candidate.name);
      createCandidatePage.checkIfViewCandidateModalIsDisplayed();
    });
    it('Check if View Candidate Modal is Closed if you click X button', () => {
      createCandidatePage.addCandidate(candidate);
      createCandidatePage.clickViewCandidate(candidate.name);
      createCandidatePage.closeModalByPressingXButton();
      createCandidatePage.checkIfViewCandidateModalIsNotDisplayed();
    });
    it('Check when you click on View Candidate a Patch Request with Last View Date its sent', () => {
      createCandidatePage.addCandidate(candidate);
      createCandidatePage.capturePatchViewDateRequest();
      createCandidatePage.clickViewCandidate(candidate.name);
      createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.patchViewDateAlias, 204);
    });
    it('Check that the Informations from View Candate are the same as in the Create Candidate Form', () => {
      candidate.skills = createRandomString(5);
      candidate.city = createRandomString(5);
      candidate.phone = createRandomNumber(10);
      candidate.currentCompany = createRandomString(5);
      candidate.currentJob = createRandomString(6);

      createCandidatePage.addCandidate(candidate);
      createCandidatePage.clickViewCandidate(candidate.name);
      createCandidatePage.checkViewCandidateInformations(candidate);
    });
    describe('Edit a Candidate Tests', () => {
      beforeEach(() => {
        //Generate Edit Data
        {
          createCandidatePage.getRecruiter().then((recruiter) => {
            candidateNew.recruiter = recruiter;
          });

          createCandidatePage.postNewSeniorityRequest().then((seniority) => {
            seniorityNewId = seniority[0].seniorityId;
            candidateNew.seniority = seniority[0].seniority;
          });
          createCandidatePage.postNewCvSourceRequest().then((cvSource) => {
            cvSourceNewId = cvSource[0].cvSourceId;
            candidateNew.cvSource = cvSource[0].cvSource;
          });
          createCandidatePage.postNewContactStatusRequest().then((contactStatus) => {
            contactStatusNewId = contactStatus[0].contactStatusId;
            candidateNew.contactStatus = contactStatus[0].contactStatus;
          });
          createCandidatePage.postNewRoleRequest().then((role) => {
            roleNewId = role[0].roleId;
            candidateNew.role = role[0].role;
          });

          candidateNew.name = createRandomString(10);
          candidateNew.email = createRandomEmail('@testerlevi9.com', 10);
          candidateNew.experience = createRandomNumber(2);
        }
      });
      it('Check if Edit Candidate Modal is displayed if you click Edit Candidate Button', () => {
        createCandidatePage.addCandidate(candidate);
        createCandidatePage.clickEditCandidateButton(candidate.name);
        createCandidatePage.checkIfEditCandidateModalIsDisplayed();
      });
      it('Check if Edit Candidate Modal is closed if you click X  Button', () => {
        createCandidatePage.addCandidate(candidate);
        createCandidatePage.clickEditCandidateButton(candidate.name);
        createCandidatePage.closeModalByPressingXButton();
        createCandidatePage.checkIfEditCandidateModalIsNotDisplayed();
      });
      it('Check if Edit Candidate Modal is closed if you click Cancel Edit  Button', () => {
        createCandidatePage.addCandidate(candidate);
        createCandidatePage.clickEditCandidateButton(candidate.name);
        createCandidatePage.closeModalByPressingCancelButton();
        createCandidatePage.checkIfEditCandidateModalIsNotDisplayed();
      });
      it('Check if you can edit only the required fields for a Candidate', () => {
        createCandidatePage.addCandidate(candidate);
        createCandidatePage.visitCandidatesPage();
        createCandidatePage.clickEditCandidateButton(candidate.name);
        createCandidatePage.editCandidate(candidateNew);
        createCandidatePage.checkCandidateIsAdded(candidateNew.name);

        candidate.name = candidateNew.name;
      });
      it('Check that the Informations from View Candate are  modified after we edited the Candidate', () => {
        candidate.skills = createRandomString(5);

        createCandidatePage.addCandidate(candidate);
        createCandidatePage.visitCandidatesPage();
        createCandidatePage.clickEditCandidateButton(candidate.name);
        createCandidatePage.editCandidate(candidateNew);
        createCandidatePage.clickViewCandidate(candidateNew.name);
        createCandidatePage.checkViewCandidateInformations(candidateNew);
        candidate.name = candidateNew.name;
      });
    });
    describe('Assign a Job to Candidate', () => {
      beforeEach(() => {
        createCandidatePage.addCandidate(candidate);
      });
      it('Check if Assign a Job Modal is displayed', () => {
        createCandidatePage.clickAssignJobCandidate(candidate.name);
        createCandidatePage.checkIfAssignJobCandidateModalIsDisplayed();
      });
      it('Check if Assign a Job Modal is Closed if you click X button', () => {
        createCandidatePage.clickAssignJobCandidate(candidate.name);
        createCandidatePage.closeModalByPressingXButton();
        createCandidatePage.checkIfViewCandidateModalIsNotDisplayed();
      });
      it('Check if Assign a Job Modal is Closed if you click Cancel button', () => {
        createCandidatePage.clickAssignJobCandidate(candidate.name);
        createCandidatePage.closeModalByPressingCancelButton();
        createCandidatePage.checkIfViewCandidateModalIsNotDisplayed();
      });
      it('Check if you can assign a Job to a Candidate', () => {
        createCandidatePage.assignJobCandidate(candidate);
        createCandidatePage.checkIfNumberOfAssignedJobsHasChanged(candidate);
      });
      it('Check if you can assign a Job to a Candidate with Request Validation', () => {
        createCandidatePage.capturePutAssignJobCandidateRequest();
        createCandidatePage.assignJobCandidate(candidate);
        createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.assignJobCandidateAlias, 204);
      });
      it.skip('Check if assign buton is disabled if you want to assign the same Job for the Candidate', () => {
        //Have to re-work this... :(
        createCandidatePage.assignJobCandidate(candidate);
        cy.wait(1000);
        createCandidatePage.clickAssignJobCandidate(candidate.name);
        createCandidatePage.checkIfAssignButtonIsDisabled();
      });
      it('Check if Candidates in a Process Button is diplayed after you assigned a job to a candidate', () => {
        createCandidatePage.checkIfCandidatesInProcessButtonIsNotDisplayed(candidate.name);
        createCandidatePage.assignJobCandidate(candidate);
        createCandidatePage.checkIfCandidatesInProcessButtonIsDisplayed(candidate.name);
      });
      describe('Candidate in a Process Tests', () => {
        beforeEach(() => {
          createCandidatePage.assignJobCandidate(candidate);
          createCandidatePage.clickStartProcessCandidate(candidate.name);
        });
        it('Check if Candidate in a Process Modal is displayed', () => {
          createCandidatePage.checkIfCandidateProcessModalIsDisplayed();
        });
        it('Check if Candidate in a Process Modal is Closed if you click X button', () => {
          createCandidatePage.closeModalByPressingXButton();
          createCandidatePage.checkIfCandidateProcessModalIsNotDisplayed();
        });
        it('Check if Candidate in a Process Modal is Closed if you click Cancel button', () => {
          createCandidatePage.closeModalByPressingCancelButton();
          createCandidatePage.checkIfCandidatesInProcessButtonIsNotDisplayed();
        });
        it('Check if you can start a process to a Candidate', () => {
          createCandidatePage.startProcessJobCandidate(candidate);
          createCandidatePage.checkIfProcessPageIsDisplayed(candidate);
        });
        it('Check if you can start a process to a Candidate with Request Validation', () => {
          createCandidatePage.capturePostCandidatesProcessesRequest();
          createCandidatePage.startProcessJobCandidate(candidate);
          createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.candidateProcessesAlias, 201);
        });
      });
    });
  });
  describe.skip('Search a Candidate Tests', () => {
    beforeEach(() => {
      loginPage.login(loginPage.testUsername);
      createCandidatePage.visitCandidatesPage();
    });
    it('Check if Search Form is displayed after you click Advanced Search', () => {
      createCandidatePage.checkIfSearchFormIsNotDisplayed();
      createCandidatePage.clickAdvancedSearchButton();
      createCandidatePage.checkIfSearchFormIsDisplayed();
    });
    it('Check if Search button is disabled if all inputs are empty', () => {
      createCandidatePage.clickAdvancedSearchButton();
      createCandidatePage.checkSearchButtonIsDisabled();
    });
    it('Check if Clear button clear the Inputs', () => {
      search.name = createRandomString(5);
      createCandidatePage.clickAdvancedSearchButton();
      createCandidatePage.completeSearchName(search.name);
      createCandidatePage.clickClearButton();
      createCandidatePage.checkIfFieldIsEmpty('.qa-name', search.name);
    });
    describe('Check if Search Input Error Messages are displayed', () => {
      beforeEach(() => {
        createCandidatePage.clickAdvancedSearchButton();
      });
      it('Check Name invalid error message is displayed', () => {
        search.name = createRandomNumber(4) + '8';
        createCandidatePage.searchCandidateCompleteData(search);
        createCandidatePage.checkIfNameInvalidErrorMessageIsDisplayed();
      });
      it('Check Phone invalid error message is displayed', () => {
        search.phone = createRandomString(10);
        createCandidatePage.searchCandidateCompleteData(search);
        createCandidatePage.checkIfPhoneInvalidErrorMessageIsDisplayed();
      });
      it('Check City invalid error message is displayed', () => {
        search.city = createRandomNumber(4) + '1';
        createCandidatePage.searchCandidateCompleteData(search);
        createCandidatePage.checkIfCityInvalidErrorMessageIsDisplayed();
      });
    });
    describe('Check if Search a Candidate displays good results', () => {
      beforeEach(() => {
        //Generate Data for Tests
        {
          createCandidatePage.getReferral().then((referral) => {
            candidate.referral = referral;
          });
          createCandidatePage.getRecruiter().then((recruiter) => {
            candidate.recruiter = recruiter;
          });
          createCandidatePage.postSeniorityRequest().then((seniority) => {
            seniorityId = seniority[0].seniorityId;
            candidate.seniority = seniority[0].seniority;
          });
          createCandidatePage.postCvSourceRequest().then((cvSource) => {
            cvSourceId = cvSource[0].cvSourceId;
            candidate.cvSource = cvSource[0].cvSource;
          });
          createCandidatePage.postContactStatusRequest().then((contactStatus) => {
            contactStatusId = contactStatus[0].contactStatusId;
            candidate.contactStatus = contactStatus[0].contactStatus;
          });
          createCandidatePage.postRoleRequest().then((role) => {
            roleId = role[0].roleId;
            candidate.role = role[0].role;
          });

          candidate.name = createRandomString(10);
          candidate.email = createRandomEmail('@testerlevi9.com', 10);
          candidate.experience = createRandomNumber(2);
          candidate.firstContactDate = yesterdayDate;
          candidate.lastContactDate = todaysDate;
        }
        createCandidatePage.visitCandidatesPage();
        createCandidatePage.clickCreateCandidateButton();
      });
      afterEach(() => {
        createCandidatePage.visitCandidatesPage();
        createCandidatePage
          .deleteCandidate(candidate.name)
          .wait(1000)
          .then(() => {
            createCandidatePage.deleteSettingRequest(seniorityId);
            createCandidatePage.deleteSettingRequest(cvSourceId);
            createCandidatePage.deleteSettingRequest(contactStatusId);
            createCandidatePage.deleteSettingRequest(roleId);
            if (!_.isEmpty(seniorityNewId)) {
              createCandidatePage.deleteSettingRequest(seniorityNewId);
              createCandidatePage.deleteSettingRequest(cvSourceNewId);
              createCandidatePage.deleteSettingRequest(contactStatusNewId);
              createCandidatePage.deleteSettingRequest(roleNewId);
            }
          });
      });
      //Aici puteam sa fac test pentru orice field din Search, numai ca din lipsa timpului m-am rezumat doar la un camp :(
      it('Check if Searching by Name displays good results with Request validation', () => {
        search.name = candidate.name;
        createCandidatePage.addCandidate(candidate);
        createCandidatePage.clickAdvancedSearchButton();
        createCandidatePage.completeSearchName(search.name);
        createCandidatePage.captureSearchRequest();
        createCandidatePage.clickSearchButton();
        createCandidatePage.checkRequestIsMadeWithStatus(createCandidatePage.postSearchCandidateAlias, 200);
        createCandidatePage.checkIftheGoodCandidateIsDisplayed(candidate.name);
      });
    });
  });
  //Test describe -Doesn't count
  describe.skip('test describe', () => {
    beforeEach(() => {
      loginPage.login(loginPage.testUsername);

      createCandidatePage.visitCandidatesPage();
    });
    afterEach(() => {});
    it('', () => {
      createCandidatePage.checkIfSearchFormIsNotDisplayed();
      createCandidatePage.clickAdvancedSearchButton();
      createCandidatePage.checkIfSearchFormIsDisplayed();
      //createCandidatePage.clickAssignJobCandidate('ocVbpuGG');
      // cy.contains('Please select job/s').click({force: true});
      // cy.contains('Levi9Test - T1-4').click();
      //cy.contains('Assign job to candidate').click().parent().next().contains('Assign').click();
      //cy.contains('tr', 'ocVbpuGG').find('td').eq(8).should('contain', '1');
      //  createCandidatePage.checkViewCandidateInformations();
    });
  });
});
