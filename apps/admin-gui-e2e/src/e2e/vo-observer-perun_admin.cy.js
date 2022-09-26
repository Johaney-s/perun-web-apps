context('Actions', () => {
  const dbVoName = "vo-observer-vo-from-db";
  const dbGroupName = "vo-observer-group-from-db";
  const dbMemberName = "vo-observer-user3";
  const dbAdminName = "vo-observer-user2";

  const dbApplicationItemTextFieldName = 'input-test';

  before(() => {
    if (Cypress.env('BA_USERNAME_VO_OBSERVER')) {
      sessionStorage.setItem('baPrincipal', '{"name": "voObserver"}');
      sessionStorage.setItem('basicUsername', Cypress.env('BA_USERNAME_VO_OBSERVER'));
      sessionStorage.setItem('basicPassword', Cypress.env('BA_PASSWORD_VO_OBSERVER'));
      cy.visit('service-access');
    }
  });

  beforeEach(() => {
    cy.visit('organizations')
      .get(`[data-cy=${dbVoName}]`)
      .click()
  });

  it('test view application form', () => {
    cy.get('[data-cy=advanced-settings]')
      .click()
      .intercept('**/registrarManager/getFormItems/vo**').as('getFormItems')
      .get('[data-cy=application-form]')
      .click()
      .wait('@getFormItems')

      // form item should be visible
      .get(`[data-cy=${dbApplicationItemTextFieldName}-shortname-td]`)
      .should('exist');
  })

  it('test view applications', () => {
    cy.intercept('**/registrarManager/getApplicationsPage**').as("getApplicationsPage")
      .get('[data-cy=applications]')
      .click()
      .wait('@getApplicationsPage')

      // the application was created by user 'perun' during Docker build
      .get(`[data-cy=perun-createdBy]`)
      .should('exist')
  })

  it ('test view Ext Sources', () => {
    cy.intercept('**/extSourcesManager/getVoExtSources**').as('getVoExtSources')
      .get('[data-cy=advanced-settings]')
      .click()
      .get('[data-cy=external-sources]')
      .click()
      .wait('@getVoExtSources')

      // the vo external source was set to INTERNAL in the db (id 1)
      .get('[data-cy=internal-name-td]')
      .should('exist')
  })

  it('view group detail', () => {
    cy.intercept('**/groupsManager/getGroupById**').as('getGroupById')
      .get('[data-cy=groups]')
      .click()
      .get(`[data-cy=${dbGroupName}]`)
      .click()
      .wait('@getGroupById')

      // the group name on the group detail page should be visible
      .get(`[data-cy=${dbGroupName}-shortName]`)
      .should('exist')
  })

  it('view member detail', () => {
    cy.intercept('**/membersManager/getRichMemberWithAttributes**').as('getRichMemberWithAttributes')
      .get('[data-cy=members]')
      .click()
      .get(`[data-cy=${dbMemberName}-firstName-td]`)
      .click()
      .wait('@getRichMemberWithAttributes')

      // the member name on the member detail page should be visible
      .get(`[data-cy=${dbMemberName}-firstName]`)
      .should('exist')
  })

  it('view vo managers', () => {
    cy.intercept('**/authzResolver/getRichAdmins**').as('getRichAdmins')
      .get('[data-cy=advanced-settings]')
      .click()
      .get('[data-cy=managers]')
      .click()
      .wait('@getRichAdmins')

      // the first name of the admin should be visible
      .get(`[data-cy=${dbAdminName}-firstName-td]`)
      .should('exist')
  })



})
