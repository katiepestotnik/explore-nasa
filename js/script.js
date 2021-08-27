//NASA KEY = 7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL

//APOD Data
let apodData;
const $apodData = $('#apod-button');
const $photo = $('#photo');
const $photoTitle = $('#photo-title');
const $copyright = $('#copyright');
const $explanation = $('#explanation');
const $date = $('#date');
const $section = $('section');

function handleAPODEvent(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
        apodData = data;
        renderAPOD();    
    },
        (error) => {
            console.log('There is a problem', error);
        });
};
function renderAPOD() {
    $photoTitle.text(apodData.title);
    $photo.attr('src', apodData.hdurl);
    $copyright.text(`Image produced by: ${apodData.copyright}`);
    $date.text(`Photo taken: ${apodData.date}`);
    $explanation.text(apodData.explanation);
        //toggle still wants two clicks when first loaded, otherwise it works fine
    $section.toggle();
};
$apodData.on('click', handleAPODEvent);