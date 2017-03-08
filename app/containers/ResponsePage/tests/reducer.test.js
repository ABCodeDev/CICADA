
import { fromJS } from 'immutable';
import responsePageReducer from '../reducer';

describe('responsePageReducer', () => {
  it('returns the initial state', () => {
    expect(responsePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
