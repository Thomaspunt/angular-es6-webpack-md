let profileModule = angular.module('app.profile', []);

import ProfileController from './profile.controller';
import ProfileConfig from './profile.config';

profileModule.controller('ProfileController', ProfileController);
profileModule.config(ProfileConfig);

export default profileModule = profileModule.name;
