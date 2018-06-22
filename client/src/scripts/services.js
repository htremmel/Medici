angular.module('angular')
    .constant("baseURL", "http://localhost:3000/")
    .service('transactions', ['$resource', '$resourceProvider', '$http', 'baseURL', function($resource, $resourceProvider, $http, baseURL) {
        this.getTransactions = function() {
            var Transactions = $resource('transactions/:transId', {
                transId: '@tid'
            });
            return $resource(baseURL + "dishes/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };
    }]);
