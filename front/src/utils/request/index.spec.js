import 'whatwg-fetch';

import { requestStart, responseReceive } from 'actions/request';

import { request, checkStatus, parseJSON } from './';

jest.mock('actions/request');
requestStart.mockImplementation(() => ({
  type: 'MOCK',
}));

responseReceive.mockImplementation(() => ({
  type: 'MOCK',
}));

describe('#utils/request', () => {
  describe('#parseJSON', () => {
    let response;

    beforeEach(() => {
      response = {
        text: jest.fn(() => 'text'),
        json: jest.fn(() => 'json'),
      };
    });

    it('should return result of json function', () => {
      expect(parseJSON(response)).toBe('json');
    });

    it('should return result of text function if status === 204', () => {
      response.status = 204;
      expect(parseJSON(response)).toBe('text');
    });
  });

  describe('#checkStatus', () => {
    it('should dispath responseReceive action and return response', () => {
      const response = {
        status: 200,
      };
      const result = checkStatus(response);
      expect(responseReceive).toBeCalled();
      expect(result).toEqual(response);
    });

    it('should dispath responseReceive action throwError with statusText of response if status <200 or >=300', () => {
      const response = {
        status: 500,
        statusText: 'some error',
      };
      expect(responseReceive).toBeCalled();
      expect(() => checkStatus(response)).toThrowError(response.statusText);
    });
  });

  describe('#request', () => {
    it('should dispath responseReceive action and return response', () => {


    });
  });
});
