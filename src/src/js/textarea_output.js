$(function(){
    
    var input = $('.input');
    var button = $('.button');
    var textarea = $('.textarea');

    button.on('click', function(){
        var inputVal = input.val()+'\n';
        textarea.val(inputVal);
    });

});