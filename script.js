$("#search").keyup(function () {
	var searchField = $("#search").val();	//value поля для вводу
	var myExp = new RegExp(searchField, "i"); //синтаксис методу search string.search(searchvalue)
	$.getJSON('data.json', function (data) { //data це об'єкт формату json перетворений в звичайний масив javascript
		var output = '<ul class = "searchresult">';
		$.each(data, function (key, val) { //key це індекс масиву а val його дані, дану конструкцію можна переписати за допомогою for in циклу.
			if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>' + val.name + '</h2>';
				output += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + ' ">';
				output += '<p>' + val.bio + '</p>'
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});