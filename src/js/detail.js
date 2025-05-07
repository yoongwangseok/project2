const productCards = document.querySelectorAll('.product');
const detailModal = document.getElementById('product-detail');

productCards.forEach((card) => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = card.dataset.price;
    const img = card.dataset.img;

    // 모달 내용 구성
    detailModal.innerHTML = `
      <div class="modal-content">
        <img src="${img}" alt="${name}" />
        <h2>${name}</h2>
        <p>${price}원</p>
        <button id="close-modal">닫기</button>
      </div>
    `;

    // 모달 보이기
    detailModal.classList.remove('login-hidden');

    // 주소만 변경 (SPA처럼 동작)
    history.pushState({ id, name, price, img }, '', `/product/${id}`);

    // 닫기 버튼 이벤트
    document.getElementById('close-modal').addEventListener('click', () => {
      detailModal.classList.add('login-hidden');
      history.pushState({}, '', '/'); // 메인으로 돌아간 느낌으로
    });
  });
});

// 뒤로 가기 시 처리
window.addEventListener('popstate', (event) => {
  if (location.pathname.startsWith('/product/')) {
    detailModal.classList.remove('login-hidden');

    // 뒤로 갔을 때 정보 복구할 수 있는 상태가 있으면 사용
    const state = event.state;
    if (state) {
      detailModal.innerHTML = `
        <div class="modal-content">
          <img src="${state.img}" alt="${state.name}" />
          <h2>${state.name}</h2>
          <p>${state.price}원</p>
          <button id="close-modal">닫기</button>
        </div>
      `;
      document.getElementById('close-modal').addEventListener('click', () => {
        detailModal.classList.add('login-hidden');
        history.pushState({}, '', '/');
      });
    }
  } else {
    // 홈으로 돌아왔을 때 모달 닫기
    detailModal.classList.add('login-hidden');
  }
});
