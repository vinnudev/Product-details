// Js for Image Selection
const thumbnailImages = document.querySelectorAll('.thumbnail-images img');
const mainImage = document.querySelector('.main-image img');

thumbnailImages.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const clickedImageSrc = thumbnail.src;
    mainImage.src = clickedImageSrc;
  });
});

// to calculate the percentage
const productPriceElement = document.querySelector('.product-price');
const compareAtPriceElement = document.querySelector('.compare-at-price');
const percentageOffElement = document.querySelector('.percentage-off');
function calculatePercentageOff(productPrice, compareAtPrice) {
  if (compareAtPrice > productPrice) {
    const discount = compareAtPrice - productPrice;
    const discountPercent = Math.round((discount / compareAtPrice) * 100);
    return discountPercent;
  } else {
    return 0;
  }
}
// to save the selected size
const productPrice = parseFloat(productPriceElement.textContent.slice(1));
const compareAtPrice = parseFloat(compareAtPriceElement.textContent.slice(1));
const discountPercent = calculatePercentageOff(productPrice, compareAtPrice);
percentageOffElement.textContent = `${discountPercent}% Off`;

let selectedSize = null; 
const sizeOptions = document.querySelectorAll('.size-options label');
sizeOptions.forEach(option => {
  option.querySelector('input').addEventListener('change', (event) => {
    selectedSize = event.target.value;
  });
});
// code for  the counter
const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const countDisplay = document.querySelector('.count');
let currentCount = 1;
decrementButton.addEventListener('click', () => {
  if (currentCount > 1) {
    currentCount--;
    countDisplay.textContent = currentCount;
  }
});

incrementButton.addEventListener('click', () => {
  currentCount++;
  countDisplay.textContent = currentCount;
});



const addToCartButton = document.querySelector('.add-to-cart');
const atdMessage = document.querySelector('.atd-message');
addToCartButton.addEventListener('click', () => {
  const productName = document.querySelector('.product-title').textContent;
  const productPrice = document.querySelector('.product-price').textContent;
  const productImage = document.querySelector('.main-image img').src;

  const selectedSizeRadio = document.querySelector('.size-options input:checked');
  const selectedSize = selectedSizeRadio ? selectedSizeRadio.value : 'NA';

  atdMessage.style.backgroundColor = 'rgba(231, 248, 183, 1)';
  const quantity = parseInt(document.querySelector('.count').textContent);

  atdMessage.textContent = `${quantity} x ${productName} with Size ${selectedSize} added to your cart!`;
});