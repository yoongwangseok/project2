const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const signupLink = document.getElementById('signup-link');
const signupModal = document.getElementById('signup-modal');

// 로그인 버튼 클릭 시 로그인 모달 표시
loginButton.addEventListener('click', () => {
  loginModal.classList.remove('login-hidden');
  signupModal.classList.add('login-hidden'); // Ensure signup modal is hidden
});

// 회원가입 링크 클릭 시 회원가입 모달 표시
signupLink.addEventListener('click', (e) => {
  e.preventDefault(); // 링크 이동 방지
  signupModal.classList.remove('login-hidden');
  loginModal.classList.add('login-hidden'); // Ensure login modal is hidden
});
