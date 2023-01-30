/// <reference types = "cypress"/>
it ('google search', function() {
    cy.request('https://restcountries.com/v3.1/name/germany')

})