const btn = document.querySelector('.btn');
const wheel = document.querySelector('.wheel-rotate');

btn.addEventListener('click', function () {
  wheel.classList.add('active');
  btn.classList.add('scale');
  setTimeout(() => {
    btn.classList.remove('scale');
  }, 100);
  setTimeout(() => {
    wheel.classList.remove('active');
  }, 3000);
});
