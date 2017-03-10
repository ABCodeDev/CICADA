
import { fromJS } from 'immutable';
import editResponsePageReducer from '../reducer';

describe('editResponsePageReducer', () => {
  it('returns the initial state', () => {
    expect(editResponsePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
