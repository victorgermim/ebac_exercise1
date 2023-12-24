$(document).ready(function(){
    $('form button').click(function() {
        $('#tasklist').show(500);
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const taskvalue = $('#taskinput').val();
        const novoItem = $('<li></li>').text(taskvalue);
        $('#tasklist').append(novoItem);
    })

    $('#tasklist').on('click', 'li', function() {
        $(this).toggleClass('completed');
    })
})