// Set header date
var today = dayjs();
$('#currentDay').text(today.format('[Today is ] dddd - MMM Do, YYYY, H:mm'));

// Set current hr of day
var currentHr = dayjs().get('hour');
console.log(currentHr);

// 2. What is the day of the week today?
var dayWeek = today.format('[Today is] dddd');
$('#2a').text(dayWeek);

// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.
var reformatDate = dayjs('11/3/20', 'MM-DD-YY').format(
  'dddd, MMMM Do YYYY, h:mm:ss a'
);
$('#3a').text(reformatDate);

// 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
var weekNum = today.week();
var takeOut;
// Check odd, then assign boolean
if (weekNum % 2) {
  takeOut = true;
} else {
  takeOut = false;
}

$('#4a').text(`${takeOut}, because it's currently week ${weekNum}`);

// document Ready function
$(document).ready(function(){
 
  // Formatting time block area
  var $container = $('.container');
  var $row = $("section");
  var $timeBlock = $('article');
  var $hour = $('span');
  var $textarea = $(`textarea`);
  var $btn = $(`button`);
  
  $row.addClass(`row`);
  $timeBlock.addClass('time-block');
  $hour.addClass(`hour input-group-text`);
  $textarea.addClass(`description form-control`);
    $textarea.attr(`rows`,'3');
  $btn.addClass('saveBtn btn btn-outline-secondary active btn-lg');
    $btn.text(`🔓`);

    
    // Set background color of textarea
    $("span").each(function (index){
      // console.log(index +" : " + $(this).text().slice(0,2));
      if($(this).text().slice(0,2) < currentHr){
        $(this).next().addClass("past");
      } else if ($(this).text().slice(0,2) == currentHr){
        $(this).next().addClass("present");
      } else {$(this).next().addClass("future");}
    })

    // Set input values if stored locally
    $("span").each(function (index){
      console.log($(this).text());
      var inputText = '';
      var inputBox = $(this).text();
      var inputDate = today.format('MM-DD-YYYY');
      var storageInput = JSON.parse(localStorage.getItem(inputBox));
      console.log(storageInput);
      if(storageInput !== null && storageInput.date == inputDate){
        $(this).next().append(storageInput.text);
      }
    })

// Lock Button Push to Activate/Disable
  var lockBtn = $(`.btn`);
    lockBtn.on('click', function (event) {
      event.preventDefault();
      var $toggleBtn = $(this).attr('class');
      var $toggleText = $(this).parent().prev().children();
      console.log('button push');
      if($toggleBtn == `saveBtn btn btn-outline-secondary active btn-lg`){
        $(this).attr('class','saveBtn btn btn-outline-secondary disabled btn-lg')
        $(this).text(`🔒`);
        $toggleText.prop('disabled', true);
        // Local Storage Upon Saving
        var inputText = $(this).prev().val();
        var inputBox = $(this).siblings("span").text();
        var inputDate = today.format('MM-DD-YYYY');
        var storageInput = {
          hour: inputBox,
          date: inputDate,
          text: inputText
        };
        localStorage.setItem(inputBox, JSON.stringify(storageInput));
        console.log(inputText);
        console.log(inputBox);
        } else{
        $(this).attr('class','saveBtn btn btn-outline-secondary active btn-lg')
        $(this).text(`🔓`);
        $toggleText.prop('disabled', false);
        var inputText = $(this).prev().val();
        var inputBox = $(this).siblings("span").text();
        var inputDate = today.format('MM-DD-YYYY');
        var storageInput = {};
        localStorage.setItem(inputBox, JSON.stringify(storageInput));
        }
    });


  
  

});