let template = require('./home.html');

class HomeConfig {

  static route ($stateProvider) {
    'ngInject';
    $stateProvider.state('home', {
      url: '/',
      views: {
        'main@': {
          templateUrl: template,
          controller: 'HomeController as home'
        }
      }
    });
  }
}

export default HomeConfig.route;
