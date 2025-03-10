public  class FindAccount {
    @AuraEnabled(cacheable=true)
    public static List<Account> findAccountsMethod() {
        // String val = '%' + value + '%';
        List<Account> accList = [select id,name from Account limit 5];
        System.debug(accList);
        return accList;
    }
}