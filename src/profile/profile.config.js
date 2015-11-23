let template = require('./profile.html');

class ProfileConfig {
  static route ($stateProvider) {
    'ngInject';

    $stateProvider.state('profile', {
      url: '/profile',
      views: {
        'main@': {
          templateUrl: template,
          controller: 'ProfileController as profile'
        }
      }
    });
  }
}

export default ProfileConfig.route;
