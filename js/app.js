var shoppingList = (function() {
 
    // private variables for functions
    var liOpen = '<li><input type="checkbox">',
        liClose = '</li>'
       

    
    var init = function(){
       createItem();
        
    };
 
    
    var createItem = function() {
        var  createData = $('.createData').sortable(),
             form =  $('form')
        
        form.submit(function () 
           {
                    var inputList = $('.inputList');
                    if (inputList.val() !== '')
                    {
                        var inputvalue = inputList.val();
                        createData.append( liOpen + inputvalue + liClose);
                    };
                inputList.val('');
               return false;
            });
       
        
    };
    
    
    var updateList = function() {
       
       //allow list to be editable
     
        
    };
    
    var deleteList = function(){
        //allow list to be deleted
       
    };
 
    // public API
    return {
        init: init,
        
       
        
    };
 
})();




 
