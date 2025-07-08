import { renderOrederSummary } from "./chackout/orderSymmary.js";
import { renderPaymentSummary } from "./chackout/paymentSummary.js";
import { loadProducts} from '../data/products.js';
// import '../data/cart-class.js'
// import '../data/backend-prectice.js';

loadProducts(() => {
    renderOrederSummary();
    renderPaymentSummary();
});
