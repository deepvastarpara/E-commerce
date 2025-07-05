// use to forment currency

export function formentCurrency(pricrCents){
    return (pricrCents / 100).toFixed(2);
}

// this s use for default export
export default formentCurrency;