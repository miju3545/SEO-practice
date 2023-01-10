describe('LOGIN spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  it('should find a login page', () => {
    cy.get('h1').contains('Login')
  })

  const labels = ['Username', 'Password']
  it('should have username, password input', () => {
    cy.get('label').each((item, i) => {
      cy.wrap(item).should('contain.text', labels[i])
    })
  })

  const inputs = { username: 'karn.yong@mecallapi.com', password: 'mecallapi' }
  it('Username - validation', () => {
    cy.get('#username').type(inputs.username).should('contain.value', inputs.username)
  })

  it('Password - validation', () => {
    cy.get('#password').type(inputs.password).should('contain.value', inputs.password)
  })

  it('Submit button active', () => {
    cy.get('button').should('be.disabled')

    cy.get('input').each((item, i) => {
      cy.wrap(item).type(Object.values(inputs)[i]).should('contain.value', Object.values(inputs)[i])
    })

    cy.get('button').should('not.be.disabled')
  })
})
