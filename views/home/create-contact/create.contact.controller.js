/**
 * Created by Malindu Warapitiya on 3/15/16.
 */


angular.module('phonebook.controllers')
    .controller('CreateContact', ['$uibModalInstance', 'dataService', createContact]);

function createContact($uibModalInstance, dataService) {

    //scope
    var vm = this;

    //save
    vm.ok = ok;

    //cancel
    vm.cancel = cancel;


    vm.data = {};

    /**
     * on save event
     */
    function ok() {

        dataService.addContact(_.clone(vm.data)).then(function (_data) {
            $uibModalInstance.close(_data);
        }, function (_error) {
            console.error(_error);
            $uibModalInstance.close(null);
        });


    }


    /**
     * Con cancel event
     */
    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

}