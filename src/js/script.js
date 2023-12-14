/** カテゴリーとアイコンの対応 */
const categoryMap = {
  "🥬": "野菜",
  "🥩": "肉",
  "🍮": "冷蔵",
  "🧊": "冷凍",
  "🍄": "乾物",
  "🐟": "魚",
  "🤔": "その他"    
};

/**カテゴリーとソート番号の対応 */
const categorySortNumberMap = {
  "🥬": "1",
  "🥩": "2",
  "🍮": "3",
  "🧊": "4",
  "🍄": "5",
  "🐟": "6",
  "🤔": "7"    
};

/** 保持データ数 */
let dataLength = '';

let editMode = false;

/**
 * パネルを設定する
 * @param {object} data 
 */
const setPanelList = (data) => {
  dataLength = data.length;

  let panelBlock = '';
  for (let i = 0; i < dataLength; i++) {
    const expirationDate = data[i].expirationDate;
    const viewDate = 
      expirationDate == '' ?
      '' :
      `${new Date(expirationDate).getMonth()+1}/${new Date(expirationDate).getDate()}`;

    panelBlock += panel(data[i].category, data[i].name, viewDate, i);
  }

  document.getElementById('listArea').insertAdjacentHTML('afterbegin', `${panelBlock}`);
}

/**
 * 登録用モーダルを生成する
 */
const setRegisterModal = () => {
  document.getElementById('itemAddModal').insertAdjacentHTML('afterbegin', `${registerModal()}`);
}

/**
 * 更新用モーダルを生成する
 */
 const setUpdateModal = () => {
  document.getElementById('itemUpdateModal').insertAdjacentHTML('afterbegin', `${updateModal()}`);
}

/**
 * アイテムを登録する
 */
const registerItem = () => {
  const category = document.getElementById('category').value;

  document.getElementById('sortNumber').value = categorySortNumberMap[category];
  document.getElementById('register').submit();

  const name = document.getElementById('name');
  const expirationDate = document.getElementById('expirationDate');
  const viewDate = 
    expirationDate.value == '' ?
    '' :
    `${new Date(expirationDate.value).getMonth()+1}/${new Date(expirationDate.value).getDate()}`;

  const addedList = panel(category, name.value, viewDate, dataLength);
  document.getElementById('listArea').insertAdjacentHTML('beforeend', `${addedList}`);

  name.value = '';
  expirationDate.value = '';

  changeTab(categoryMap[category]);
}

/**
 * タブを切り替える
 * @param {String} tabName 
 */
const changeTab = (tabName) => {
  const panelTabs = document.getElementsByClassName('panel-tabs')[0].children;

  for (let i = 0; i < panelTabs.length; i++) {
    if (panelTabs[i].textContent == tabName) {
      panelTabs[i].classList.add('is-active');
    } else {
      panelTabs[i].classList.remove('is-active');
    }
  }

  narrowDown(tabName);
}

/**
 * 指定したタブでカテゴリーを絞り込む
 * @param {String} tabName タブ名
 */
const narrowDown = (tabName) => {
  const listArea = document.getElementById('listArea').children;

  for (let i = 0; i < listArea.length; i++) {
    listArea[i].style.display = 
      tabName == 'All' || tabName == categoryMap[listArea[i].dataset.category] ?
      'flex' : 'none';
  }
}

/**
 * チェックボックスをオン
 */
const checkedItem = () => {
  if (!editMode) {
    const deleteButton = document.getElementById('deleteButton');
    let visibility = false;
  
    window.setTimeout(() => {
      const listCheckbox = document.getElementsByName('listCheckbox');
      for (let i = 0; i < listCheckbox.length; i++) {
        if (listCheckbox[i].checked) visibility = true;
      }
  
      deleteButton.style.display = visibility ? 'block' : 'none';    
    }, 100);
  }
}

/**
 * チェック済みのアイテムを削除する
 */
const deleteItem = () => {
  const listCheckbox = document.getElementsByName('listCheckbox');

  let sendRowData = '';
  for (let i = 0; i < listCheckbox.length; i++) {
    sendRowData += listCheckbox[i].checked ? `${Number(listCheckbox[i].dataset.row) + 2},` : '';
  }

  document.getElementById('deleteRows').value = sendRowData.slice(0, -1);
  document.getElementById('deleteItem').submit();

  const listArea = document.getElementById('listArea').children;
  for (let i = listArea.length -1; i >= 0; i--) {
    if (listCheckbox[i].checked) {
      listArea[i].remove();
    }
  }
}

/**
 * アイテムを検索する
 */
const searchItem = (value) => {
  changeTab('All');

  const listArea = document.getElementById('listArea').children;
  for (let i = 0; i < listArea.length; i++) {
    listArea[i].style.display = 
      (~listArea[i].dataset.name.indexOf(value)) ?
      'flex' : 'none';
  }
}

const refresh = () => {
  changeTab('All');
  document.getElementById('refreshItem').submit();

  document.getElementById('loading2').style.display = 'block';
  document.getElementById('listArea').style.display = 'none';

  const parent = document.getElementById('listArea');
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }

  window.setTimeout(() => {
    getData();
  }, 2000);
}

const showUpdateModal = (data) => {
  if (!editMode) return;

  const updateRow = data.name;
  const panelData = document.getElementsByName(`panelData${Number(updateRow)}`);
  const month = new Date(panelData[2].innerText).getMonth() + 1;
  const viewMonth = month.toString().length == 1 ? '0' + month : month;
  const day = new Date(panelData[2].innerText).getDate();
  const viewDay = day.toString().length == 1 ? '0' + day : day;

  document.getElementById('updateModalName').value = panelData[1].innerText;
  document.getElementById('updateModalDate').value = `${new Date().getFullYear()}-${viewMonth}-${viewDay}`;
  document.getElementById('updateModalCategory').value = panelData[0].innerText;
  document.getElementById('updateRow').value = Number(updateRow) + 2;

  const itemUpdateModal = document.getElementById('itemUpdateModal');
  itemUpdateModal.classList.add('is-active');
}

const closeUpdateModal = () => {
  const itemUpdateModal = document.getElementById('itemUpdateModal');
  itemUpdateModal.classList.remove('is-active');
  editMode = false;
}

const updateItem = () => {
  console.log(document.getElementById('updateModalCategory').value);
  document.getElementById('updateModalSortNumber').value = categorySortNumberMap[
    document.getElementById('updateModalCategory').value
  ]
  document.getElementById('updateItem').submit();

  const updateRow = document.getElementById('updateRow').value;
  const panelData = document.getElementsByName(`panelData${Number(updateRow - 2)}`);
  const exDate = document.getElementById('updateModalDate').value;
  panelData[0].innerText = document.getElementById('updateModalCategory').value;
  panelData[1].innerText = document.getElementById('updateModalName').value;
  panelData[2].innerText = `${new Date(exDate).getMonth()+1}/${new Date(exDate).getDate()}`;

  closeUpdateModal();
}

const edit = () => {
  editMode = !editMode;
}
