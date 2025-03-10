import { LightningElement, track } from 'lwc';
import findAccountsMethod from '@salesforce/apex/findAccounts.findAccountsMethod';

export default class MultiselectAccount extends LightningElement {
    @track accList = [];
    inputValue;
    onChangeHandler(event){
        this.inputValue = event.target.value;
        console.log(this.inputValue);
    }

    buttonClickHandler(event){
        findAccountsMethod().then(res =>{
            this.accList = res;
            console.log('json: ',res);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}