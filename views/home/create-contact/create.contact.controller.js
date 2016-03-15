/**
 * Created by Malindu Warapitiya on 3/15/16.
 */


angular.module('phonebook.controllers')
    .controller('CreateContact', ['$uibModalInstance', createContact]);

function createContact($uibModalInstance) {

    //scope
    var vm = this;

    //save
    vm.ok = ok;

    //cancel
    vm.cancel = cancel;

    /**
     * on save event
     */
    function ok() {
        $uibModalInstance.close(null);
    }


    /**
     * Con cancel event
     */
    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

}