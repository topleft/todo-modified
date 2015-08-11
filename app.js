$(document).ready( function () {

	// figure out how to get localStorgae values back onto todo list
	// set num increment to account for local storage items
	// also remove from local storage on remove button click

	var removeButton = ("<input class='remove-todo' type='button' value='remove'>");

	var storedItems = localStorage;
	for(key in storedItems)
		$("#listItems").append('<li id='+key+'>'+removeButton+'<div class="todo-item">'+storedItems[key]+'</div></li>');




	$('form').on('submit', function () {
		event.preventDefault();
		var item = $('#listItem').val();
		var num = $("#listItems").children().length
		var removeButton = ("<input class='remove-todo' type='button' value='remove'>");
		$("#listItems").append('<li id="item'+num+'>'+removeButton+'<div class="todo-item">'+item+'</div></li>');
		$('#listItem').val('');

		localStorage.setItem("item"+num, item);
		console.log(localStorage);

	});

	$(document).on('click', 'li', function () {
		$(this).toggleClass('completed');

	});

	$(document).on('click', '.remove-todo', function () {
		var id = $(this).parent().attr("id")
		localStorage.removeItem(id);
		$(this).closest('li').remove();
	});



});