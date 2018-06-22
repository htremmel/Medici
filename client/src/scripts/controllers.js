angular.module('angular')
    .controller('IndexController', ['$scope', 'indexFactory', function($scope, menuFactory) {
        $scope.user = {
            name: "",
            email: ""
        };
    }])
    .controller('TransactionsController', ['$scope', 'transactionFactory', function($scope, transactionFactory) {
        $scope.sendTransaction = function() {

            $scope.transaction = {
                user: "",
                timestamp: "",
                desc: "",
                amount: "", // TODO:type safety.
                receipt: "",
                category: "", // TODO:use some type of case safety.
                account: "" // TODO: with suggester for account.
            };

            $scope.transactions = transactionFactory.getTransactions().
            query(function(response) {
                    $scope.transactions = response;
                },
                function(response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
        };
    }])
    .controller('BudgetsController', ['$scope', 'menuFactory', function($scope, menuFactory) {}])
    .controller('AssetsController', ['$scope', 'menuFactory', function($scope, menuFactory) {}]);
