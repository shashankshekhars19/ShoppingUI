var shoppingApp= angular.module("shoppingApp",['ngRoute']);
shoppingApp.config(function ($routeProvider){

        $routeProvider.
            when('/', {
                templateUrl : 'UIApp/partial/main.html'
                
            }).
                when('/addCustomer',{
                    templateUrl : 'UIApp/partial/customer.html', 
                    controller : 'AddCustomerController'
                }).
//                }). 
//                when('/addAddress',{
//                    templateUrl : 'partial/addAddress.html' ,
//                    controller : 'addAddressController'
//                }). 
                otherwise({redirectTo: '/'});
                
        
        
});
