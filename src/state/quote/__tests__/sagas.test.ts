import {runSaga} from 'redux-saga';
import {takeLatest} from 'redux-saga/effects';
import {watchGetQuote, getQuoteSaga} from '../sagas';
import {GET_QUOTE} from '../constants';
import {updateQuote} from '../actions';
import * as api from '../api';

describe('watchGetQuote', () => {
  const genObject = watchGetQuote();

  it('should wait for every GET_QUOTE action and call getQuoteSaga', () => {
    expect(genObject.next().value).toEqual(takeLatest(GET_QUOTE, getQuoteSaga));
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

const getMockAction = (payload: any) => ({
  payload,
  type: 'MOCK_ACTION',
});

const mockOnSuccess = jest.fn();
const mockOnError = jest.fn();

describe('getQuoteSaga', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call api and dispatch success action', async () => {
    // @ts-ignore
    const requestQuote = jest.spyOn(api, 'getQuote').mockImplementation(() =>
      Promise.resolve({
        json: () => ({
          contents: {quotes: [{quote: 'hello'}]},
        }),
      }),
    );
    const dispatched: Array<string> = [];
    await runSaga(
      {
        dispatch: (action: any) => dispatched.push(action),
      },
      getQuoteSaga,
      getMockAction({onSuccess: mockOnSuccess, onError: mockOnError}),
    );

    expect(requestQuote).toHaveBeenCalledTimes(1);
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockOnError).toHaveBeenCalledTimes(0);
    expect(dispatched).toEqual([updateQuote('hello')]);
    requestQuote.mockClear();
  });

  it('should call api and call error callback', async () => {
    // @ts-ignore
    const requestQuote = jest.spyOn(api, 'getQuote').mockImplementation(() =>
      Promise.resolve({
        json: () => ({}),
      }),
    );
    const dispatched: Array<string> = [];
    await runSaga(
      {
        dispatch: (action: any) => dispatched.push(action),
      },
      getQuoteSaga,
      getMockAction({onSuccess: mockOnSuccess, onError: mockOnError}),
    );

    expect(requestQuote).toHaveBeenCalledTimes(1);
    expect(mockOnSuccess).toHaveBeenCalledTimes(0);
    expect(mockOnError).toHaveBeenCalledTimes(1);
    requestQuote.mockClear();
  });
});
