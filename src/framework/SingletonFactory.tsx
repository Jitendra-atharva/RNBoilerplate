import RestClientBlock from './Blocks/RestApiClientBlock';
import SessionManagerBlock from './Blocks/SessionManagerBlock';

var SingletonFactory = (function() {
  let restBlockInstance: any;
  let sessionManagerInstance: any;

  return {
    getRestBlockInstance: function() {
      if (!restBlockInstance) {
        restBlockInstance = RestClientBlock.getInstance();
        // Hide the constructor so the returned object can't be new'd...
        restBlockInstance.constructor = null;
      }
      return restBlockInstance;
    },
    getSessionBlockInstance: function() {
      if (!sessionManagerInstance) {
        sessionManagerInstance = SessionManagerBlock.getInstance();
        // Hide the constructor so the returned object can't be new'd...
        sessionManagerInstance.constructor = null;
      }
      return sessionManagerInstance;
    },
  };
})();

export default SingletonFactory;
