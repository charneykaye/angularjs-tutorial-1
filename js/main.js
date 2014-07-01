/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
angular.module('tutorialWebApp', [
  'ngRoute'
]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      // Pages
      .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
      .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
      .when("/home", {templateUrl: "partials/home.html", controller: "PageCtrl"})
      .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
      .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
      // Blog
      .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogPageCtrl"})
      .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogPageCtrl"})
      // Contact
      .when("/contact", {templateUrl: "partials/contact.html", controller: "ContactPageCtrl"})
      // else 404
      .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
  }]);

/**
 * Controls the Navigation
 */
angular.module('tutorialWebApp')
  .controller('NavCtrl', function (/* $scope, $location, $http */) {
    console.log("Navigation Controller reporting for duty.");
  });

/**
 * Controls the Blog Page
 */
angular.module('tutorialWebApp')
  .controller('BlogPageCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Page Controller reporting for duty.");
  });

/**
 * Controls the Contact Page
 */
angular.module('tutorialWebApp')
  .controller('ContactPageCtrl', function (/* $scope, $location, $http */) {
    console.log("Contact Page Controller reporting for duty.");
  });

/**
 * Controls all other Pages
 */
angular.module('tutorialWebApp')
  .controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
    $('.carousel').carousel({
      interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
      selector: "a[data-toggle=tooltip]"
    })
  });