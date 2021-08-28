//Next step: Find an API where the user can search for an image/data if possible add input 

//NASA KEY = 7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL
//APOD Data
let apodData;
const $apodData = $('#apod-button');
const $photo = $('#apod-photo');
const $photoTitle = $('#apod-title');
const $copyright = $('#apod-copyright');
const $explanation = $('#apod-explanation');
const $date = $('#apod-date');
const $section = $('#apod-section');
//APOD Click function with API call
function handleAPODEvent(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
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
//Each toggle will randomly pull a different array element to show multiple images and times
//epicData length was 11 
const randomEpicDataGenerator = () => {
    return Math.floor(Math.random() * 11)
};
const $epicData = $('#epic-button');
const $epicSection = $('#section-one');
const $epicTitle = $('#epic-title');
const $epicPhoto = $('#epic-photo');
const $epicCaption = $('#epic-caption');
const $epicIdentifier = $('#epic-identifier');
const $epicTime = $('#epic-date');

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
    $epicTitle.text(`Feburary 11, 2021 Lunar Transit Images`)
    $epicPhoto.attr('src', `https://api.nasa.gov/EPIC/archive/natural/2021/02/11/png/${epicData[randomEpicDataGenerator()].image}.png?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`);
    $epicCaption.text(`${epicData[randomEpicDataGenerator()].caption}.`);
    $epicIdentifier.text(`Identifier #: ${epicData[randomEpicDataGenerator()].identifier}`);
    $epicTime.text(`Date and time of image capture: ${epicData[randomEpicDataGenerator()].date}`);
    //toggle function also creates issue with two click after initial load
    $epicSection.toggle();
};
//All Click Functions
$apodData.on('click', handleAPODEvent);
$epicData.on('click', handleEPICEvent);

//<img style="width:75%;" src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20210211004104.png?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL">