angular.module('angular')
    .controller('IndexController', ['$scope', 'indexFactory', function ($scope, menuFactory) {
        $scope.user = {
            name: "",
            email: ""
        };
    }])
    .controller('TransactionsController', ['$scope', 'Transactions', function ($scope, Transactions) {
        $scope.transactions = [];
        $scope.transaction = {
            // user: "",
            // timestamp: "",
            description: "",
            amount: "", // TODO:type safety.
            // receipt: "",
            // category: "", // TODO:use some type of case safety.
            // account: "" // TODO: with suggester for account.
        };

        $scope.createTransaction = function () {
            Transactions.createTransaction($scope.transaction).then(response => {
                alert("Successfully created a new transaction!");
                $scope.transaction = {};
            });
        };

        $scope.findTransaction = () => {
            Transactions.findTransaction($scope.searchId).then(transaction => {
                console.log("The transaction is ", transaction);
            });
        }

        $scope.readTransactions = () => {
            $scope.transactions = [];
            Transactions.readTransactions().then((transactions) => {
                for (transaction of transactions) {
                    $scope.transactions.push(transaction);
                }
            });
        };

        $scope.updateTransaction = () => {
            Transactions.updateTransaction($scope.uTransaction).then(response => {
                alert("Updated the transaction!");
                $scope.uTransaction = {};
            });
        };

        $scope.deleteTransaction = () => {
            Transactions.deleteTransaction($scope.deleteId).then(response => {
                alert("Deleted the transaction!");
            });
        };

    }])
    .controller('BudgetsController', ['$scope', 'menuFactory', function ($scope, menuFactory) { }])
    .controller('AssetsController', ['$scope', 'menuFactory', function ($scope, menuFactory) { }]);
