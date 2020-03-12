import { LightningElement, api, track } from 'lwc';

export default class Section extends LightningElement {
    @api title;
    @track isOpen = true;
    toggle(){
        this.isOpen = !this.isOpen;
        let eventName = this.isOpen ? 'open' : 'close';
        this.dispatchEvent(new CustomEvent(eventName));
    }
    get sectionClass(){
        return `slds-section ${ this.isOpen ? ' slds-is-open ': ''}`;
    }
}