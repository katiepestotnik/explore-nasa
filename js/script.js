//NASA KEY = 7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL
const $blueHour = $('#blue-hour')
const $photo = $('#photo')
const $photoTitle = $('#photo-title')
const $copyright = $('#copyright')
const $explanation = $('#explanation')
const $date = $('#date')
const $section = $('section')

function handleEvent(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
        console.log(data)
        $photoTitle.text(data.title)
        $photo.attr('src', data.hdurl)
        $copyright.text(`Image produced by: ${data.copyright}`)
        $date.text(`Photo taken: ${data.date}`)
        $explanation.text(data.explanation)
        $blueHour.on('click', function () {
            $section.toggle()
        })
    },
        (error) => {
            console.log('There is a problem', error)
        });
}
$blueHour.on('click', handleEvent)


