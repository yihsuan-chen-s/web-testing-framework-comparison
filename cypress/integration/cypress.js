context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.seleniumhq.org/')
  })

  it('Get Header', () => {
  	cy.get('div#header a')
  	  .contains('Browser Automation')
  })
})