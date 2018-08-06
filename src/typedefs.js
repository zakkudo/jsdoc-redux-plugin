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
 * Reducers specify how the application's state changes in response to
 * actions sent to the store. Remember that actions only describe what
 * happened, but don't describe how the application's state changes.
 * @memberof Redux
 * @callback Redux.Reducer
 * @param {Redux.Store} previousState - The current state
 * @param {Redux.Action} action - An action to execute to update the store
 * @return {Redux.Store} The next state
 * @see {@link https://redux.js.org/basics/reducers}
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
 * @callback Redux.ActionCreator
 * @return {Redux.Action} The generated Redux action
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
