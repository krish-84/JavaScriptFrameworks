describe('My First Test', function() {

  it('click the link "type"', function() {
    
    cy.visit('/')

    //cy.viewport(1440, 900)

    cy.get('[data-cookie-type=cookie_warning]').click()

    //cy.pause()

    cy.contains('Photos')

    cy.url().should('include', '/in')

    //click the Photo tab
    cy.get('#site-header > div.site-width > nav.categories.wide-header > ul > li:nth-child(1) > a').click()

    //assert the photo product page title
    cy.title().should('include', 'Stock Photos, Pictures and Royalty-Free Images')

  })

})