
import { fromJS } from 'immutable';
import formBuilderReducer from '../reducer';

describe('formBuilderReducer', () => {
  it('returns the initial state', () => {
    expect(formBuilderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
