/**
 * Created by abpatel on 1/17/2017.
 */
(function () {
    'use strict';
    angular
        .module('photoGallery')
        .controller('GalleryCtrl', ['photoFact','$http','Lightbox','$sce', function (photoFact,$http, Lightbox,$sce) {
            var vm = this;
            vm.images = [];
            vm.imgArray = [];
            vm.url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESSTOKEN_OF_YOUR_ACCOUNT' ;
            photoFact.fetchPopular(vm.url)
                    .then(function (response) {
                        vm.images = response.data.data;
                        console.log(vm.images);
                        angular.forEach(vm.images, function (val) {
                            vm.imgArray.push(val.images.standard_resolution);
                        });
                        vm.openLBModal = function (index) {
                            Lightbox.openModal(vm.imgArray, index);
                        }
                },(function (error) {
                    console.log(error);
                }));
        }]);

})();
