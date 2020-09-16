public with sharing class AccountContactFilterController {
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContactsRelatedList(Id recordId, string titleFilter)
    {
        System.Debug('-->AccountId:--> ' + recordId + '-->titleFilter:-->'+ titleFilter);
        List<Contact> contactList = [Select Id, LastName, Title from Contact where AccountId=: recordId AND Title=: titleFilter];
        System.Debug('-->contactList Size:--> '+ contactList.size());
        return contactList;
    }
}
