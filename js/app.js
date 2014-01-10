var shoppingList = (function() {
 
    // public variables for shoppping list Class
    var liOpen = '<li>',
        liClose = '<img src="img/trash.png"  class="trash"></li>'
    
        
    // public init method to be exposed to the document ready function 
    var init = function(){
       createItem();
       deleteItem();
       completeItem(); 

        
    };
 
    // Created Item
    var createItem = function() {
        var  createData = $('.createData').sortable(),
             form =  $('form')
     
        
        form.submit(function () 
           {
                    var inputList = $('.inputList');
                    if ($.trim(inputList.val()) !== '')
                    {
                        var inputvalue = inputList.val();
                        createData.append(liOpen + inputvalue + ' ' + liClose);
                    };
                inputList.val('');
               return false;
            });
        
        
       
        
    };
    
    //Complete Item
    var completeItem = function() {
       
       //strike out completed item
         $(document).on('click','.createData li', function (d) {
            d.preventDefault();
            $(this).toggleClass("check");
            $(this).appendTo('.completedData');
     
            });
        
        
       
     


        
    };
    
      //TODO: Update Item
    var updateItem = function() {
       
       //allow list to be editable
     
        
    };
    
    
    
    //Delete Item
    var deleteItem = function(){
        //allow listitem to be deleted
        
        $(document).on('click', '.trash' , function (d) {
            d.preventDefault();
            $(this).parent().remove();

            });
       
    };
 
    // public API
    return {
        init: init,
        
       
        
    };
 
})();




 
