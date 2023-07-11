const runBtn = document.querySelector('.run-btn');
const wheel = document.querySelector('.wheel-rotate');
const clearBtn = document.querySelector('.clear');
const input = document.querySelector('input');
const display = document.querySelector('.display-content');

// 32 person
const arr = [
  '資訊室-繆1慶',
  '資訊室-繆2慶',
  '資訊室-繆3慶',
  '資訊室-繆4慶',
  '資訊室-繆5慶',
  '資訊室-繆6慶',
  '資訊室-繆7慶',
  '資訊室-繆8慶',
  '資訊室-繆9慶',
  '資訊室-繆10慶',
  '資訊室-繆11慶',
  '資訊室-繆12慶',
  '資訊室-繆13慶',
  '資訊室-繆14慶',
  '資訊室-繆15慶',
  '資訊室-繆16慶',
  '資訊室-繆17慶',
  '資訊室-繆18慶',
  '資訊室-繆19慶',
  '資訊室-繆20慶',
  '資訊室-繆21慶',
  '資訊室-繆22慶',
  '資訊室-繆23慶',
  '資訊室-繆24慶',
  '資訊室-繆25慶',
  '資訊室-繆26慶',
  '資訊室-繆27慶',
  '資訊室-繆28慶',
  '資訊室-繆29慶',
  '資訊室-繆30慶',
  '資訊室-繆31慶',
  '資訊室-繆32慶',
];

document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    const displayArea = document.querySelector('.display-content');
    displayArea.innerHTML = '';
    console.log(e.code);

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

      // display award content one click display all
      const emptyArr = [];
      if (arr.length > 0 && arr.length - input.value >= 0) {
        for (let i = 0; i < input.value; i++) {
          const random = Math.floor(Math.random() * arr.length);
          // push新值
          emptyArr.push(arr[random]);
          // display award area
          const displayName = document.createElement('h3');
          const nameIcon = document.createElement('i');
          nameIcon.setAttribute('class', 'fa-solid fa-gift');
          const nameSpan = document.createElement('span');
          displayName.setAttribute('class', 'name');
          nameSpan.innerText = `${emptyArr[i]}`;
          displayName.append(nameIcon);
          displayName.append(nameSpan);
          display.append(displayName);
          // 移除原本arr中的值
          arr.splice(random, 1);
        }
      } else {
        console.log('arr值不足');
      }
      console.log(emptyArr, arr);
    }, 2000);
    console.log(input.value);
  }
});

// clear btn
clearBtn.addEventListener('click', function () {
  const displayArea = document.querySelector('.display-content');
  displayArea.innerHTML = '';
  input.value = '';
});
