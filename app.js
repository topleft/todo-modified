$(document).ready( function () {
	$('form').on('submit', function () {
		event.preventDefault();
		var removeButton = ("<input class='remove_todo' type='button' value='remove'>");
		var item = $(this).find('#listItem').val();	
		$(this).closest('body').find('ul').append('<li>'+removeButton+'<div class="todo_item">'+item+'</div></li>');
		$('#listItem').val('');

	});

	$(document).on('click', 'li', function () {
		$(this).toggleClass('completed');

	});

	$(document).on('click', '.remove_todo', function () {
		$(this).closest('li').remove();

	});



});