import 'angular';

import angularUIRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import angularAnimate from 'angular-animate';

import 'angular-material/angular-material.css';

import home from './home/index.js';

let app = angular.module('app', [
  angularMaterial,
  angularAnimate,
  angularUIRouter,
  home
]);

app.run(($log) => {
  $log.info('demo running', angular.version.full);
});

export default app;
