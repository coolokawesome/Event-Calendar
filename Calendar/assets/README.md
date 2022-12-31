# Calendar with Events
This calendar was created using jQuery with a few vanilla JS components. Bootstrap 3.4 used to simplify formatting. 

# Description
 The user can enter an event title and description for an event. Once the generated button is clicked, the cell will fetch the date, event title and description and display it within the modal.

This works by assigning a unique ID to each day, the suffix being the date in Unix time (example 'date-1672549200000'). All days are converted upon navigation and compared to check if an event occurs. The events are also created this way, and only when the ID's match will it generate an event button from the array(further information on the events can be seen within the console).

Common national holidays have been added, generating an emoji to the corresponding date. Note that time-shifting holidays (such as CNY or Thanksgiving) have yet to be included. 

I hope to change some of the styling, creating better ratios on desktop and smoother transitions.



 



