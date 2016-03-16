/**
 * Created by Malindu Warapitiya on 3/15/16.
 */

angular.module('phonebook.api', [])
    .factory('dataService', ['$http', '$q', dataService]);

function dataService($http, $q) {
    return {
        getContacts: getContacts,
        addContact: addContact,
        removeContact: removeContact,
        updateContact: updateContact
    };


    /**
     * Get all contacts
     */
    function getContacts() {

        var deferred = $q.defer();

        $http.get('/api/contacts')
            .then(function (_data) {
                deferred.resolve(_data.data);
            }, function (_error) {
                deferred.reject(_error);
            });

        return deferred.promise;

    }


    /**
     * Add contact
     * @param _data
     * @returns {*}
     */
    function addContact(_data) {
        var deferred = $q.defer();

        $http.post('/api/contact', _data)
            .then(function (_data) {
                deferred.resolve(_data.data);
            }, function (_error) {
                deferred.reject(_error);
            });

        return deferred.promise;
    }


    /**
     * Remove the contact
     * @param _id
     * @returns {*}
     */
    function removeContact(_id) {

        var deferred = $q.defer();

        $http.delete('/api/contact/' + _id)
            .then(function (_data) {
                deferred.resolve(_data.data);
            }, function (_error) {
                deferred.reject(_error);
            });

        return deferred.promise;

    }


    /**
     * update a contact
     */
    function updateContact(_data) {

        var deferred = $q.defer();

        $http.post('/api/contact/' + _data._id, _data)
            .then(function (_data) {
                deferred.resolve(_data.data);
            }, function (_error) {
                deferred.reject(_error);
            });

        return deferred.promise;
    }
}