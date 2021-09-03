//NASA KEY = 7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL

//APOD Click function with API call
const $apodData = $('#apod-button');
function handleAPODEvent(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
        const $photo = $('#apod-photo');
        $photo.attr('src', data.hdurl);
        const $photoTitle = $('#apod-title');
        $photoTitle.text(data.title);
        const $explanation = $('#apod-explanation');
        $explanation.text(data.explanation);
        const $date = $('#apod-date');
        $date.text(`Photo taken: ${data.date}`);
        const $section = $('#apod-section');
        $section.toggle();
        const $copyright = $('#apod-copyright');
        $copyright.text(`Image produced by: ${data.copyright}`);
        if (data.copyright === undefined) {
            $copyright.hide();
        };
    },
             (error) => {
                console.log('There is a problem', error);
            });
};
$apodData.on('click', handleAPODEvent);

//Sunset click function with API call
const $sunsetData = $('#sunset-button');
function handleSunsetEvent(event) {
     event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-04-15&api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
     }).then((data) => {
        const $sunsetPhoto = $('#sunset-photo');
        $sunsetPhoto.attr('src', data.photos[16].img_src);
        const $martianSol = $('#sunset-sol');
        $martianSol.text(data.photos[16].sol);
        const $sunsetSection = $('#sunset-section');
        $sunsetSection.toggle();
    },
         (error) => {
             console.log('There is a problem', error);
         });
};
$sunsetData.on('click', handleSunsetEvent);

//EPIC click function with API call
const $epicData = $('#epic-button');
function handleEPICEvent(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/EPIC/api/natural/date/2021-02-11?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
    }).then((data) => {
        const randomEpicDataGenerator = () => {
        return Math.floor(Math.random() * data.length);
        };
        const $epicTitle = $('#epic-title');
        $epicTitle.text(`Feburary 11, 2021 Lunar Transit Images`);
        const $epicPhoto = $('#epic-photo');
        $epicPhoto.attr('src', `https://api.nasa.gov/EPIC/archive/natural/2021/02/11/png/${data[randomEpicDataGenerator()].image}.png?api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`);
        const $epicCaption = $('#epic-caption');
        $epicCaption.text(`${data[randomEpicDataGenerator()].caption}.`);
        const $epicIdentifier = $('#epic-identifier');
        $epicIdentifier.text(`Identifier #: ${data[randomEpicDataGenerator()].identifier}`);
        const $epicTime = $('#epic-date');
        $epicTime.text(`Date and time of image capture: ${data[randomEpicDataGenerator()].date}`);
        const $epicSection = $('#epic-section');
        $epicSection.toggle();
    },
         (error) => {
             console.log('There is a problem', error);
        });
};
$epicData.on('click', handleEPICEvent);

//Global User input variable to use if input invalid
const $userInput = $('#user-input');

//Rover submit form function with API call
function handleRoverEvent(event) {
    event.preventDefault();
    $.ajax({
             url: `https://api.nasa.gov/mars-photos/api/v1/rovers/${$userInput.val()}/photos?earth_date=2018-04-26&api_key=7t9znEI8iqcIiSc81GpcDqZ0KlrVfhCSz8PkEOOL`
         }).then((data) => {
            const randomRoverDataGenerator = () => {
                return Math.floor(Math.random() * data.photos.length);
            };
            const $roverImage = $('#rover-image');
            $roverImage.attr('src', data.photos[randomRoverDataGenerator()].img_src);
            const $roverName = $('#rover-name');
            $roverName.text(data.photos[0].rover.name);
            $roverName.show();
            const $roverCamera = $('#rover-camera');
            $roverCamera.text(data.photos[randomRoverDataGenerator()].camera.full_name);
            $roverCamera.show();
            const $roverTitle = $('#rover-title');
            $roverTitle.show();
            const $roverStyle = $('.rover-style');
            $roverStyle.show();
            const $hideInfoOpportunity = $('#hide-info-opportunity');
             $hideInfoOpportunity.hide();
             const $hideInfoCuriosity = $('#hide-info-curiosity');
             $hideInfoCuriosity.hide();
         },
             (error) => {
                 console.log('There is a problem', error)
                 });
};
$('form').on('submit', handleRoverEvent);