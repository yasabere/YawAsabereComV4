// Init ScrollMagic
var controller = new ScrollMagic.Controller();
 
// get all triggers - headers of all 3 slides
var headers = ["#slide01 header", "#slide02 header", "#slide03 header"];
 
// SCENE 1
// create scenes for each of the headers
headers.forEach(function (header, index) {

    // number for highlighting scenes
    var num = index+1;
 
    // make scene
    var headerScene = new ScrollMagic.Scene({
        triggerElement: header,
        offset: -95
    })
    .setClassToggle('#slide0'+num, 'is-active')
    .addTo(controller);
});

// change color of the nav back to white
slides.forEach(function (slide, index) {
 
    var slideScene = new ScrollMagic.Scene({
        triggerElement: slide
    })
    .on("enter", function (event) {
        $('nav').removeAttr('class');
    })
    .addTo(controller);
});