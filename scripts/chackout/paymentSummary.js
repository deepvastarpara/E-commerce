import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import{ formentCurrency } from "../utils/money.js"

export function renderPaymentSummary(){

    let productPriceCents = 0;
    let shippingPriceCentes = 0;

    cart.forEach((cartItem) => {

        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCentes += deliveryOption.priceCents;
    });

    const totalBeforTexCents = productPriceCents + shippingPriceCentes;

    const texCents = totalBeforTexCents * 0.1;

    const totalCents = totalBeforTexCents + texCents;

    const paymentSummaryHTML = `
        <div class="payment-summary-title">
            Order Summary
            </div>

            <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formentCurrency(productPriceCents)}</div>
            </div>

            <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formentCurrency(shippingPriceCentes)}</div>
            </div>

            <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formentCurrency(totalBeforTexCents)}</div>
            </div>

            <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formentCurrency(texCents)}</div>
            </div>

            <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formentCurrency(totalCents)}</div>
            </div>

            <button class="place-order-button button-primary">
            Place your order
            </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}
