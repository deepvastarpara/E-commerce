import {formentCurrency} from '../scripts/utils/money.js';

console.log('test suite : formentCurrency');

console.log('converts cents into dollars');

if (formentCurrency(2095)==='20.95'){
    console.log('passed'); 
}else{
    console.log('failed'); 
}