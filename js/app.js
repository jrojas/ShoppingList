var shoppingList = (function() {
 
    // private variables for functions
    var liOpen = '<li>',
        liClose = '<img src="" class="trash"></li>'
        
 
    var init = function(){
       createItem();
       deleteItem();
       completeItem(); 

        
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
                        createData.append(liOpen + inputvalue + ' ' + liClose);
                    };
                inputList.val('');
               return false;
            });
        
        
       
        
    };
    
    var completeItem = function() {
       
       //strike out completed item
         $(document).on('click','.createData li', function (d) {
            d.preventDefault();
            $(this).toggleClass("check");
            $(this).appendTo('.completedData');
     
            });
        
        
       
     


        
    };
    var updateItem = function() {
       
       //allow list to be editable
     
        
    };
    
    var help = function(){
    
        $(".help").tooltip();
    };
    
    
    
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




 
