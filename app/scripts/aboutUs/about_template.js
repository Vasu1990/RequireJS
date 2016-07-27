//before returning its module definition.
define(['jquery','underscore'], function ($ , _) {

    function renderTemplate() {
        // When rending an underscore template, we want top-level
        // variables to be referenced as part of an object. For
        // technical reasons (scope-chain search), this speeds up
        // rendering; however, more importantly, this also allows our
        // templates to look / feel more like our server-side
        // templates that use the rc (Request Context / Colletion) in
        // order to render their markup.
        _.templateSettings.variable = 'rc';

        requirejs(['text!../../partials/about_template.html'], function (html) {

            if (!$('.about-template').length) {
                bindTemplate(html);
            }

        });


    }
    function bindTemplate(html) {
        // Grab the HTML out of our template tag and pre-compile it.
        var template = _.template(
            $($(html)[2]).html()
        );

        // Define our render data (to be put into the "rc" variable).
        var templateData = {
            listTitle: 'Olympic Volleyball Players',
            listItems: [
                {
                    name: 'Misty May-Treanor',
                    hasOlympicGold: true
                },
                {
                    name: 'Kerri Walsh Jennings',
                    hasOlympicGold: true
                },
                {
                    name: 'Jennifer Kessy',
                    hasOlympicGold: false
                },
                {
                    name: 'April Ross',
                    hasOlympicGold: false
                }
            ]
        };

        // Render the underscore template and inject it after the H1
        // // in our current DOM.
        $('h1').after(
            template(templateData)
        );
    }

    return {
        renderTemplate: renderTemplate
    }

});