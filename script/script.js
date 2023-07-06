const runBtn = document.querySelector('.run-btn');
const wheel = document.querySelector('.wheel-rotate');
const clearBtn = document.querySelector('.clear');
const input = document.querySelector('input');
const display = document.querySelector('.display-content');
// const icon = document.createElement('i');
// const span = document.createElement('span');

const arr = [
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
  '資訊室-繆照慶',
];

runBtn.addEventListener('click', function () {
  // clear area
  // const displayArea = document.querySelector('.display-content');
  // displayArea.innerHTML = '';

  // button and wheel
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

    // display award content one click add one person
    /*
    const displayName = document.createElement('h3');
    const nameIcon = document.createElement('i');
    nameIcon.setAttribute('class', 'fa-solid fa-gift');
    const nameSpan = document.createElement('span');
    displayName.setAttribute('class', 'name');
    nameSpan.innerText = '資訊室-繆照慶';
    displayName.append(nameIcon);
    displayName.append(nameSpan);
    display.append(displayName);
    */

    // display award content one click display all
    for (let i = 0; i < input.value; i++) {
      console.log(arr[i]);
      const displayName = document.createElement('h3');
      const nameIcon = document.createElement('i');
      nameIcon.setAttribute('class', 'fa-solid fa-gift');
      const nameSpan = document.createElement('span');
      displayName.setAttribute('class', 'name');
      nameSpan.innerText = `${arr[i]}`;
      displayName.append(nameIcon);
      displayName.append(nameSpan);
      display.append(displayName);
    }
  }, 2000);
  console.log(input.value);
});

// clear
clearBtn.addEventListener('click', function () {
  const displayArea = document.querySelector('.display-content');
  displayArea.innerHTML = '';
  input.value = '';
});
