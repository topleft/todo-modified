
	// make todo items into cookies and handle them
function setCookie(cName, cVal, shelfLifeInDays) {
		var d = new Date();
		d.setTime(d.getTime() + (shelfLifeInDays*24*60*60*1000));
		var expires = 'expires='+d.toUTCString();
		document.cookie = cName+'='+cVal+'; '+expires;
		console.log(document.cookie);

	};

	function getCookie(cName) {
		var name = cName + '=';
		var ca = document.cookie.split(";");
		for (var i = 0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === ' ') {c = c.substring(1)}
				if (c.indexOf(name) === 0)
					return c.substring(name.length, c.length);
		}
		return 'not found';
	}

	function checkCookie() {

	}



$(document).ready( function () {

	// create new todo item and display oon page
	$('form').on('submit', function () {
		event.preventDefault();
		var addRemoveButton = ("<input class='remove_todo' type='button' value='remove'>");
		var item = $(this).find('#listItem').val();
		var listWrapper = $(this).closest('body').find('ul');
		listWrapper.append('<li>'+addRemoveButton+'<div class="todo_item">'+item+'</div></li>');
		$('#listItem').val('');
		// make new list item a cookie, label it with its numbered place in the list
		var cName = 'todo_item_' + document.cookie.length;
		setCookie(cName, item, 1);
		console.log(cName);

	});
	// coss out todo item when text is clicked
	$(document).on('click', 'li', function () {
		$(this).toggleClass('completed');

	});
	// Remove todo item from list when 'remove' button is clicked
	$(document).on('click', '.remove_todo', function () {
		$(this).closest('li').remove();

	});






});
