import candidates from '../../../../support/pages/Candidates';
import loginPage from '../../../../support/pages/login';
import createCandidatePage from '../../../../support/pages/createCandidate';

describe('Candidates link-jumping page tests', () => {
  beforeEach(() => {
    loginPage.login(loginPage.testUsername);
    createCandidatePage.visitCandidatesPage();
  });

  it('Checks if Home link-jumping works', () => {
    candidates.clickHomeButton();
    candidates.checkIfYouJumpedToHome();
  });

  it('Checks if Inbox link-jumping works', () => {
    candidates.clickInboxButton();
    candidates.checkIfYouJumpedToInbox();
  });

  it('Checks if Jobs Active link-jumping works', () => {
    candidates.clickJobsButton();
    //candidates.checkJobsCategoryAreVisible -- Couldn't avoid cy.wait , decreasing the wait value would make this a flaky test ,  ".scrollIntoView()" didn't fix it
    cy.wait(400);
    candidates.clickJobsActiveButton();
    candidates.checkIfYouJumpedToJobsActive();
  });
  it('Checks if Jobs Drafts link-jumping works', () => {
    candidates.clickJobsButton();
    //candidates.checkJobsCategoryAreVisible -- Couldn't avoid cy.wait , decreasing the wait value would make this a flaky test ,  ".scrollIntoView()" didn't fix it

    cy.wait(400);
    candidates.clickJobsDraftsButton();
    candidates.checkIfYouJumpedToJobsDrafts();
  });
  it('Checks if Jobs Closed link-jumping works', () => {
    candidates.clickJobsButton();
    //candidates.checkJobsCategoryAreVisible -- Couldn't avoid cy.wait , decreasing the wait value would make this a flaky test ,  ".scrollIntoView()" didn't fix it

    cy.wait(400);
    candidates.clickJobsClosedButton();
    candidates.checkIfYouJumpedToJobsClosed();
  });
  it('Checks if Candidates in Process link-jumping works', () => {
    candidates.clickCandidatesInProcessButton();
    candidates.checkIfYouJumpedToCandidatesInProcess();
  });
  it('Checks if Settings link-jumping works', () => {
    candidates.clickSettingsButton();
    candidates.checkIfYouJumpedToSettings();
  });
});
