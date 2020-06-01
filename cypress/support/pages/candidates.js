import {createQACustom as qa} from '../utils/utils';

class Candidates {
  //Locators

  //Text utils
  homeText = 'Home';
  inboxText = 'Inbox';
  jobsText = 'Jobs';
  jobsActiveText = 'Active';
  jobsDraftsText = 'Drafts';
  jobsClosedText = 'Closed';
  candidatesInProcessText = 'Candidates in Process';
  settingsText = 'Settings';
  candidatesPath = '/candidates';
  homePath = 'home';
  inboxPath = 'inbox';
  jobsActivePath = 'jobs-active';
  jobsDraftsPath = 'jobs-drafts';
  jobsClosedPath = 'jobs-closed';
  candidatesProcessPath = 'candidates-process';
  settingsPath = 'settings/general';

  //Methods
  visitCandidatesPage = () => {
    cy.visit(this.candidatesPath);
  };

  clickHomeButton = () => {
    cy.contains(this.homeText).click();
  };
  checkIfYouJumpedToHome = () => {
    cy.url().should('include', this.homePath);
  };

  clickInboxButton = () => {
    cy.contains(this.inboxText).click();
  };
  checkIfYouJumpedToInbox = () => {
    cy.url().should('include', this.inboxPath);
  };

  clickJobsButton = () => {
    cy.contains(this.jobsText).scrollIntoView().click();
  };
  clickJobsActiveButton = () => {
    cy.contains(this.jobsActiveText).scrollIntoView().click();
  };
  checkIfYouJumpedToJobsActive = () => {
    cy.url().should('include', this.jobsActivePath);
  };

  clickJobsDraftsButton = () => {
    cy.contains(this.jobsDraftsText).scrollIntoView().click();
  };
  checkIfYouJumpedToJobsDrafts = () => {
    cy.url().should('include', this.jobsDraftsPath);
  };
  clickJobsClosedButton = () => {
    cy.contains(this.jobsClosedText).scrollIntoView().click();
  };
  checkIfYouJumpedToJobsClosed = () => {
    cy.url().should('include', this.jobsClosedPath);
  };

  clickCandidatesInProcessButton = () => {
    cy.contains(this.candidatesInProcessText).click();
  };
  checkIfYouJumpedToCandidatesInProcess = () => {
    cy.url().should('include', this.candidatesProcessPath);
  };

  clickSettingsButton = () => {
    cy.contains(this.settingsText).click();
  };
  checkIfYouJumpedToSettings = () => {
    cy.url().should('include', this.settingsPath);
  };

  checkJobsCategoryAreVisible = () => {
    cy.contains(this.jobsActiveText).should('be.visible');
    cy.contains(this.jobsDraftsText).should('be.visible');
    cy.contains(this.jobsClosedText).should('be.visible');
  };
}

export default new Candidates();
