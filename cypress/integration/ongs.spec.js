/// <reference types="cypress" />

import Logon from '../support/pages/Logon'
import Register from '../support/pages/Register'
import Profile from '../support/pages/Profile'
import NewIncident from '../support/pages/NewIncident'

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
      Register.acessarRegistro()
      Register.preencherRegistro()
      Register.validarPost()
    })

    it('devem poder realizar o login', () => {
      Logon.acessarLogin()
      Logon.preencherLogin()
    })

    it('devem poder fazer logout', () => {
      cy.login()
      Profile.fazerlogout()
    })

    it('devem poder cadastrar novos casos', () => {
      cy.login()
      Profile.clicaBtnNovosCasos()
      NewIncident.preencherCadastroDeCaso()
      NewIncident.validarCadastroDeCaso()
    })

    it('devem poder excluir um caso', () => {
     cy.createNewIncident()
     cy.login()
     Profile.clicaBtnExcluirCaso()
     Profile.validarExclusaoDeCasoComSucesso()
    })
})
