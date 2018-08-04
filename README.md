# jsdoc-redux-plugin

Adds tags to help document redux functionality without having to copy-paste text around and allowing disallowing undefined tags.

Install with:

```sh
yarn add --dev @zakkudo/jsdoc-redux-plugin
```

Add to your jsdoc config with:

```js
    "plugins": [
        "@zakkudo/jsdoc-redux-plugin"
    ],
```

Tag your reducers this way:

```js
  /**
   * Application reducer.
   * @redux
   * @reduxReducer
   * @param {Object} state - The current redux state
   * @param {Redux.Action} action - A redux action
   * @return {Object} The updated redux state
   */
  export default function reducer(state = defaultState, action) {]
```

Document your actions like this:

```js
/**
 * Possible global actions for the application.
 * @redux
 * @reduxActionScope APPLICATION
 * @module Application/actions
 */
export default new Actions({
    /**
     * The payload will be on the <code>request</code> property.
     * @redux
     * @reduxActionCreator
     * @reduxActionType REQUEST_PAGE_RESOLVE
     * @param {Immutable.Map} match - The current route match information
     * @return {Redux.Action} The generated action
    */
    setRouterMatch(match) {
        return {
            type: 'SET_ROUTER_MATCH',
            match,
        };
    }
}
```

Added tags include

- `@redux`
- `@reduxActionCreator`
- `@reduxActionScope`
- `@reduxActionType`
- `@reduxReducer`


