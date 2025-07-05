// use to forment currency

export function formentCurrency(pricrCents){
    return (Math.round(pricrCents) / 100).toFixed(2);
}

// this s use for default export
export default formentCurrency;