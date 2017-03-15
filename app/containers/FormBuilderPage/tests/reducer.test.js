
import { fromJS } from 'immutable';
import formBuilderPageReducer from '../reducer';

describe('formBuilderPageReducer', () => {
  it('returns the initial state', () => {
    expect(formBuilderPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
