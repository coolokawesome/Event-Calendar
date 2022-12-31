/*
 * Student Name: Syrus Samson
 * Student ID: 041065391
 * Course: CST8209 - Web Programming I
 * Semester: 1
 * Assignment: Assignment 4
 * Date Submitted:  Dec 17, 2022
 */

//function Event 
function Event(displayDate, title, description) {
  this.displayDate = displayDate;
  this.title = title;
  this.description = description;

  //declare a function 
  this.getEventDOM = function () {
    return document.text(this.title);
  }
}
/**********************************************************************
 * Title: Input Text value Property
 * Author: Refsnes Data & contributors
 * Date: November 24, 2022
 * Code Version: n.a
 * Availability: https://www.w3schools.com/jsref/prop_text_value.asp
 * 
 **********************************************************************/
//clear input fields
function clearAll() {
  document.getElementById('date').value = '';
  document.getElementById('calEvent').value = '';
  document.getElementById('description').value = '';
}

//error messages 
function errorFunc(errorMessage) {
  errorDiv = document.getElementById('errorDiv')
  if (errorDiv.childNodes.length > 1) {
    console.log('Has Child Node')
    return
  }
  errorP = document.createElement('p')
  errorP.setAttribute('id', 'error')
  errorText = document.createTextNode(errorMessage.toString())
  errorP.append(errorText)
  errorDiv.append(errorP)
}

//events array
var events = [];
var queries = [];


// declare an object Calendar
function Calendar(elem) {

  // array of month names for display purposes
  this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // array of day names for display purposes
  this.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // HTML element in which to display the calendar
  this.elem = elem;

  // method display generates calendar HTML
  this.display = function (displayDate = new Date()) {

    // clear the calendar element
    $(elem).empty()

    // if param displayDate is missing, use current month
    this.displayDate = new Date(displayDate);

    // get the number of days in the month
    let daysInMonth = new Date(this.displayDate.getFullYear(), this.displayDate.getMonth() + 1, 0).getDate();

    // get array of days to display
    let days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(displayDate.getFullYear(), displayDate.getMonth(), i));
    }

    /*print the display month header*/
    const header1 = $('<h1>').text(this.monthNames[this.displayDate.getMonth()] + " " + this.displayDate.getFullYear()).attr('id', 'dateHeader')


    $('#calendar').append(header1)

    //generate tabular calendar
    let table = $('<table>')
    let tbody = $('<tbody>').css('padding', '30px !important')

    // previous and next month buttons call the cal.display() method, with parameters of year displayed, but previous or next month -- dates will "carry forward", increasing or decreasing the year automatically

    /**************************************************************
*    Title: .attr() 
*    Author: jQuery foundation & contributors
*    Date accessed: Nov 24 2022
*    Code version: n.a
*    Availability: https://api.jquery.com/attr/

*    Title: .text() 
*    Author: jQuery foundation & contributors
*    Date accessed: Nov 24 2022
*    Code version: n.a
*    Availability: https://api.jquery.com/text/

*******************************************************************/
    //previous button
    let tableRow = $('<tr>').attr('class', 'headerRow')
    let tableData = $('<td>')
    let prevButton = $('<button>')
      .text('<<')
      .attr('value', 'Previous Month').attr('class', 'navButton').attr('id', 'navButton')
      .on('click', function pNavigation() {
        cal.display(new Date(displayDate.getFullYear(), displayDate.getMonth() - 1));
      });
    tableData.append(prevButton);
    tableRow.append(tableData);

    //colspan table
    let colTable = $('<td>').attr('colspan', '5').attr('id', 'middle');
    $(tableRow).append(colTable);
    $(tbody).append(tableRow);

    //Next Button
    tableData = $('<td>')
    let nextButton = $('<button>')
      .text('>>')
      .attr('value', 'Next Month').attr('class', 'navButton').attr('id', 'navButton')
      .on('click', function nNavigation() {
        cal.display(new Date(displayDate.getFullYear(), displayDate.getMonth() + 1));
      }
      )

    $(tableData).append(nextButton);
    $(tableRow).append(tableData);
    $(tbody).append(tableRow);

    //weekday headers
    tableRow = $('<tr>').attr('class', 'daysRows')
    for (const elem of this.dayNames) {
      let tableHeader = $('<th>').text(elem).attr('class', 'dayText');
      $(tableHeader);
      $(tableRow).append(tableHeader);
    }
    $(tbody).append(tableRow);

    // first row
    // fill with blank cells until 1st of month
    tableRow = document.createElement("tr");
    for (let i = 0; i < days[0].getDay(); i++) {
      tableData = $('<td>');
      $(tableRow).append(tableData)
      $(tbody).append(tableRow)
    }

    //today object
    const TODAY = new Date().setHours(0, 0, 0, 0).valueOf()

    //days
    for (let i = 0; i < days.length; i++) {
      //new Row assignment
      if (days[i].getDay() % 7 == 0) {
        tableRow = $('<tr>');
        $(tbody).append(tableRow);
      }
      //weekend class assignment
      if ((days[i].getDay() == 0) || (days[i].getDay() == 6)) {
        let tableData = $('<td>').attr('class', 'weekend');
        $(tableData).attr('id', "date-" + days[i].setHours(0, 0, 0, 0).valueOf())
        // HOLIDAYS
        //christmas
        console.log(days[i].toLocaleDateString())
        if (days[i].toLocaleDateString().includes("12/25/")) {
          (tableData).text('🎄')
        }
        //Nye
        if (days[i].toLocaleDateString().includes("12/31/")) {
          (tableData).text('🥂')
        }
        //groundhog day
        if (days[i].toLocaleDateString().includes("2/2/2") && (!days[i].toLocaleDateString().includes("12/"))) {
          (tableData).text('🐿️')
        }
        //Valentines
        if (days[i].toLocaleDateString().includes("2/14/") && (!days[i].toLocaleDateString().includes("12/"))) {
          (tableData).text('💝')
        }
        //St. Patties
        if (days[i].toLocaleDateString().includes("3/17/")) {
          (tableData).text('🍀')
        }
        //april fools
        if (days[i].toLocaleDateString().includes("4/1/")) {
          (tableData).text('🃏')
        }
        //earth day
        if (days[i].toLocaleDateString().includes("4/22/")) {
          (tableData).text('🌎')
        }
        //Canada day
        if (days[i].toLocaleDateString().includes("7/1/")) {
          (tableData).text('🍁')
        }
        if (days[i].toLocaleDateString().includes("7/4/")) {
          (tableData).text('🗽')
        }

        $(tableData).append(days[i].getDate());
        $(tableRow).append(tableData);
        //day-WEEKEND class assignment 
        if (days[i].getTime() === TODAY) {
          $(tableData).attr('class', 'today-weekend');
          $(tableData).attr('id', "date-" + days[i].setHours(0, 0, 0, 0).valueOf())
          $(tableRow).append(tableData);
        }
        //check for event
        for (let i = 0; i < queries.length; i++) {
          if (tableData.attr('id') == queries[i]) {
            //button
            var button = $("<button>")
            .attr('type', 'button')
            .attr('class', "btn btn-warning")
            .attr('data-toggle', 'modal')
            .attr('data-target', '#myModal')
            .attr('id', 'eventButton')
            .attr('onclick', 'blur()')
            // 1 state a paragraph with id titleText on button
            let titleText = $('<p>')
            .attr('id', 'titleText')
            // 2 text value is taken from the array eventText
            var textEvent = document.createTextNode(' '
              + eventText[i])
            titleText.append(textEvent)
            button.append(titleText)
            //create a second for description
            let descTextNode = $('<p>')
            .attr('id', 'descText')
            var descTextEvent = document.createTextNode(' '
              + descText[i])
            descTextNode.append(descTextEvent)
            button.append(descTextNode)
            tableData.append(button)
          }
        }
      }
      //weekday class assignment 
      if ((days[i].getDay() >= 1 && days[i].getDay() <= 5)) {
        let tableData = $('<td>').attr('class', 'day');
        $(tableData).attr('id', "date-" + days[i].setHours(0, 0, 0, 0).valueOf())
        // HOLIDAYS
        //christmas
        console.log(days[i].toLocaleDateString())
        if (days[i].toLocaleDateString().includes("12/25/2")) {
          (tableData).text('🎄')
        }
        //Nye
        if (days[i].toLocaleDateString().includes("12/31/2")) {
          (tableData).text('🥂')
        }
        //groundhog day
        if (days[i].toLocaleDateString().includes("2/2/2") && (!days[i].toLocaleDateString().includes("12/"))) {
          (tableData).text('🐿️')
        }
        //Valentines
        if (days[i].toLocaleDateString().includes("2/14/2") && (!days[i].toLocaleDateString().includes("12/"))) {
          (tableData).text('💝')
        }
        //St. Patties
        if (days[i].toLocaleDateString().includes("3/17/2")) {
          (tableData).text('🍀')
        }
        //april fools
        if (days[i].toLocaleDateString().includes("4/1/2")) {
          (tableData).text('🃏')
        }
        //earth day
        if (days[i].toLocaleDateString().includes("4/22/2")) {
          (tableData).text('🌎')
        }
        //Canada day
        if (days[i].toLocaleDateString().includes("7/1/2")) {
          (tableData).text('🍁')
        }
        if (days[i].toLocaleDateString().includes("7/4/2")) {
          (tableData).text('🗽')
        }
        $(tableData).append(days[i].getDate());
        $(tableRow).append(tableData);
        //day-WEEKDAY class assignment 
        if (days[i].getTime() === TODAY) {
          $(tableData).attr('class', 'today');
          $(tableData).attr('id', "date-" + days[i].setHours(0, 0, 0, 0).valueOf())
          $(tableRow).append(tableData);
        }
        //check for event
        for (let i = 0; i < queries.length; i++) {
          if (tableData.attr('id') == queries[i]) {
            //button
            var button = $("<button>")
            .attr('type', 'button')
            .attr('class', "btn btn-warning")
            .attr('data-toggle', 'modal')
            .attr('data-target', '#myModal')
            .attr('id', 'eventButton')
            .attr('onclick', 'blur()')
            // 1 state a paragraph with id titleText on button
            let titleText = $('<p>')
            .attr('id', 'titleText')
            // 2 text value is taken from the array eventText
            var textEvent = document.createTextNode(' '
              + eventText[i])
            titleText.append(textEvent)
            button.append(titleText)
            //create a second for description
            let descTextNode = $('<p>')
            .attr('id', 'descText')
            var descTextEvent = document.createTextNode(' '
              + descText[i])
            descTextNode.append(descTextEvent)
            button.append(descTextNode)
            tableData.append(button)
          }
        }
      }

      // last week of month empty cells
      for (let i = days.at(-1).getDay() + 1; i < 7; i++) {
        let tableData = $('<td>');
        $(tableData).append(tableRow);
      }

      $(tbody).append(tableRow);
      //append tbody to table
      $(table).append(tbody);
      //append table to calendar
      $('#calendar').append(table);
    }
  }
}
// declare a instance of Calendar
const cal = new Calendar($('#calendar'));


/*events array
-->   queriesText = event text
-->   descText = description */
var events = [];
var queries = [];
var eventText = [];
var descText = [];


//event buttons
var button = $('#button')[0]
button.addEventListener('click', (e) => {
  e.preventDefault();

  //collect the values from the input fields
  var eventInput = $('#calEvent')[0]
  var description = $('#description')[0]
  var error = $('#error')

  //create event variable with the date, converting it to unix time
  var newEvent = new Event(new Date(date.value).setHours(0, 0, 0, 0).valueOf(), calEvent.value,
    description.value);

  console.log('up here', description.value)
  //assign a new ID referencing a cell in calendar
  myEventID = $(newEvent).attr('id', 'date-' + new Date(date.value).setHours(24, 0, 0, 0).valueOf());

  //select all attributes with a date-prefix of 'date-'
  var eventQuery = document.querySelector("*[id^=date-" + new Date(date.value).setHours(24, 0, 0, 0).valueOf() + "]")

  //log the event, throw error if no event in input matches date format
  console.log(eventQuery)

  //error functions
  if (eventQuery == null) {
    errorFunc('Please enter a valid date (YYYY-MM-DD)')
    return
  };

  if ((eventInput.value == '' || eventInput.value == null)) {
    errorFunc('Please enter an event. ')
    return
  }
  else (alert('success!'))

  //add class and text to calendar cell
  eventQuery.classList.add('event')

  //create button link for click event
  var button = document.createElement("button")
  button.setAttribute('type', 'button')
  button.setAttribute('class', "btn btn-warning")
  button.setAttribute('data-toggle', 'modal')
  button.setAttribute('data-target', '#myModal')
  button.setAttribute('id', 'eventButton')
  button.setAttribute('onclick', 'blur()')
  //create the title text  for button
  let titleText = document.createElement('p')
  titleText.setAttribute('id', 'titleText')
  var textEvent = document.createTextNode('  ' + (
    calEvent.value))
  titleText.append(textEvent)
  button.append(titleText)

  //create the decription text for the button
  let descriptionText = document.createElement('p')
  descriptionText.setAttribute('id', 'descText')
  var textEventDescription = document.createTextNode('  ' + (
    description.value))
  descriptionText.append(textEventDescription)
  button.append(descriptionText)

  eventQuery.append(button)

  //push the values to an array, giving access globally
  eventText.push(calEvent.value)
  descText.push(description.value)


  //push new event to array
  events.push(newEvent)

  //push new query to array
  queries.push(myEventID.attr('id'))

  //console logging event details with Unix conversion
  for (let i = 0; i < events.length; i++) {
    console.log('Event Date in Unix time', new Date(date.value).setHours(0, 0, 0, 0).valueOf(), '\n',
      'date: ', date.value, '\n',
      'event: ', calEvent.value, '\n',
      'description: ', description.value, '\n',
      'more...', events)
  }
  //upon successful submission of data, empty fields and remove an error message if any
  clearAll();
  var error = $('#error')
  error.remove();
})

//clear all fields button
var clear = $('#clear')[0];
clear.addEventListener('click', (e) => {
  e.preventDefault();
  var error = document.querySelectorAll('#error');
  error.forEach(error => {
    error.remove();
  })
})


// call the display() method
cal.display();





