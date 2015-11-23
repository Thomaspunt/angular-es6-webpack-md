let homeModule = angular.module('app.home', []);
let template = require('./home.html');

import HomeController from './home.controller';
import HomeConfig from './home.config';

homeModule.controller('HomeController', HomeController);
homeModule.config(HomeConfig);

export default homeModule = homeModule.name;
