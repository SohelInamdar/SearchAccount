public  class FindAccount {
    @AuraEnabled(cacheable=true)
    public static List<Account> FindAccountMethod(String value) {
        String val = '%' + value + '%';
        List<Account> accList = [select id,name from Account where name like: val];
        System.debug(accList);
        return accList;
    }
}