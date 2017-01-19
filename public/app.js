(function () {
    'use strict';

    angular
        .module('photoGallery', ['ngRoute', 'ui.bootstrap.tpls', 'bootstrapLightbox'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/gallery', {
                    templateUrl: 'view/gallery.view.html',
                    controller: 'GalleryCtrl',
                    controllerAs: 'Gctrl'
                })
                .otherwise({redirectTo: '/gallery'});
        }])
        .config(['$qProvider', function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }]);
})();