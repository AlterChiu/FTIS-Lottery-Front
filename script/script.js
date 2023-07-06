const runBtn = document.querySelector('.run-btn');
const wheel = document.querySelector('.wheel-rotate');
const clearBtn = document.querySelector('.clear');
const input = document.querySelector('input');
const display = document.querySelector('.display-content');
// const icon = document.createElement('i');
// const span = document.createElement('span');

const arr = [
  '資訊室-繆照慶-1',
  '資訊室-繆照慶-2',
  '資訊室-繆照慶-3',
  '資訊室-繆照慶-4',
  '資訊室-繆照慶-5',
  '資訊室-繆照慶-6',
  '資訊室-繆照慶-8',
  '資訊室-繆照慶-9',
  '資訊室-繆照慶-10',
  '資訊室-繆照慶-11',
  '資訊室-繆照慶-12',
  '資訊室-繆照慶-13',
  '資訊室-繆照慶-14',
  '資訊室-繆照慶-15',
  '資訊室-繆照慶-16',
  '資訊室-繆照慶-17',
  '資訊室-繆照慶-18',
  '資訊室-繆照慶-19',
  '資訊室-繆照慶-21',
  '資訊室-繆照慶-22',
  '資訊室-繆照慶-23',
  '資訊室-繆照慶-24',
];

runBtn.addEventListener('click', function () {
  wheel.classList.add('active');
  runBtn.classList.add('scale');
  runBtn.innerText = '抽獎中...';
  setTimeout(() => {
    runBtn.classList.remove('scale');
  }, 100);
  setTimeout(() => {
    wheel.classList.remove('active');

    // button active and icon
    runBtn.innerText = '';
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-gift');
    runBtn.append(icon);
    const span = document.createElement('span');
    span.innerText = '開始抽獎';
    runBtn.append(span);

    // display award content
    const displayName = document.createElement('h3');
    const nameIcon = document.createElement('i');
    nameIcon.setAttribute('class', 'fa-solid fa-gift');
    const nameSpan = document.createElement('span');
    displayName.setAttribute('class', 'name');
    nameSpan.innerText = '資訊室-繆照慶';
    displayName.append(nameIcon);
    displayName.append(nameSpan);
    display.append(displayName);
  }, 2000);
  console.log(input.value);
});

clearBtn.addEventListener('click', function () {
  const displayArea = document.querySelector('.display-content');
  displayArea.innerHTML = '';
  input.value = '';
});
