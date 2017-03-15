
import { fromJS } from 'immutable';
import secretFormReducer from '../reducer';

describe('secretFormReducer', () => {
  it('returns the initial state', () => {
    expect(secretFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
