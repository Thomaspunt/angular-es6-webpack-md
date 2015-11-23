class ProfileController {
  constructor() {
    'ngInject';

    var self = this;
    
    function init() {
      self.tests = [1,2,3,4];
      console.info('ProfileController init');
    }

    init();
  }
};


export default ProfileController;
