const path = require('path');

/**
 * Add redux tag suppor to jsdoc
 */
const redux = require('./reduxParam');
const reduxActionType = require('./reduxActionTypeParam');
const reduxActionCreator = require('./reduxActionCreatorParam');
const reduxActionScope = require('./reduxActionScopeParam');
const reduxReducer = require('./reduxReducerParam');

exports.defineTags = function(dictionary) {
    redux.defineTag(dictionary);
    reduxActionType.defineTag(dictionary);
    reduxActionCreator.defineTag(dictionary);
    reduxReducer.defineTag(dictionary);
    reduxActionScope.defineTag(dictionary);
};

exports.handlers = {
  newDoclet: function(e) {
    redux.newDocletHandler(e);
  },
  parseBegin: function(e) {
      const files = e.sourcefiles = e.sourcefiles || [];

      files.unshift(path.resolve(__dirname, 'typedefs.js'));
  }
}
