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
    //not all APOD API calls have copyright property; condition fixes undefined result
    if (apodData.copyright === undefined) {
        $copyright.hide();
    };
};
///EPIC data
let epicData;
const randomEpicDataGenerator = () => {
    return Math.floor(Math.random() * epicData.length);
};
const $epicData = $('#epic-button');
const $epicSection = $('#epic-section');
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
//Function to insert Epicdata into click function
function renderEpic() {
    $epicTitle.text(`Feburary 11, 2021 Lunar Transit Images`);
    $epicPhoto.attr('src', `https://api.nasa.gov/EPIC/archive/natural/2021/02/11/png/${epicData[randomEpicDataGenerator()].image}.png?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`);
    $epicCaption.text(`${epicData[randomEpicDataGenerator()].caption}.`);
    $epicIdentifier.text(`Identifier #: ${epicData[randomEpicDataGenerator()].identifier}`);
    $epicTime.text(`Date and time of image capture: ${epicData[randomEpicDataGenerator()].date}`);
    $epicSection.toggle();
};
//Rover Data
let roverData;
const $roverImage = $('#rover-image');
const $roverId = $('#rover-earth-data');
const $roverName = $('#rover-name');
const $userInput = $('#user-input');
const $roverCamera = $('#rover-camera');
const $roverTitle = $('#rover-title');
const $roverStyle = $('.rover-style');
const $hideInfoOpportunity = $('#hide-info-opportunity');
const $hideInfoCuriosity = $('#hide-indo-curiosity');
//Produce random photo from rover array 
const randomRoverDataGenerator = () => {
    return Math.floor(Math.random() * roverData.photos.length);
};
//Rover click function with API call
function handleRoverEvent(event) {
    event.preventDefault();
    if ($userInput.val() === undefined || $userInput.val() === '') {
        alert('Invalid Input: enter either Curiosity or Opportunity');
    } else {
        // can't put userInput for the date, works fine with date=2015-6-3&api_key= 
        $.ajax({
            url: `https://api.nasa.gov/mars-photos/api/v1/rovers/${$userInput.val()}/photos?earth_date=2018-04-26&api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
        }).then((data) => {
            roverData = data;
            console.log(roverData);
            renderRover();
            //Clear after submit
            //After further testing, for user it is easier to keep rover name in field and submit over and over to get different images so I removed clear function.
            //$userInput.val('');
        },
            (error) => {
                console.log('There is a problem', error)
                }
            );
    };
};
//function insert roverData during submit 
function renderRover() {
    $roverTitle.show();
    $roverName.show();
    $roverCamera.show();
    $roverStyle.show();
    $hideInfoCuriosity.hide();
    $hideInfoOpportunity.hide();
    $roverImage.attr('src', roverData.photos[randomRoverDataGenerator()].img_src);
    $roverName.text(roverData.photos[0].rover.name);
    $roverCamera.text(roverData.photos[randomRoverDataGenerator()].camera.full_name);
};
///Sunset data
let sunsetData;
const $sunsetData = $('#sunset-button');
const $sunsetSection = $('#sunset-section');
const $sunsetPhoto = $('#sunset-photo');
const $martianSol = $('#sunset-sol');
//Sunset click function with API call
function handleSunsetEvent(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-04-15&api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
        sunsetData = data;
        renderSunset();
    },
        (error) => {
            console.log('There is a problem', error);
        });
};
//function for APOD click function to insert data
function renderSunset() {
    $sunsetPhoto.attr('src', sunsetData.photos[16].img_src);
    $sunsetSection.toggle();
    $martianSol.text(sunsetData.photos[16].sol)
};
//All Click Functions
$apodData.on('click', handleAPODEvent);
$epicData.on('click', handleEPICEvent);
$('form').on('submit', handleRoverEvent);
$sunsetData.on('click', handleSunsetEvent);
//opportunity ended images 6,10,2018
//4/26/2017 good day with several pic from both rovers