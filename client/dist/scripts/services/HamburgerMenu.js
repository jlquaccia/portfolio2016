(function() {
  function HamburgerMenu() {
    var HamburgerMenu = {};

    HamburgerMenu.toggleMenu = function() {
      $('#nav-icon3').toggleClass('open');
      $('body').toggleClass('primary-navigation-opened');
      
      if (!$('.primary-navigation__inner').hasClass('fadeIn')) {
          $('.primary-navigation__inner').addClass('fadeIn');
      } else {
          $('.primary-navigation__inner').removeClass('fadeIn');
      }
    };

    return HamburgerMenu;
  }

  angular
    .module('jq2016Revamp')
    .factory('HamburgerMenu', [HamburgerMenu]);
})();