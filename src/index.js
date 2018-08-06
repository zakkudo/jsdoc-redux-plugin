const path = require('path');

const redux = require('./reduxParam');
const reduxActionType = require('./reduxActionTypeParam');
const reduxActionCreator = require('./reduxActionCreatorParam');
const reduxActionScope = require('./reduxActionScopeParam');
const reduxReducer = require('./reduxReducerParam');


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
 * - `@reduxActionCreator`
 * - `@reduxActionScope`
 * - `@reduxActionType`
 * - `@reduxReducer`
 *
 * Includes typedefs for
 *
 * - `Redux`
 * - `Redux.Action`
 * - `Redux.ActionType`
 * - `Redux.ActionCreator`
 *
 * @example <caption>Tag your reducers</caption>
 *   /**
 *    * Application reducer.
 *    * &at;redux
 *    * &at;reduxReducer
 *    * &at;param {Redux.Store} state - The current redux state
 *    * &at;param {Redux.Action} action - A redux action
 *    * &at;return {Redux.Store} The updated redux state
 *    *\/
 *   export default function reducer(state = defaultState, action) {}
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
 *       * &at;redux
 *       * &at;reduxActionType SET_ROUTER_MATCH
 *       * &at;type {Redux.ActionCreator}
 *       * &at;param {Immutable.Map} match - the current route match information
 *       * &at;return {Redux.Action} The generated action
 *      *\/
 *     setRouterMatch(match) {
 *            return {
 *                type: '@APPLICATION/SET_ROUTER_MATCH',
 *                match,
 *            };
 *        },
 *     /*
 *      * Possible global actions for the application.
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
    reduxActionType.defineTag(dictionary);
    reduxActionCreator.defineTag(dictionary);
    reduxReducer.defineTag(dictionary);
    reduxActionScope.defineTag(dictionary);
};
