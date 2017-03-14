
import { fromJS } from 'immutable';
import trialPageReducer from '../reducer';

describe('trialPageReducer', () => {
  it('returns the initial state', () => {
    expect(trialPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
