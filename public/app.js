(function(){
    var app = angular.module('photoGal',['ngRoute','ngResource']);

    app.config(['$routeProvider',rProvide]);

    function rProvide($routeProvider){
        $routeProvider
            .when('/Gallery',{
                templateUrl: 'view/gallery.view.html',
                controller: 'GalleryController',
                controllerAs: 'gCtrl'
            })
            .otherwise({redirectTo:'/Gallery'});
    }
})();