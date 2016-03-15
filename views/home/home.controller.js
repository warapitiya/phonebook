/**
 * Created by Malindu Warapitiya on 3/15/16.
 */

angular.module('phonebook.controllers', [])
    .controller('HomeController', ['$http', homeController]);

function homeController($http) {

    //scope
    var vm = this;

    //list of contacts
    vm.phonebooklist = [];

    //contact details object
    vm.phonebookdetails = {};

    //copy of contact details object with active property
    vm.phonebookselected = {};

    //item click event function
    vm.itemClicked = itemClicked;


    /**
     * Getting sample data
     */
    $http.get('sample.data.json')
        .then(function (_data) {
            vm.phonebooklist = _data.data;
        }, function (_error) {
            console.error(_error);
        });


    /**
     * on click event for item click
     * @param _record
     */
    function itemClicked(_record) {

        //skip if not null
        if (!_.isNull(vm.phonebookselected)) {
            //delete the active property
            delete vm.phonebookselected.active;
        }

        //add active property
        _record.active = true;

        //cache a copy of _record
        vm.phonebookselected = _record;

        //deep clone the object
        vm.phonebookdetails = _.clone(_record);
    }

}