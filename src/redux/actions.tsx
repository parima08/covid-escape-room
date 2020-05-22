import store from './store.js';

export const setStep = (step) => {
  store.dispatch({type: 'SET_STEP', payload: {step}});
}