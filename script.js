var today = moment();
$("#date").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh:mm:ss");
$("#time").text(time);
