const { SignUp } = require("../../support/sign-up/signup-po");

describe('Sign-up Form', () => {
    beforeEach(() => {
        SignUp.toSignUpPage();
    });

    it('should sign up with valid details', () => {
        const timestamp = Date.now(); 
        const firstName = `John${timestamp}`;
        const lastName = `Doe${timestamp}`;
        const companyName = `Acme Corporation${timestamp}`;
        const email = `john.doe.${timestamp}@example.com`;
        const password = `P@ssw0rd${timestamp}`; 


        SignUp.firstName().type(firstName);
        SignUp.lastName().type(lastName);
        SignUp.companyName().type(companyName);
        SignUp.getEmail().type(email);
        SignUp.getPassword().type(password)
        SignUp.serviceType().click({foroce:true})
        cy.focused().type('{downarrow}{enter}');
        cy.wait(1000)
        SignUp.countyName().click({force:true})
        cy.focused().type('{downarrow}{enter}');

        SignUp.employNumber().click({force:true})
        cy.focused().type('{downarrow}{enter}');

SignUp.treamAndComdition().click({force:true})
    SignUp.signUpButton().click({force:true})

    cy.url().should('include', '/dashboard');

    });
    it('should display an error for previously used email and password combination', () => {
        const email = 'john.doe.timestamp@example.com';
        const password = 'P@ssw0rdtimestamp';

        SignUp.firstName().type('John');
        SignUp.lastName().type('Doe');
        SignUp.companyName().type('Acme Corporation');
        SignUp.getEmail().type(email);
        SignUp.getPassword().type(password);
        SignUp.serviceType().click({force:true});
        cy.focused().type('{downarrow}{enter}');
        cy.wait(1000);
        SignUp.countyName().click({force:true});
        cy.focused().type('{downarrow}{enter}');
        SignUp.employNumber().click({force:true});
        cy.focused().type('{downarrow}{enter}');
        SignUp.treamAndComdition().click({force:true});
        SignUp.signUpButton().click({force:true});

        
        cy.contains('Email and password combination already used');
    });
    
});
