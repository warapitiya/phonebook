/**
 * Created by Malindu Warapitiya on 3/15/16.
 */

angular.module('phonebook.controllers', [])
    .controller('HomeController', ['$uibModal', 'dataService', homeController]);

function homeController($uibModal, dataService) {

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

    //create a new contact
    vm.createContact = createContact;

    //remove a contact
    vm.removeContact = removeContact;

    vm.isContactSelected = isContactSelected;

    vm.updateContact = updateContact;


    /**
     * get all contacts
     */
    dataService.getContacts().then(function (_data) {
        vm.phonebooklist = _data;
    }, function (_error) {
        console.error(_error);
    });


    /**
     * Update a data record
     * @param type
     * @param _data
     */
    function updateContact(type, _data) {

        //check if undefined or null
        if (_.isUndefined(_data) || _.isNull(_data)) {
            return "*Required";
        }

        //check the minimum number length
        if (_.isEqual(type, 'number')) {

            var _string = _.clone(_data) + "";

            if (_.lt(_string.length, 7)) {
                return "Should have minimum 7 numbers";
            }
        }

        //create the _temp object to edit
        var _temp = {
            _id: vm.phonebookdetails._id
        };

        _temp[type] = _data;


        //call the data service for update
        dataService.updateContact(_temp)
            .then(function (_result) {

                console.log("Saved!");

            }, function (_error) {
                console.error(_error);
            });
    }


    /**
     * Is contact selected to diplay details
     * @returns {boolean}
     */
    function isContactSelected() {
        return _.isEmpty(vm.phonebookdetails);
    }


    /**
     * on click event for item click
     * @param _record
     */
    function itemClicked(_record) {

        if (!_.isUndefined(_record)) {

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


    /**
     * Remove contact from list
     */
    function removeContact() {

        console.log(vm.phonebookselected._id);

        var _data = _.find(vm.phonebooklist, function (o) {
            return _.isEqual(o._id, vm.phonebookselected._id);
        });

        console.log(_data);

        dataService.removeContact(_data._id).then(function (_data) {

            var _id = _.findIndex(vm.phonebooklist, function (o) {
                return _.isEqual(o._id, vm.phonebookselected._id);
            });

            vm.phonebooklist.splice(1, _id);

            vm.phonebookdetails = {};
            vm.phonebookselected = {};

            console.log(vm.phonebooklist);

        }, function (_error) {
            console.error(_error);
        });

    }


    /**
     * Create a new contact modal
     */
    function createContact() {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'home/create-contact/create.contact.view.html',
            controller: 'CreateContact',
            controllerAs: 'vm',
            size: 'sm',
            resolve: {
                items: function () {
                    return null;
                }
            }
        });

        modalInstance.result.then(function (_data) {
            vm.phonebooklist.push(_data);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });

    }

}