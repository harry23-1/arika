export class Login{
static toLoginPage=()=> cy.visit('/')
static getEmail=()=> cy.get('[id="email"]')
static getPassword=()=> cy.get('[id="password"]')
static logInButton=()=> cy.get('[type="submit"]')


}