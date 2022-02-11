import {defineStep} from 'cypress-cucumber-preprocessor/steps'

const reqURL = 'http://reqres.in/api/users?page=2'

beforeEach(()=>{
    cy.request(reqURL).as('users')
})
defineStep('I perform a get request and check status', ()=>{
    cy.get('@users')
        .its('status')
        .should('eq',200)
})

defineStep('verify if the fist name is {string}',(fName)=>{
    cy.get('@users')
        .its('body').then((res)=>{
            expect(res.data[0])
                .has
                .property('first_name',fName)
        })
})

defineStep('verify if the email is {string}',(emailID)=>{
    cy.get('@users')
        .its('body').then((res)=>{
            expect(res.data[1])
                .has
                .property('email',emailID)
        })
})