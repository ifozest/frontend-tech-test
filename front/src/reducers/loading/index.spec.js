import { REQUEST, RESPONSE } from 'utils/constants';
import loading from './';

describe('#reducers/loading', () => {
  it('should return initial state', () => {
    expect(loading(undefined, {})).toEqual(false);
  });

  it('should return true for REQUEST action', () => {
    expect(loading(undefined, {
      type: REQUEST,
    })).toEqual(true);
  });

  it('should return false for RESPONSE action', () => {
    expect(loading(undefined, {
      type: RESPONSE,
    })).toEqual(false);
  });
});
