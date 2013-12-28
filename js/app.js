var groceryList = (function() {
 
    // private variables and functions
    
    
   
    
    var create = $('.btnAdd'),
        //update = $('#update'),
      // remove = $('#delete'),
        createData = $('.createData')
       // updateData = $('.updateData'),
      //  updateData = $('.updateData')
    

    
    var init = function(){
       createItem();
        
    };
 
    
    var createItem = function() {
        
        $('form').submit(function () 
        {
            
                    if ($('.inputList').val() !== '')
                    {
                        var inputvalue = $('.inputList').val();
                        console.log('Created list item');
                       
                        $('.createData').append('<li><input type="checkbox">' + inputvalue + '</li>');
                       
            
                    };
                $('.inputList').val('');
                return false;
            });
       
        
    };
    
    
    var updateList = function() {
       
       
     
        
    };
    
    var deleteList = function(){
       
       
    };
 
    // public API
    return {
        init: init,
        
       
        
    };
 
})();




 
