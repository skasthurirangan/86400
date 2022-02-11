const baseURL = 'http://automationpractice.com/index.php' // home page
const frameHome= '#homefeatured' // frame to access only element specific to it
const viewMyCart_btn = 'a[title="View my shopping cart"]' // view my list

class mainPage{
    static selectProduct(product){
        cy.get(frameHome).within(()=>{
            //select the main product
            cy.get(`img[alt="${product}"]`).click({force: true})
        })
        cy.contains('Add to cart').click()
        cy.wait(3000)
        // reload the homepage
        cy.visit(baseURL)
    }

    static navCheckout(){
        //select the cart trolley
        cy.get(viewMyCart_btn).click()
        //select checkout button
        cy.contains('Check out').click({force:true})
       }

}
export default mainPage