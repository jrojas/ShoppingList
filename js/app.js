var shoppingList = (function() {
 
    // public variables for shoppping list Class
    var liOpen = '<li class="add">',
        liClose = '<img src="img/trash.png" class="trash"></li>'
        
    
        
    // public init method to be exposed to the document ready function 
    var init = function(){
       createItem();
       deleteItem();
       completeItem(); 
       removeCompletedItems();
       sortLi();
       completeItemReset();
      
        
  
    };
    
    
    var sortLi = function(){
        
        $('.completedData').sortable();
        $('.createData').sortable();
        
    
    };
    
    
    
    
    
    
    // Created Item
    var createItem = function() {
        var  createData = $('.createData'),
             form =  $('form')
     
        
        form.submit(function () 
           {
                    var inputList = $('.inputList');
                    if ($.trim(inputList.val()) !== '')
                    {
                        var inputvalue = inputList.val();
                        createData.append(liOpen + inputvalue + liClose);
                    };
               
                    inputList.val('');
                    return false;
            });
        
        
       
        
    };
    
    //Ability to remove all items that are completed with one button click
    
    var removeCompletedItems= function(){
        
       
    $(document).on('click','.btnClear', function (d) {
            d.preventDefault();
        
          
            $('.completedData li').remove();
     
            });
        
        
        
    
    }; 
    
    
    
      
    //Delete Item
    var deleteItem = function(){
        //allow listitem to be deleted
        
        $(document).on('click','.trash', function (d) {
            d.preventDefault();
            $(this).parent().remove();

            });
        
        
        
       
    };
    
    var completeItemReset = function() {
       
       //strike out completed item
         $(document).on('dblclick','.completedData li', function (d) {
            d.preventDefault();
             
            $(this).appendTo('.createData');
             
     
            });
        
        
       
     


        
    };
    
    
    
    
    //Complete Item
    var completeItem = function() {
       
       //strike out completed item
         $(document).on('dblclick','.add', function (d) {
            d.preventDefault();
            $(this).toggleClass("check");
            $(this).appendTo('.completedData');
            });
        
       
       
     


        
    };
    
    
      //TODO: Update Item
    var updateItem = function() {
       
       //allow list to be editable
     
        
    };
    
    
  
 
    // public API
    return {
        init: init,
        
       
        
    };
 
})();


$(document).ready(function()
{
    shoppingList.init();
    console.log(shoppingList.init);

     
});
     

 
