import 'angular';

import angularUIRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import angularAnimate from 'angular-animate';

import 'angular-material/angular-material.css';

import home from './home/index';
import profile from './profile/index';

let app = angular.module('app', [
  angularMaterial,
  angularAnimate,
  angularUIRouter,
  home,
  profile
]);

app.run(($log) => {
  $log.info('demo running angular version: ', angular.version.full);
});

app.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
});

export default app;
