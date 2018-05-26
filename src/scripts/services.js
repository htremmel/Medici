angular.module('angular')
    .constant("baseURL", "http://localhost:3000/")
    .service('transactions', ['$resource', '$resourceProvider', '$http', 'baseURL', function($resource, $resourceProvider, $http, baseURL) {

        this.getTransactions = function() {
            var Transactions = $resource('transactions/:transId', {transId: '@tid'});
            return $resource(baseURL + "dishes/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };

        // implement a function named getPromotion
        // that returns a selected promotion.
        this.getPromotion = function() {
            return $resource(baseURL + "promotions/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };
    }])

.factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        var corpfac = {};
        // Implement two functions, one named getLeaders,
        corpfac.getLeaders = function() {
            return $resource(baseURL + "leadership/:id", null, {
                'update': {
                    method: 'PUT',
                    isArray: false
                }
            });
        };
        // the other named getLeader(index)
        corpfac.getLeader = function() {
            return corpfac.getLeaders()[0];
        };

        return corpfac;
        // Remember this is a factory not a service
    }])
    .service('indexFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        this.getUser = function() {};
        this.login = function() {};
    }])
    .service('transactionFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getTransactions = function() {
            return $resource(baseURL + "transactions/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };
    }]);
