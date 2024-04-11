export class SignUp{
    static toSignUpPage=()=> cy.visit('/register')
    static firstName =()=>cy.get('[id="user.first_name"]')
    static lastName =()=>cy.get('[id="user.last_name"]')
    static companyName =()=>cy.get('[id="company_name"]')

    static getEmail=()=> cy.get('[id="user.email"]')
    static getPassword=()=> cy.get('[id="user.password"]')

    static serviceType =()=>cy.get('[id="organization_sector"]')//drop down
    static countyName=()=> cy.get('[id="organization_based"]')//dropdown
    static employNumber=()=> cy.get('[id="no_of_employees"]')//dropdown
    static treamAndComdition =()=> cy.get('[type="checkbox"]')
    static signUpButton=()=> cy.get('[type="submit"]')

    
    }