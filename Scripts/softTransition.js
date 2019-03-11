/**************************************/
/*      Script by Joseph Scafidi      */
/*         Copyright © 2019           */
/**************************************/

/* assing new direction */ //url redirection
window.newLocation = function (location) {
    window.location = location;
}

/* detects click event from the <a> tag */ //Trasition fx opacity
$('.main_nav_item').click(function (e) {
    e.preventDefault();  //will stop the link href to call page
    //Get clicked url
    href = $(this).children().attr('href');
    //time to wait before aplied the opacity 
    setTimeout(function () {
        $('#fadeLink').css('opacity', '0');

        setTimeout(function () {
            //use "window.location.href + href" in case of ASP.net 
            newLocation(href); //will redirect to your page after the opacity fx ends
        }, 800);
    }, 0);
});