describe('The Home Page', () => {
  beforeEach( () => {
    // Visit home site before each test
    // baseUrl is set in cypress.json to localhost:3000
    cy.visit('/')
  })

  it('should visit the home page', () => {
    cy.visit('/')
  })
})
