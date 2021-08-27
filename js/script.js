//NASA KEY = 7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL

//APOD Data
const $apodData = $('#apod-data')
const $hideAPODData = $('hide-apod-data')
const $photo = $('#photo')
const $photoTitle = $('#photo-title')
const $copyright = $('#copyright')
const $explanation = $('#explanation')
const $date = $('#date')
const $section = $('section')

function handleAPODEvent(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
        //check data populates
        //console.log(data)
        $photoTitle.text(data.title)
        $photo.attr('src', data.hdurl)
        $copyright.text(`Image produced by: ${data.copyright}`)
        $date.text(`Photo taken: ${data.date}`)
        $explanation.text(data.explanation)
        //toggle still wants two clicks when first loaded, otherwise it works fine
        $section.toggle()
          
    },
        (error) => {
            console.log('There is a problem', error)
        });
}
$apodData.on('click', handleAPODEvent)





