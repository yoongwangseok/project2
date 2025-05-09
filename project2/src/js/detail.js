document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product');
  const modalHeader = document.getElementById('detail-modal');
  const modalMain = document.getElementById('detail-modal-main');

  const title = document.getElementById('product-title-detail');
  const name = document.getElementById('product-name-detail');
  const img = document.getElementById('product-img-detail');
  const price = document.getElementById('product-price-detail');
  const backBtn = document.getElementById('back-button-detail');

  products.forEach((product) => {
    product.addEventListener('click', function (e) {
      e.preventDefault();

      const productTitle = this.dataset.title;
      const productName = this.dataset.name;
      const productImg = this.dataset.img;
      const productPrice = this.dataset.price;

      title.textContent = productTitle;
      name.textContent = productName;
      img.src = productImg;
      price.innerHTML = `${productPrice}<span class="currency">원</span>`;

      modalHeader.classList.remove('login-hidden');
      modalMain.classList.remove('login-hidden');
    });
  });

  backBtn.addEventListener('click', function () {
    modalHeader.classList.add('login-hidden');
    modalMain.classList.add('login-hidden');
  });
});
