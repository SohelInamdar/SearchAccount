import { LightningElement, track } from 'lwc';
import FindAccounts from '@salesforce/apex/FindAccount.FindAccountMethod';

export default class MultiselectAccount extends LightningElement {
    @track accList = [];
    inputValue;
    onChangeHandler(event){
        this.inputValue = event.target.value;
        console.log(this.inputValue);
    }

    buttonClickHandler(event){
        FindAccounts({inpVal: this.inputValue}).then(res =>{
            this.accList = res;
            console.log('json: ',this.accList);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}