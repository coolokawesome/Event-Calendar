/*Syrus Samson, 2022
 * Created:  Dec 30, 2022
 */
button = document.querySelectorAll('navButton').forEach(addEventListener('click', e => {
    cell = document.querySelectorAll(("[id*='date']"))
        .forEach(e => e.addEventListener("click", function () {
            /** searching for a date stored in the id of the parent cell,
            stripping that ID's prefix
            formatting that string of an ID to an intiger, then converting it to a Date object */
            
            var time = e.id
            var timeFixed = time.replace(/\D/g, "")
            console.log(timeFixed)

            //getting and logging the event title 
            var eventText = e.querySelector('#titleText')
            if (eventText != null) {
                console.log('first Child', eventText.textContent)
            }
            if (eventText == null) {
                return
            }
            //get the event title
            body = $('#modalHead').text('Title: ' + eventText.textContent)

            //header append to modal
            header = $('#modalDate').text('Date: ' + new Date(parseInt(timeFixed)).toLocaleDateString('en-US'));

            //description append to modal
            var descEvent = e.querySelector('#descText')
            if (descEvent.textContent != null) {
                desc = $('#modalDesc').text('Description: ' + descEvent.textContent)
                console.log('description', descEvent.textContent)
            }
            if (descEvent.textContent == null) {
                body = $('#modalHead').text('Title: ' + eventText.textContent)
            }
        }))
}))






