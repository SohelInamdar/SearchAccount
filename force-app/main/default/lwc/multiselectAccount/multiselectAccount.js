import { LightningElement, track } from 'lwc';
// import findAccounts from '@salesforce/apex/findAccounts.findAccountsMethod';
import findAccountsMethod from '@salesforce/apex/findAccounts.findAccountsMethod';

// import apexMethodName from "@salesforce/apex/namespace.classname.apexMethodReference";

export default class MultiselectAccount extends LightningElement {
    @track accList = [];
    inputValue;
    onChangeHandler(event){
        this.inputValue = event.target.value;
        
        this.imparativeCallToApex();
    }

    imparativeCallToApex(){
        findAccountsMethod(this.inputValue).then((res =>{
            accList = res;
        }))
        
    }
}