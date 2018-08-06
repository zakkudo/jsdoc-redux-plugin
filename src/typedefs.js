/**
 * <p>Redux is a predictable state container for JavaScript apps.</p>
 *
 * <p>It helps you write applications that behave consistently, run in
 * different environments (client, server, and native), and are easy to test.
 * On top of that, it provides a great developer experience, such as live code
 * editing combined with a time traveling debugger.</p>
 *
 * @typedef Redux
 * @namespace Redux
 * @see {@link https://redux.js.org/}
 */

/**
 * Actions are payloads of information that send data from your application
 * to your store. They are the only source of information for the store. You
 * send them to the store using <code>store.dispatch()</code>.
 * @memberof Redux
 * @typedef Redux.Action
 * @type {Object}
 * @property {String} type - Indicator for the handling of the action
 * @see {@link https://redux.js.org/basics/actions}
 */

/**
 * Unique key representing the redux action.
 * @memberof Redux
 * @typedef Redux.ActionType
 * @type {String}
 * @see {@link https://redux.js.org/basics/actions}
 */

/**
 * Action creators are exactly that—functions that create actions. It's easy
 * to conflate the terms “action” and “action creator”, so do your best to use
 * the proper term.
 *
 * @example
 * function addTodo(text) {
 *   return {
 *     type: ADD_TODO,
 *     text
 *   }
 * }
 * @memberof Redux
 * @typedef Redux.ActionCreator
 * @type {Function}
 * @see {@link https://redux.js.org/basics/actions#action-creators}
 */

/**
 * <p>
 *     The Redux Store is an object that brings the actions together. The store
 *     has the following responsibilities:
 * </p>
 *
 * <ul>
 *     <li>Holds application state</li>
 *     <li>Allows access to state via <code>getState()</code></li>
 *     <li>Allows state to be updated via <code>dispatch(action)</code></li>
 *     <li>Registers listeners via <code>subscribe(listener)</code></li>
 * </ul>
 * @memberof Redux
 * @typedef Redux.Store
 * @type {Object}
 * @property {String} type - Indicator for the handling of the action
 * @see {@link https://redux.js.org/basics/store}
 */
