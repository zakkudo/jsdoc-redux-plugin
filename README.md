<a name="module_jsdoc-redux-plugin"></a>

## jsdoc-redux-plugin
Make working with [Redux](https://redux.js.org) types in [jsdoc](http://usejsdoc.org/) enjoyable.

Why use this?

- Generates standard types for jsdoc so you can set `allowUnknownTags`
  to `false`
- Includes links to all of the documentation for the different types on the
  official site
- Includes short official descriptions from the official site inline
- Prefills attribues for reducers and action creators to reduce repetitive
  typing using custom tags
- Attributes are still overridable even if prefilled

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
- `@reduxActionScope`
- `@reduxActionCreator`
- `@reduxReducer` * NOTE - You must use previousState, action as the function argument names

Includes typedefs for

- `Redux`
- `Redux.Action`
- `Redux.ActionType`
- `Redux.ActionCreator`
- `Redux.Reducer`

**Example** *(Tag your reducers)*  
```js
  /**
   * Application reducer.
   * @redux
   * @reduxReducer
   */
  export default function reducer(previousState = defaultState, action) {}
```
**Example** *(Override one of the default descriptions)*  
```js
  /**
   * Application reducer.
   * @redux
   * @reduxReducer
   * @param {Redux.Store} previousState - We don't want the default description for this argument
   */
  export default function reducer(previousState = defaultState, action) {}
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
      * Sets the router match information to the store.
      * @redux
      * @reduxActionCreator SET_ROUTER_MATCH
      * @param {Immutable.Map} match - the current route match information
     */
    setRouterMatch(match) {
           return {
               type: '@APPLICATION/SET_ROUTER_MATCH',
               match,
           };
       },
    /**
     * @type {Redux.ActionType}
     */
    SET_ROUTER_MATCH: '@APPLICATION/SET_ROUTER_MATCH'
  }
```
