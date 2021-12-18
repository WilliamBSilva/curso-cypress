// acoes de interacao com a pagina
// acoes
// acessar login
// preencher login

const el = require('./elements').ELEMENTS

class Logon {
  acessarLogin(){
    cy.visit('http://localhost:3000/')
  }

  preencherLogin(){
    cy.get(el.id).type(Cypress.env('createdOngId'))
    cy.get(el.buttonLogin).click()
  }
}

export default new Logon()
