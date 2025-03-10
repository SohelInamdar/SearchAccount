public  class FindAccount {
    @AuraEnabled
    public static List<Account> findAccountsMethod(String value) {

        List<Account> accList = [select id,name from Account where name like '%value%'];
        System.debug(accList);
        return accList;
    }
}