import createReducer from './create-reducer';

interface S {
  assets: any[];
}

const initialState = {
  assets: [],
};

const handlers = {
  
};

export default createReducer(initialState, handlers);
