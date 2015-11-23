class HomeConfig {

  static route ($stateProvider) {
    'ngInject';
    $stateProvider.state('home', {
      url: '/',
      views: {
        'main@': {
          templateUrl: require('./home.html'),
          controller: 'HomeController as home'
        }
      }
    });
  }
}

export default HomeConfig.route;
