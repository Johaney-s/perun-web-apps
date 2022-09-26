context('Actions', () => {
  const dbVoName = "resource-observer-vo-from-db-1";
  const dbResourceName = "resource-observer-resource-from-db-1"
  const dbGroupName = "resource-observer-group-from-db-1"
  const dbResourceAdminName = "resource-observer-user2"
/*  const dbAssignedMemberName = "resource-observer-user3"
  const dbServiceName = "resource-observer-test_service_db"
  const dbFacilityName = "resource-observer-facility-from-db-1"*/

  before(() => {
    if (Cypress.env('BA_USERNAME_RESOURCE_OBSERVER')) {
      sessionStorage.setItem('baPrincipal', '{"name": "resourceObserver1"}');
      sessionStorage.setItem('basicUsername', Cypress.env('BA_USERNAME_RESOURCE_OBSERVER'));
      sessionStorage.setItem('basicPassword', Cypress.env('BA_PASSWORD_RESOURCE_OBSERVER'));
      cy.visit('service-access');
    }
  });

  beforeEach(() => {
    cy.visit('organizations')
      .get(`[data-cy=${dbVoName}]`)
      .click()
      .get('[data-cy=resources]')
      .click()
      .get('[data-cy=resource-list]')
      .click()
      .get(`[data-cy=${dbResourceName}]`)
      .click();
  });

  it('view vo groups', () => {
    cy.get(`[data-cy=${dbVoName}]`)
      .click()
      .get("[data-cy=groups]")
      .click()

      // group should be visible
      .get(`[data-cy=${dbGroupName}]`)
      .should('exist')
  })

  it('view assigned groups', () => {
    cy.get('[data-cy=assigned-groups]')
      .click()

      // group should be visible
      .get(`[data-cy=${dbGroupName}]`)
      .should('exist')
  })

  it('view admins on resource', () => {
    cy.get('[data-cy=advanced-settings]')
      .click()
      .get('[data-cy=managers]')
      .click()

      // resource admin should be visible
      .get(`[data-cy=${dbResourceAdminName}-firstName-td]`)
      .should('exist')
  })

  // tests that are not supported by policies yet
/*  it('view assigned members', () => {
    cy.get('[data-cy=assigned-members]')
      .click()

      // group should be visible
      .get(`[data-cy=${dbAssignedMemberName}]`)
      .should('exist')
  })

    it('view resources on facility', () => {
    cy.get(`[data-cy=${dbFacilityName}]`)
      .click()
      .get('[data-cy=resources]')
      .click()

      // resource should be visible
      .get(`[data-cy=${dbResourceName}]`)
      .should('exist')
  })

  it('view assigned groups', () => {
    cy.get('[data-cy=assigned-services]')
      .click()

      // group should be visible
      .get(`[data-cy=${dbServiceName}]`)
      .should('exist')
  })*/

})
