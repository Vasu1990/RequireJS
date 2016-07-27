console.log('\'Allo \'Allo!');
require.config({
    //By default load any module IDs from scripts
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: '../../../bower_components/jquery/dist/jquery',
        underscore: '../../../bower_components/underscore/underscore',
        text: '../../../bower_components/text/text'
    },
    shim: {
        about : {
            //These script dependencies should be loaded before loading
            //about.js
            deps: ['jquery'],
            //Once loaded, use the global 'about' as the
            //module value.
            exports: 'about'
        },
        about_template : {
            //These script dependencies should be loaded before loading
            //about.js
            deps: ['underscore','text'],
            //Once loaded, use the global 'about' as the
            //module value.
            exports: 'about_template'
        }
    }
});


// Start the main app logic.
requirejs(['./aboutUs/about'],
    function   (about) {
        about.init();
});
