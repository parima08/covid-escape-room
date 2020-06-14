import createReducer from './create-reducer';

interface S {
  step: string;
  lastSolvedClue: number;
}

const initialState = {
  step: 'introduction',
  lastSolvedClue: 1,
};

const handlers = {
  SET_STEP: (state, {step}) => ({
    ...state,
    step,
  }),
  SET_LAST_SOLVED_CLUE: (state, {lastSolvedClue} ) => ({
    ...state,
    lastSolvedClue
  })
};

export default createReducer(initialState, handlers);
