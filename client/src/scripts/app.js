angular.module('angular', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                    },
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'IndexController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                    }
                }

            })

            .state('app.transactions', {
                url: 'transactions',
                views: {
                    'content@': {
                        templateUrl: 'views/transactions.html',
                        controller: 'TransactionsController'
                    }
                }
            })

            .state('app.budgets', {
                url: 'budgets',
                views: {
                    'content@': {
                        templateUrl: 'views/budgets.html',
                        controller: 'BudgetsController'
                    }
                }
            })

            .state('app.assets', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl: 'views/assets.html',
                        controller: 'AssetsController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    });
