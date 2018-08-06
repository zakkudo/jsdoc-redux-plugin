const path = require('path');

const redux = require('./reduxParam');
const reduxActionScope = require('./reduxActionScopeParam');
const reduxReducer = require('./reduxReducerParam');
const reduxActionCreator = require('./reduxActionCreatorParam');


/**
 * Make working with [Redux]{@link https://redux.js.org} types in [jsdoc]{@link http://usejsdoc.org/} enjoyable.
 *
 * Why use this?
 *
 * - Generates standard types for jsdoc so you can set `allowUnknownTags`
 *   to `false`
 * - Includes links to all of the documentation for the different types on the
 *   official site
 * - Includes short official descriptions from the official site inline
 * - Prefills attribues for reducers and action creators to reduce repetitive
 *   typing using custom tags
 * - Attributes are still overridable even if prefilled
 *
 * Install with:
 *
 * ```console
 * yarn add --dev @zakkudo/jsdoc-redux-plugin
 * ```
 *
 * Add to your jsdoc config with:
 *
 * ```js
 *     "plugins": [
 *         "@zakkudo/jsdoc-redux-plugin"
 *     ],
 * ```
 *
 * Added tags include
 *
 * - `@redux`
 * - `@reduxActionScope`
 * - `@reduxActionCreator`
 * - `@reduxReducer` * NOTE - You must use prevousState, action as the function argument names
 *
 * Includes typedefs for
 *
 * - `Redux`
 * - `Redux.Action`
 * - `Redux.ActionType`
 * - `Redux.ActionCreator`
 * - `Redux.Reducer`
 *
 * @example <caption>Tag your reducers</caption>
 *   /**
 *    * Application reducer.
 *    * @redux
 *    * @reduxReducer
 *    *\/
 *   export default function reducer(previousState = defaultState, action) {}
 *
 * @example <caption>Override one of the default descriptions</caption>
 *   /**
 *    * Application reducer.
 *    * @redux
 *    * @reduxReducer
 *    * @param {Redux.Store} previousState - We don't want the default description for this argument
 *    *\/
 *   export default function reducer(previousState = defaultState, action) {}
 *
 *
 * @example <caption>Tag your actions</caption>
 *   /**
 *    * Possible global actions for the application.
 *    * &at;redux
 *    * &at;reduxActionScope APPLICATION
 *    * &at;module Application/actions
 *    *\/
 *    export default {
 *      /**
 *       * Sets the router match information to the store.
 *       * &at;redux
 *       * &at;reduxActionCreator SET_ROUTER_MATCH
 *       * &at;param {Immutable.Map} match - the current route match information
 *      *\/
 *     setRouterMatch(match) {
 *            return {
 *                type: '@APPLICATION/SET_ROUTER_MATCH',
 *                match,
 *            };
 *        },
 *     /**
 *      * &at;type {Redux.ActionType}
 *      *\/
 *     SET_ROUTER_MATCH: '@APPLICATION/SET_ROUTER_MATCH'
 *   }
 * @module jsdoc-redux-plugin
 */
exports.handlers = {
  newDoclet: function(e) {
    redux.newDocletHandler(e);
  },
  parseBegin: function(e) {
      const files = e.sourcefiles = e.sourcefiles || [];

      files.unshift(path.resolve(__dirname, 'typedefs.js'));
  }
}

exports.defineTags = function(dictionary) {
    redux.defineTag(dictionary);
    reduxActionScope.defineTag(dictionary);
    reduxActionCreator.defineTag(dictionary);
    reduxReducer.defineTag(dictionary);
};
