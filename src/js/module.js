/**
 * アイテム表示パネル
 * @param {String} category カテゴリー
 * @param {String} name アイテム名
 * @param {String} expirationDate 賞味期限
 * @param {String} rowNum 
 * @returns 
 */
const panel = (category, name, expirationDate, rowNum) => {
  const panelData = `
  <a class="panel-block panel-list" 
    data-name="${name}" data-category="${category}" name="${rowNum}" data-date="${expirationDate}"
    onClick="showUpdateModal(this);">
    <span style="margin-left: 40px;">
      <span name="panelData${rowNum}" style="margin-right: 10px;">${category}</span>
      <span name="panelData${rowNum}">${name}</span>
    </span>
    <span name="panelData${rowNum}" style="position: absolute; right: 3rem;">${expirationDate}</span>
    <input type="checkbox" id="check${rowNum}" for="check${rowNum}" class="input01" name="listCheckbox"
      data-row="${rowNum}"/>
    <label onClick="checkedItem();" for="check${rowNum}" class="label01" style="position: absolute;"></label>
  </a>
`;
  return panelData;
}

/**
 * 登録用モーダル
 * @returns registerModal
 */
const registerModal = () => {
  const registerModal = `
    <div class="modal-background"></div>
    <div class="modal-card" style="height: 80%;">
      <header class="modal-card-head">
        <p class="modal-card-title">アイテム登録</p>
      </header>
      <section class="modal-card-body" style="padding-top:10%">
        <!-- Content ... -->
        <form id="register"
          action="https://script.google.com/macros/s/AKfycbxmvaMI9ZS3WGVN06bG0QeudgiQb3IQ8_xk64JJ8qPZ3hslvm9Ew3K5ihQTEE0oSzMc/exec"
          method="POST" target="fake-target">
          <!-- 食品名 -->
          <div class="field" style="margin-bottom: 20px;">
            <label class="label">食品名</label>
            <div class="control has-icons-left has-icons-right">
              <input id="name" name="name" class="input is-success" type="text">
            </div>
          </div>
          <!-- 賞味期限 -->
          <div class="field" style="margin-bottom: 20px;">
            <label class="label">賞味期限</label>
            <div class="control has-icons-left has-icons-right">
              <input id="expirationDate" name="expirationDate" class="input is-danger" type="date" min="2021-01-01">
            </div>
          </div>
          <input type="hidden" name="capacity" value="100"><br>
          <!-- カテゴリー -->
          <div class="field" style="margin-bottom: 20px;">
            <label class="label">カテゴリー</label>
            <div class="control">
              <div class="select">
                <select id="category" name="category">
                  <option value="🥬">🥬野菜</option>
                  <option value="🥩">🥩肉</option>
                  <option value="🍮">🍮冷蔵</option>
                  <option value="🧊">🧊冷凍</option>
                  <option value="🍄">🍄乾き物</option>
                  <option value="🐟">🐟魚</option>
                  <option value="🤔">🤔その他</option>
                </select>
              </div>
            </div>
          </div>
          <input id="sortNumber" name="sortNumber" type="hidden">
          <input name="method" type="hidden" value="register">
        </form>
      </section>
      <footer class="modal-card-foot">
        <button id="okButton" class="button is-success">追加</button>
        <button id="cancelAddItem" class="button">キャンセル</button>
      </footer>
    </div>
  `

  return registerModal;
}

/**
 * 更新用モーダル
 * @returns updateModal
 */
const updateModal = () => {
  const updateModal = `
    <div class="modal-background"></div>
    <div class="modal-card" style="height: 80%;">
      <header class="modal-card-head">
        <p class="modal-card-title">アイテム更新</p>
      </header>
      <section class="modal-card-body" style="padding-top:10%">
        <!-- Content ... -->
        <form id="updateItem"
          action="https://script.google.com/macros/s/AKfycbxmvaMI9ZS3WGVN06bG0QeudgiQb3IQ8_xk64JJ8qPZ3hslvm9Ew3K5ihQTEE0oSzMc/exec"
          method="POST" target="fake-target">
          <!-- 食品名 -->
          <div class="field" style="margin-bottom: 20px;">
            <label class="label">食品名</label>
            <div class="control has-icons-left has-icons-right">
              <input id="updateModalName" name="name" class="input is-success" type="text">
            </div>
          </div>
          <!-- 賞味期限 -->
          <div class="field" style="margin-bottom: 20px;">
            <label class="label">賞味期限</label>
            <div class="control has-icons-left has-icons-right">
              <input id="updateModalDate" name="expirationDate" class="input is-danger" type="date" min="2021-01-01">
            </div>
          </div>
          <input type="hidden" name="capacity" value="100"><br>
          <!-- カテゴリー -->
          <div class="field" style="margin-bottom: 20px;">
            <label class="label">カテゴリー</label>
            <div class="control">
              <div class="select">
                <select id="updateModalCategory" name="category">
                  <option value="🥬">🥬野菜</option>
                  <option value="🥩">🥩肉</option>
                  <option value="🍮">🍮冷蔵</option>
                  <option value="🧊">🧊冷凍</option>
                  <option value="🍄">🍄乾き物</option>
                  <option value="🐟">🐟魚</option>
                  <option value="🤔">🤔その他</option>
                </select>
              </div>
            </div>
          </div>
          <input id="updateRow" name="updateRow" type="hidden" value="delete">
          <input id="updateModalSortNumber" name="sortNumber" type="hidden">
          <input name="method" type="hidden" value="update">
        </form>
      </section>
      <footer class="modal-card-foot">
        <button onClick="updateItem();" class="button is-success">更新</button>
        <button onClick="closeUpdateModal();" class="button">キャンセル</button>
      </footer>
    </div>
  `

  return updateModal;
}
