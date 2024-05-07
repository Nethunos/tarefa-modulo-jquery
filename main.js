$(document).ready(function(){

$('form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    const itemTarefa = $('<li></li>');
    $(novaTarefa).appendTo(itemTarefa);
    $(itemTarefa).appendTo('ul');
    $('ul');
})

})