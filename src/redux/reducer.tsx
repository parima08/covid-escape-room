import createReducer from './create-reducer';

interface S {
  step: string;
}

const initialState = {
  step: 'introduction',
};

const handlers = {
  SET_STEP: (state, {step}) => ({
    ...state,
    step,
  })
};

export default createReducer(initialState, handlers);
