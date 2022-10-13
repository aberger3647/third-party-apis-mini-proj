var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});

var dateInputEl = $('#datepicker');
var projectTitleInputEl = $('#project-title');
var projectTypeInputEl = $('#project-type');
var hourlyWageInputEl = $('#hourly-wage');

$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });

  var handleFormSubmit = function (event) {
    event.preventDefault();
  
    var projectTitleInput = projectTitleInputEl.val();
    var projectTypeInput = projectTypeInputEl.val();
    var hourlyWageInput = hourlyWageInputEl.val();
    var dateInput = dateInputEl.val();
  
    if (!projectTitleInput && !projectTypeInput && !hourlyWageInput && !dateInput) {
      alert('You need to fill out the form!');
      return;
    }
  
    printProject(projectTitleInput, projectTypeInput, hourlyWageInput, dateInput);

  };

  var modal = $('#modal');
  var submitButton = document.getElementById("#submit");
  submitButton.addEventListener('click', handleFormSubmit);

  var tableEl = $('#table');

  var printProject = function (projectTitle, projectType, hourlyWage, date) {
    var trEl = $('<tr>');
    var td1El = $('<td>');
    var td2El = $('<td>');
    var td3El = $('<td>');
    var td4El = $('<td>');
    var projectTitleDetail = projectTitle;
    var projectTypeDetail = projectType;
    var hourlyWageDetail = hourlyWage;
    var dateDetail = date;
    td1El.text = projectTitleDetail;
    td2El.text = projectTypeDetail;
    td3El.text = hourlyWageDetail;
    td4El.text = dateDetail;
    tableEl.appendTo(trEl);
    trEl.appendTo(td1El);
  };