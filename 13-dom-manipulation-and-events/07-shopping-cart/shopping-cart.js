document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let products = new Set();
   let totalPrice = 0;

   const allAddBtnEls = document.querySelectorAll('.add-product');
   const resultTextareaEl = document.querySelector('textarea');
   const checkoutBtnEl = document.querySelector('.checkout');

   for (const addBtnEl of allAddBtnEls) {
      addBtnEl.addEventListener('click', handleAddProduct);
   }

   checkoutBtnEl.addEventListener('click', handleCheckoutProducts);

   function handleAddProduct(e) {
      const fullProductDivEl = e.target.closest('.product');

      const productTitle = fullProductDivEl.querySelector('.product-title').textContent;
      const productPrice = Number(fullProductDivEl.querySelector('.product-line-price').textContent);

      products.add(productTitle);
      totalPrice += productPrice;

      resultTextareaEl.value += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   function handleCheckoutProducts() {
      resultTextareaEl.value += `You bought ${Array.from(products).join(', ')} for ${totalPrice.toFixed(2)}.`;

      checkoutBtnEl.disabled = true;
      allAddBtnEls.forEach(btn => btn.disabled = true);
   }
}