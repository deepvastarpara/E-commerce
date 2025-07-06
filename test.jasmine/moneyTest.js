import {formentCurrency} from '../scripts/utils/money.js';

describe('test suite : formentCurrency' , () => {
    it('converts cents into dollars',() => {
        expect(formentCurrency(2095)).toEqual('20.95');
    });

     it('work with zero',() => {
        expect(formentCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cent',() => {
        expect(formentCurrency(2000.5)).toEqual('20.01');
    });
});
