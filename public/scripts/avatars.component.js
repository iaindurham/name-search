(function(angular) {

  function avatarsController() {
    console.log('In the avatars controller');

    this.avatars = [
      {
        name: 'eric',
        image: 'images/avatars/eric.png'
      },
      {
        name: 'hayley',
        image: 'images/avatars/hayley.png'
      },
      {
        name: 'lucy',
        image: 'images/avatars/lucy.png'
      },
      {
        name: 'rory',
        image: 'images/avatars/rory.png'
      },
      {
        name: 'sean',
        image: 'images/avatars/sean.png'
      },
      {
        name: 'yaw',
        image: 'images/avatars/yaw.png'
      }
    ]
  }

  angular.module('app')
    .component('avatars', {
      templateUrl: 'templates/avatars.html',
      controller: avatarsController
    });
})(window.angular);
