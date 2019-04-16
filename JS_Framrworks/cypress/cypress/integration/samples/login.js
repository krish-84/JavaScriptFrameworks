describe('Sign in ', function() {

  it('should be sign in', function() {
    
    cy.visit('/')

    //cy.viewport(1440, 900)

    // click sign in button
    cy.contains('Sign in').click()

    // enter valid email ID
    cy.get('#new_session_username').type('gobalakrishnan07@gmail.com')

    // enter valid password
    cy.get('#new_session_password').type('sangeetha1')

    // submit the form
    cy.get('#sign_in').click()

    // validate the navigation page
    cy.contains('Account')

    // validate the title of the account page
    cy.title().should('include', 'Stock photos, royalty-free images & video clips')

  })

})