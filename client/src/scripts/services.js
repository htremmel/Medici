angular.module('angular')
    .constant("baseURL", "http://localhost:8000/api/transactions/")
    .service('Transactions', ['$http', 'baseURL', function ($http, baseURL) {
        this.readTransactions = () => {
            return $http.get(baseURL).then((response, err) => {
                return response.data;
            });
        };

        this.findTransaction = (id) => {
            return $http.get(baseURL + id).then((response, err) => {
                return response.data;
            });
        }

        this.createTransaction = (transaction) => {
            return $http.post(baseURL, JSON.stringify(transaction)).then((response, err) => {
                return response.data;
            });
        };

        this.updateTransaction = (transaction) => {
            return $http.put(baseURL + transaction.id, JSON.stringify(transaction)).then((response, err) => {
                return response.data;
            });
        };

        this.deleteTransaction = (id) => {
            return $http.delete(baseURL + id).then((response, err) => {
                return response.data;
            });
        };
    }]);
