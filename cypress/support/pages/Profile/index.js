// acoes de interacao com a pagina
// acoes
// realizar registro

const el = require('./elements').ELEMENTS

class Profile {

  fazerlogout(){
    cy.get(el.sair).click()
  }

  clicaBtnNovosCasos(){
    cy.get(el.buttonNewIncident).click()
  }

  clicaBtnExcluirCaso(){
    cy.route('DELETE', '**/incidents/*').as('deleteIncident')
    cy.get(el.buttonExcluirIncident).click()
  }

  validarExclusaoDeCasoComSucesso(){
    cy.wait('@deleteIncident').then((xhr) => {
      expect(xhr.status).to.eq(204)
      expect(xhr.response.body).to.be.empty
    })
  }
}

export default new Profile()
