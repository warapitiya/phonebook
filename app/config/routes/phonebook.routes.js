/**
 * Created by Malindu Warapitiya on 3/15/16.
 */

angular.module('phonebook.routes', [])
    .config(['$stateProvider', '$urlRouterProvider', routes]);


function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');

}
