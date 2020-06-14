import store from './store.js';

export const setStep = (step) => {
  store.dispatch({type: 'SET_STEP', payload: {step}});
}

export const setLastSolvedClue = (lastSolvedClue) => {
  store.dispatch({type: 'SET_LAST_SOLVED_CLUE', payload: {lastSolvedClue}})
}