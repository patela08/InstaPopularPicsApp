/**
 * Created by abpatel on 1/17/2017.
 */
(function () {
   'use strict'
   angular.module('photoGal')
       .controller('GalleryController',['$sce','$http',GalleryController]);
   function galleryFun($sce,$http){
      var vm = this;
      vm.images = [];
      vm.url = $sce.trustAsResourceUrl("https://api.instagram.com/v1/users/self/media/recent?access_token=ACCESS_TOKEN&count=35")
      console.log(vm);
      // photoFact.fetchPopular(function(data){
      //    console.log(data);
      //    vm.images = data;
      // })
       $http.jsonp(vm.url)
           .then(function (response) {

               vm.images=response.data.data;
               console.log(response);
               angular.forEach(vm.images,function (value) {
                   imgArray.push(value.images.standard_resolution);
               });
               // gc.openLightboxModal = function (index) {
               //     Lightbox.openModal(imgArray,index);
               // }

           },(function (error) {
               console.log(error);
           }));
   }

})()
