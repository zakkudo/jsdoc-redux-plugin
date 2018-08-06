<a name="module_jsdoc-redux-plugin"></a>

## jsdoc-redux-plugin
Make working with [Redux](https://redux.js.org) types in [jsdoc](http://usejsdoc.org/) enjoyable.

Why use this?

- Generates standard types for jsdoc so you can set `allowUnknownTags`
  to `false`
- Includes links to all of the documentation for the different types on the
  official site
- Includes short official descriptions from the official site inline

Install with:

```console
yarn add --dev @zakkudo/jsdoc-redux-plugin
```

Add to your jsdoc config with:

```js
    "plugins": [
        "@zakkudo/jsdoc-redux-plugin"
    ],
```

Added tags include

- `@redux`
- `@reduxActionCreator`
- `@reduxActionScope`
- `@reduxActionType`
- `@reduxReducer`

Includes typedefs for

- `Redux`
- `Redux.Action`
- `Redux.ActionType`
- `Redux.ActionCreator`

**Example** *(Tag your reducers)*  
```js
  /**
   * Application reducer.
   * @redux
   * @reduxReducer
   * @param {Redux.Store} state - The current redux state
   * @param {Redux.Action} action - A redux action
   * @return {Redux.Store} The updated redux state
   */
  export default function reducer(state = defaultState, action) {}
```
**Example** *(Tag your actions)*  
```js
  /**
   * Possible global actions for the application.
   * @redux
   * @reduxActionScope APPLICATION
   * @module Application/actions
   */
   export default {
     /**
      * @redux
      * @reduxActionType SET_ROUTER_MATCH
      * @type {Redux.ActionCreator}
      * @param {Immutable.Map} match - the current route match information
      * @return {Redux.Action} The generated action
     */
    setRouterMatch(match) {
           return {
               type: '@APPLICATION/SET_ROUTER_MATCH',
               match,
           };
       },
    /*
     * Possible global actions for the application.
     * @type {Redux.ActionType}
     */
    SET_ROUTER_MATCH: '@APPLICATION/SET_ROUTER_MATCH'
  }
```
