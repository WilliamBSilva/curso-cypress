/// <reference types="cypress" />

describe('Ongs', () => {
    it.skip('devem poder realizar um cadastro', () => {
      cy.visit('http://localhost:3000/register')
      // cy.get - busca um elemento
      // .type - insere um texto 
      cy.get('[placeholder=\'Nome da ONG\']').type('Dogs danados')
      cy.get('[placeholder=\'E-mail\']').type('dogs@mail.com')
      cy.get('[placeholder=\'WhatsApp\']').type('11999999999')
      cy.get('[placeholder=\'Cidade\']').type('Carapicuiba')
      cy.get('[placeholder=\'UF\']').type('SP')

      // routing
      // start server com cy.server()
      // criar uma rota com cy.route()
      // atribuir rota a um alias
      // esperar com cy.wait

      // cy.server()
      cy.route('POST', '**/ongs').as('postOng')

      // .click - clica ué
      cy.get('[type=\'submit\']').click()

      cy.wait('@postOng').then((xhr) => {
          expect(xhr.status).be.eq(200)
          expect(xhr.response.body).has.property('id')
          expect(xhr.response.body.id).is.not.null
      })
      
    })

    it.skip('devem poder realizar o login', () => {
      cy.visit('http://localhost:3000/')
      cy.get('input').type(Cypress.env('createdOngId'))
      cy.get('.button').click()
    })

    it.skip('devem poder fazer logout', () => {
      cy.visit('http://localhost:3000/profile', {
        onBeforeLoad: (browser) => {
          browser.localStorage.setItem('ongId', Cypress.env('createdOngId'))
          browser.localStorage.setItem('ongName', 'Gatos Danados')
        }
      })
      cy.get('button').click()
    })

    it('devem poder fazer login Cielo', () => {
      cy.visit('https://digitalhml.hdevelo.com.br/')
      cy.get('.inputText').type('2000463023')
      cy.contains('Continuar').click()
      cy.get('.inputText > #loginUser').type('automacao-site@loli')
      cy.contains('Senha').type('123456')
      cy.contains('Entrar').click()
     
    })

    it('devem poder cadastrar novos casos', () => {
     
    })

    it('devem poder excluir um caso', () => {
     
    })
})
