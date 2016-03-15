/**
 * Created by Malindu Warapitiya on 3/15/16.
 */

angular.module('phonebook.controllers', [])
    .controller('HomeController', ['$http', homeController]);

function homeController($http) {

    var vm = this;

    vm.phonebooklist = [];


    /**
     * Getting sample data
     */
    $http.get('sample.data.json')
        .then(function (_data) {
            vm.phonebooklist = _data.data;
        }, function (_error) {
            console.error(_error);
        })

}