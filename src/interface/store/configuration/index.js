/* --- External Dependencies ---*/
import { createStore as reduxCreateStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

/* --- Redux Store ---*/
import middlewares from "../departments/middlewares";
import rootReducer from "../departments/reducer";
import rootSagas from "../departments/sagas";

/* --- Development Mode ---*/
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
import Reactotron from "reactotron-react-native";

/**
 * Development Mode
 * @desc Setup debugging tools for development.
 * https://github.com/infinitered/reactotron
 */
if (global.__DEV__) {
  let createStore = reduxCreateStore;
  let sagaMiddlewarePlugins;
  Reactotron
    .configure({ name: "Unity" })
    .useReactNative()
    .use(sagaPlugin())
    .use(reactotronRedux())
    .connect()
    .clear()
  createStore = Reactotron.createStore;
}

/**
 * Configure Store
 * @desc Initialize the React Native Application state management store.
 * @param {object} initialState
 *
 * Currently no initialState is passed into the Redux Store. However, in the
 * future this is likely to change. The Redux store will be hydrated with
 * user specification information/settings on application initialization.
 */
 const configureStore = (initialState) => {
  /* --- Variable Initialization --- */
  let rootEnhancer;
  const middleware = [];
  const enhancers = [];
  const createStore = reduxCreateStore;
  const loadedState = initialState || {}; // Hydrate state from parent or pass an empty object
  const sagaMiddleware = createSagaMiddleware(); // Create the Redux Saga Middleware

  /* --- Middleware ---*/
  middleware.push(...middlewares);
  middleware.push(sagaMiddleware);

  /* --- Compose Enhancers ---*/
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

  /* --- Apply Middleware & Compose Enhancers ---*/
  enhancers.push(applyMiddleware(...middleware));
  rootEnhancer = composeEnhancers(...enhancers);

  /* --- Initial State ---*/
  const store = createStore(rootReducer, loadedState, rootEnhancer);
  sagaMiddleware.run(rootSagas); // Initialize Saga Middleware after creating store.

  return store;
};

export default { configureStore };
