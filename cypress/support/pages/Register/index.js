// acoes de interacao com a pagina
// acoes
// realizar registro

const el = require('./elements').ELEMENTS

class Register {
  acessarRegistro(){
    cy.visit('http://localhost:3000/register')
  }

  preencherRegistro(){
    // cy.get - busca um elemento
    // .type - insere um texto 
    cy.get(el.nome).type('Dogs danados')
    cy.get(el.email).type('dogs@mail.com')
    cy.get(el.whatsApp).type('11999999999')
    cy.get(el.cidade).type('Carapicuiba')
    cy.get(el.uf).type('SP')

    // routing
    // start server com cy.server()
    // criar uma rota com cy.route()
    // atribuir rota a um alias
    // esperar com cy.wait
    cy.route('POST', '**/ongs').as('postOng')
    cy.get(el.cadastrar).click()
  }

  validarPost(){
    cy.wait('@postOng').then((xhr) => {
        expect(xhr.status).be.eq(200)
        expect(xhr.response.body).has.property('id')
        expect(xhr.response.body.id).is.not.null
    })
  }
}

export default new Register()
