(function(){
    var app = angular.module('photoGal',['ngRoute']);

    app.config(['$routeProvider',rProvide]);

    function rProvide($routeProvider){
        $routeProvider
            .when('/Gallery',{
                templateUrl: 'views.gallery.view.html',
                controller: 'GalleryController',
                controllerAs: 'gCtrl'
            })
            .otherwise({redirectTo:'/Gallery'});
    }
})();