class HomeController {
  constructor() {
    'ngInject';
    
    var self = this;
    
    function init() {
      self.items = ['home', 'bla'];
      console.info('HomeController init');
    }

    init();
  }
};


export default HomeController;
