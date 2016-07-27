console.log('\'Allo \'Allo!');
require.config({
    //By default load any module IDs from scripts
    baseUrl: 'scripts',
});


// Start the main app logic.
requirejs(['index/greeting'],
    function   (greeting) {
        greeting.sendAlert('Hello World');
});
