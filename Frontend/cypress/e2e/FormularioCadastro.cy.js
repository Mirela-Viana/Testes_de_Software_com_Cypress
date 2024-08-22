describe('Formulário de cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click() //botão 'cadastrar'
    cy.getByData('nome-input').type('Jose da Silva')
    cy.getByData('email-input').type('ze1@email.com')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
  })
})