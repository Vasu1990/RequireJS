//never ever do this
//about is already defined in shim
//require understands this as seld ref and returns undefined
//define('about' , function () {

//before returning its module definition.
define(['jquery'],function ($) {
    $('.click-me').click(function () {

        // Start the main app logic.
        requirejs(['./aboutUs/about_template'],
            function   (aboutTemp) {
                aboutTemp.renderTemplate();
            });
    });


    return {
        init: function init() {
            alert('init called');
        }
    }

});