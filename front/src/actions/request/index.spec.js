import { REQUEST, RESPONSE } from 'utils/constants';

import { requestStart, responseReceive } from './';

describe('#actions/request', () => {
  describe('#requestStart', () => {
    it('should return action with type REQUEST', () => {
      expect(requestStart()).toEqual({
        type: REQUEST,
      });
    });
  });

  describe('#responseReceive', () => {
    it('should return action with type RESPONSE', () => {
      expect(responseReceive()).toEqual({
        type: RESPONSE,
      });
    });
  });
});
