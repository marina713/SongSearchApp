import {getQuote} from '../selectors';

const mockState = {
  quote: {
    quote: 'Mock quote',
  },
};

describe('Quote Selectors', () => {
  it('should return correct value of getQuote', () => {
    const selected = getQuote.resultFunc(mockState.quote);
    expect(selected).toEqual(mockState.quote.quote);
  });
});
