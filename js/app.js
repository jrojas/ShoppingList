var groceryList = (function() {
 
    // private variables and functions
    
    
   
    
            var createData = $('.listItem'),
                deleteData = $('.completedItem')
               
    

    
    var init = function(){
        createList();
        updateList();
        deleteList();
       
    };
 
    var createList = function() {
        
        
            createData.html('Created list item');
           
                
      
        
    };
 
    var updateList = function() {
       
       
        
            createData.html('Updated list item');
                
      
        
        
    };
    
    var deleteList = function(){
       
        
            deleteData.html('Deleted list item');
                
     
    
    };
 
    // public API
    return {
        init: init
       
        
    };
 
})();


$(document).ready(function(){
    groceryList.init();
    console.log(groceryList.init);

});