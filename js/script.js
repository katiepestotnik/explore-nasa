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
//APOD Click function with API call
function handleAPODEvent(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
        //console.log(data)
        apodData = data;
        renderAPOD();
        //fix if copyright is undefined
//toggle working better with each api data set put into own divs //
    },
        (error) => {
            console.log('There is a problem', error);
        });
};
//function for APOD click function to insert data
function renderAPOD() {
    $photoTitle.text(apodData.title);
    $photo.attr('src', apodData.hdurl);
    $copyright.text(`Image produced by: ${apodData.copyright}`);
    $date.text(`Photo taken: ${apodData.date}`);
    $explanation.text(apodData.explanation);
    $section.toggle();
};
///EPIC data
let epicData;
const $epicData = $('#epic-button');
const $epicSection =$('#section-one')
const $epicPhoto = $('#epic-photo');
const $epicCaption = $('#epic-caption');
const $epicIdentifier = $('#epic-identifier');
const $epicTime = $('#epic-date-time');
//EPIC click function with API call
function handleEPICEvent(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/EPIC/api/natural/date/2021-02-11?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
        epicData = data;
        renderEpic();
    },
        (error) => {
            console.log('There is a problem', error);
        });
};
//function for EPIC click function to insert data
function renderEpic() {
    $epicPhoto.attr('src', `https://api.nasa.gov/EPIC/archive/natural/2021/02/11/png/${epicData[5].image}.png?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`);
    //console.log(epicData[5].image);
    $epicCaption.text(epicData[5].caption);
    $epicIdentifier.text(`Identifier #: ${epicData[5].identifier}. Verifies photo time and date.`);
    $epicTime.text(`Date and time of image capture: ${epicData[5].date}.`);
    //toggle function also creates issue with two click after initial load
    $epicSection.toggle();
};

//All Click Functions
$apodData.on('click', handleAPODEvent);
$epicData.on('click', handleEPICEvent);

//<img style="width:75%;" src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20210211004104.png?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL">