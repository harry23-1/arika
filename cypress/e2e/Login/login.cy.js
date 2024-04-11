const { Login } = require("../../support/login/login.po");
describe('Login Form', () => {
    beforeEach(() => {
        Login.toLoginPage();
    });

    it('should log in with valid credentials', () => {
        cy.fixture('validCredentials').then((validCredentials) => {
            Login.getEmail().type(validCredentials.email);
            Login.getPassword().type(validCredentials.password);
            Login.logInButton().click({ force: true });

            cy.url().should('include', '/dashboard');
        });
    });

    it('should display an error with invalid credentials', () => {
        cy.generateRandomEmail().as('invalidEmail');
        cy.generateRandomPassword().as('invalidPassword');

        cy.get('@invalidEmail').then((invalidEmail) => {
            Login.getEmail().type(invalidEmail);
        });
        cy.get('@invalidPassword').then((invalidPassword) => {
            Login.getPassword().type(invalidPassword);
        });

        Login.logInButton().click({ force: true });

        cy.url().should('not.include', '/dashboard');
    });
    it('should display an error for invalid email format', () => {
        const invalidEmail = 'invalidemailexample.com';

        Login.getEmail().type(invalidEmail);
        Login.getPassword().type('somePassword'); 

        Login.logInButton().click({ force: true });

        
        cy.contains('Invalid email format');
    });


    it('should display an error for invalid password format', () => {
        const invalidPassword = 'invalidpassword';

        Login.getEmail().type('test@example.com'); 
        Login.getPassword().type(invalidPassword);

        Login.logInButton().click({ force: true });

        cy.contains('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character');
    });
});
