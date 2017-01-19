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
            vm.url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1520124980.1677ed0.a669922836484908be6ece6091914a0f' ;
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
