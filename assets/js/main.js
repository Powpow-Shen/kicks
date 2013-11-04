// Set up module management
requirejs.config({
    //By default load any component from assets
    baseUrl: '/',
    //except, if the component starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'jquery': 'js/lib/jquery-1.7.2.min',
        'underscore': 'js/lib/underscore-min',
        'backbone': 'js/lib/backbone-min',
        'backbone-mvc': 'js/lib/backbone-mvc',
        'handlebars': 'js/lib/handlebars.runtime',
        // handlebars.manager will load compiled.handlebars which is all compiled handlebars.
        // Please consider to use text plugin if there are too many handlebars templates.
        'handlebars.manager': 'js/lib/handlebars.manager',

        // Plugins
        'text': 'js/lib/text',
        'css': 'js/lib/css'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone-mvc': {
            deps: ['backbone'],
            exports: 'BackboneMVC'
        },
        // DO NOT exports Handlebars due to compiled.handlebars requires Handlebars to be global.
        //'handlebars': {
        //    exports: 'Handlebars'
        //},
        'templates/compiled.handlebars': {
            deps: ['handlebars'],
            exports: 'CompiledHandlebars'
        }
    }
});

require(['backbone', 'backbone-mvc', 'js/controllers/AppCtrl'], function(Backbone, BackboneMVC, AppCtrl) {
    $(document).ready(function() {
        // Start the new automatic router and Backbone.history.
        var router = new BackboneMVC.Router();
        Backbone.history.start();
        // Just invoke controllers to create whole app.
        var appCtrl = new AppCtrl();
    });
});
