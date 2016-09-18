var shoppingApp= angular.module("shoppingApp",['ngRoute']);
shoppingApp.config(['$routeProvider',function ($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl : '../partial/main.html'
                
            }).
                when('/addCustomer',{
                    templateUrl : '../partial/customer.html', 
                    controller : 'AddCustomerController'
                }).
//                }). 
//                when('/addAddress',{
//                    templateUrl : 'partial/addAddress.html' ,
//                    controller : 'addAddressController'
//                }). 
                otherwise({redirectTo: '/'});
                
        
        
}]);
