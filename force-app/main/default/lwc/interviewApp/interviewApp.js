import { LightningElement,api,wire,track } from 'lwc';
import getContactsRelatedList from '@salesforce/apex/AccountContactFilterController.getContactsRelatedList';
export default class InterviewApp extends LightningElement {
    @api recordId;
    @track contactsCustSuccess;
    @track isNoContactCustSuccess;
    @track contactsappDev;
    @track isNoContactappDev;
    @track countCustSucContacts;
    @track countAppDevContacts;
    @wire(getContactsRelatedList, {recordId:'$recordId', titleFilter:"Customer Success" })
    customerSuccessContacts;
    @wire(getContactsRelatedList, {recordId:'$recordId', titleFilter:"Application Developer" })
    applicationDeveloperContacts;
    @api objectApiName;
    fields = ['Name', 'CreatedDate', 'BillingAddress', 'BillingStreet',  'BillingCity', 'BillingState', 'BillingPostalCode', 'My_Field__c'];
}