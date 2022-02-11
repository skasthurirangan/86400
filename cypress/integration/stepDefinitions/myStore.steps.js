import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import mainpage from '../../support/pages/myStore.Main.page'

And ('select product', (datatable)=>{
    // looping the step based on the input
    datatable.hashes().forEach(item => {
        mainpage.selectProduct(item.productName) 
    });
})

Then ('navigate to checkout',()=>{
    mainpage.navCheckout()
})