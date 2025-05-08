document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product');
  const modal = document.getElementById('detail-modal');
  const name = document.getElementById('product-name');
  const img = document.getElementById('product-img');
  const price = document.getElementById('product-price');
  const backBtn = document.getElementById('back-button');

  products.forEach((product) => {
    product.addEventListener('click', function (e) {
      e.preventDefault();

      const productName = this.dataset.name;
      const productImg = this.dataset.img;
      const productPrice = this.dataset.price;

      name.textContent = productName;
      img.src = productImg;
      price.textContent = `${productPrice}원`;
      // console.log(productName, productImg, productPrice);
      modal.classList.remove('login-hidden'); // 모달 보이게
    });
  });

  backBtn.addEventListener('click', function () {
    modal.classList.add('login-hidden'); // 모달 닫기
  });
});
// const products = document.querySelectorAll('.product');

// products.forEach(function (product) {
//   product.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('상품 클릭됨');
//   });
// });
