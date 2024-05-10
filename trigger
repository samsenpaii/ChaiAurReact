trigger (Trigger_Name) on Object1__c (after insert) {
    List<Object2__c> Object2List = new List<Object2__c>(); // Correcting variable declaration
    for(Object1__c Object1Obj : Trigger.new){ // Using Trigger.new to refer to the records being inserted
        Object2__c Object2Obj = new Object2__c();
        Object2Obj.Name = '(whatever name you want)';
        Object2Obj.Object1__c= Object1Obj.Id;
        Object2List.add(Object2Obj);
    }
    Insert Object2List;
}
