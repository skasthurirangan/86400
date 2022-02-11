import {defineStep} from 'cypress-cucumber-preprocessor/steps'

const baseURL = 'http://automationpractice.com/index.php'

defineStep('I open mystore page', ()=>{
    cy.visit(baseURL)
})