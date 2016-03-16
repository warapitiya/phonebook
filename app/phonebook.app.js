/**
 * Created by Malindu Warapitiya on 3/15/16.
 */

angular.module('phonebook', [

    //initial & angular modules
    'ui.router',
    'ngAnimate',

    //3rd party modules
    'ui.bootstrap',
    'xeditable',

    //application core modules
    'phonebook.routes',
    'phonebook.controllers',
    'phonebook.api',
    'phonebook.configs'
]);