describe('Create_new_voucher',()=>{

    const USER_LOGIN = 'god';

    it('Create_new_voucher', ()=>{
        cy.visit('https://platform.goodwin.dev.bet4skill.com/')
        cy.viewport(1920, 1080)

        cy.get('#input-Connexion').type(USER_LOGIN)
            .should('have.value', USER_LOGIN)

        cy.get("input[type='password']").type('god')

        cy.get('#button_sign_in').click()

        cy.get('#button_settings').click()

        cy.get(':nth-child( 2 ) > .sc-fuRDZQ > .sc-jrcTuL').click()

        cy.get('[tabindex="0"][style="width: 196px;"]').click()

        cy.get('#mui-5 > .sc-eDWCr').click()

        cy.get('#button_menu_Vouchers_vouchers').click()

        cy.get('[style="display: flex; margin: 18px 23px; justify-content: center;"] > .sc-eDWCr').click()

        cy.get('#input-Amount').type('2')
        cy.get('#input-Value').type('3')
        cy.get('#button-Ok').click()
        cy.get(':nth-child(14) > :nth-child(2) > div').click()
        cy.get('.MuiButton-root').click()
    });
})