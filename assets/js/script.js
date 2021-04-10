// Set header date
var today = dayjs();
$('#currentDay').text(today.format('[Today is ] dddd - MMM Do, YYYY, H:mm'));

// Set current hr of day
var currentHr = dayjs().get('hour');
// console.log(currentHr);

// document Ready function
$(document).ready(function () {
	//create table
	var container = $('.container');

	//sets the hours/number of rows in the table
	var hourSection = [
		'06:00',
		'07:00',
		'08:00',
		'09:00',
		'10:00',
		'11:00',
		'12:00',
		'13:00',
		'14:00',
		'15:00',
		'16:00',
		'17:00',
		'18:00',
	];

	//creates and populates the base table
	for (var i = 0; i < hourSection.length; i++) {
		//set variable elements
		var current = hourSection[i];
		var sectionEl = $('<section>');
		var articleEl = $('<article>');
		var spanEl = $('<span>');
		var textareaEl = $('<textarea>');
		var buttonEl = $('<button>');

		container.attr('class', 'container-fluid');

		//add elements per i -- classes are set in this process
		sectionEl.addClass('row');
		sectionEl.attr('data-label', current);
		container.append(sectionEl);
		var row = $(".row[data-label='" + current + "']");
		articleEl.addClass('time-block col-12 m-0 p-0');
		articleEl.attr('data-label', current);
		row.append(articleEl);
		var timeBlock = $(".time-block[data-label='" + current + "']");
		spanEl.addClass('hour input-group-text col-1');
		spanEl.text(current);
		timeBlock.append(spanEl);
		textareaEl.addClass('description form-control col-10');
		textareaEl.attr('data-label', current);
		textareaEl.attr('rows', '3');
		timeBlock.append(textareaEl);
		buttonEl.addClass('saveBtn btn btn-outline-secondary active btn-lg col-1');
		buttonEl.attr('data-label', current);
		buttonEl.text('🔓');
		timeBlock.append(buttonEl);
	}

	// Set background color of textarea based on current time of day
	$('span').each(function (index) {
		// console.log(index +" : " + $(this).text().slice(0,2));
		if ($(this).text().slice(0, 2) < currentHr) {
			$(this).next().addClass('past');
		} else if ($(this).text().slice(0, 2) == currentHr) {
			$(this).next().addClass('present');
		} else {
			$(this).next().addClass('future');
		}
	});

	// Lock Button Push to Activate/Disable
	//disabled = locked and stores to local
	//active = unlocked and clears from local storage
	var lockBtn = $(`.btn`);
	lockBtn.on('click', function (event) {
		event.preventDefault();
		var $toggleBtn = $(this).attr('class');
		var $toggleText = $(this).parent().prev().children();
		// console.log('button push');
		if ($toggleBtn == `saveBtn btn btn-outline-secondary active btn-lg`) {
			$(this).attr(
				'class',
				'saveBtn btn btn-outline-secondary disabled btn-lg'
			);
			$(this).text(`🔒`);
			$toggleText.prop('disabled', true);
			// Local Storage Upon Saving
			var inputText = $(this).prev().val();
			var inputBox = $(this).siblings('span').text();
			var inputDate = today.format('MM-DD-YYYY');
			var storageInput = {
				hour: inputBox,
				date: inputDate,
				text: inputText,
			};
			localStorage.setItem(inputBox, JSON.stringify(storageInput));
			// console.log(inputText);
			// console.log(inputBox);
		} else {
			$(this).attr('class', 'saveBtn btn btn-outline-secondary active btn-lg');
			$(this).text(`🔓`);
			$toggleText.prop('disabled', false);
			var inputText = $(this).prev().val();
			var inputBox = $(this).siblings('span').text();
			var inputDate = today.format('MM-DD-YYYY');
			var storageInput = {};
			localStorage.setItem(inputBox, JSON.stringify(storageInput));
		}
	});
	// Set input values if stored locally
	$('span').each(function (index) {
		// console.log($(this).text());
		var inputText = '';
		var inputBox = $(this).text();
		var inputDate = today.format('MM-DD-YYYY');
		var storageInput = JSON.parse(localStorage.getItem(inputBox));
		// console.log(storageInput);
		if (storageInput !== null && storageInput.date == inputDate) {
			$(this).next().append(storageInput.text);
			// console.log($(this).parent().find('.saveBtn').attr('class'));
			$(this)
				.parent()
				.find('.saveBtn')
				.attr('class', 'saveBtn btn btn-outline-secondary disabled btn-lg');
			$(this).parent().find('.saveBtn').text('🔒');
		}
	});
});
