export default class Top {
  constructor() {}

  /** Panel を生成 */
  createPanel() {
    const panel = document.getElementById('panel');
    panel.insertAdjacentHTML('afterbegin', `
      <nav class="panel">
        <p class="panel-heading">
        冷蔵庫データベース
        </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Search">
          <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>野菜</a>
        <a>肉</a>
        <a>麺類</a>
        <a>その他</a>
      </p>
      <span id="listArea">
        <!-- ここにリスト -->
      </span>
      <div class="panel-block">
        <button id="addButton" class="button is-link is-outlined is-fullwidth">
          追加
        </button>
      </div>
      </nav>
    `);
  }
}
