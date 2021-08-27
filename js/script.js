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
        console.log(data)
        apodData = data;
        renderAPOD();
//toggle still wants two clicks when first loaded, otherwise it works fine //
        $section.toggle();
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
};
$apodData.on('click', handleAPODEvent);

///New Button for EPIC data
const $epicData = $('#epic-button');
const $epicSection =$('#section-one')
const $epicPhoto = $('#epic-photo');
const $epicCaption = $('#epic-caption');
const $epicIdentifier =$('#epic-identifier')
const $epicTime = $('#epic-date-time');
function handleEPICEvent(event) {
    event.preventDefault()
    $.ajax({
        url: `https://api.nasa.gov/EPIC/api/natural/date/2021-02-11?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
        $epicPhoto.attr('src', "https://api.nasa.gov/EPIC/archive/natural/2021/02/11/png/epic_1b_20210211015604.png?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL");
        $epicCaption.text(data[5].caption)
        $epicIdentifier.text(`Identifier #: ${data[5].identifier}. Verifies photo time and date.`)
        $epicTime.text(`Date and time of image capture: ${data[5].date}.`)
        //toggle function also creates issue with two click after initial load
        $epicSection.toggle()
    },
        (error) => {
            console.log('There is a problem', error);
        });
};
$epicData.on('click', handleEPICEvent)

//<img style="width:75%;" src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20210211004104.png?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL">


