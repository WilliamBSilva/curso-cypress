// acoes de interacao com a pagina
// acoes
// realizar registro

const el = require('./elements').ELEMENTS

class NewIncident {

  preencherCadastroDeCaso(){
    cy.get(el.tituloCaso).type('Animal abandonado')
    cy.get(el.textoCaso).type('Animal precisa de apoio para ter onde morar')
    cy.get(el.valorDoacao).type(200)

    // POST 200 /incidents
    cy.route('POST', '**/incidents').as('newIncident')

    cy.get(el.btnCadastrarCaso).click()
  }

  validarCadastroDeCaso(){
    cy.wait('@newIncident').then((xhr) => {
        expect(xhr.status).to.eq(200)
        expect(xhr.response.body).has.property('id')
        expect(xhr.response.body.id).is.not.null
      })
  }
}

export default new NewIncident()
