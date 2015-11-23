let profileModule = angular.module('app.profile', []);
let template = require('./profile.html');

import ProfileController from './profile.controller';

profileModule.controller('ProfileController', ProfileController);

profileModule.config(($stateProvider) => {
   $stateProvider
    .state('profile', {
      url: '/profile',
      views: {
        'main@': {
          templateUrl: template,
          controller: ProfileController,
          controllerAs: 'profile'
        }
      }
    });
});

export default profileModule = profileModule.name;
