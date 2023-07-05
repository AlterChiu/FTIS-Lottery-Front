const btn = document.querySelector('.btn');
const wheel = document.querySelector('.wheel-rotate');

btn.addEventListener('click', function () {
  wheel.classList.add('active');
  btn.classList.add('scale');
  btn.innerText = '抽獎中...';
  setTimeout(() => {
    btn.classList.remove('scale');
  }, 100);
  setTimeout(() => {
    wheel.classList.remove('active');
    btn.innerText = '開始抽獎';
  }, 3000);
});
