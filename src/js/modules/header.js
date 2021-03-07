export default class Header {
  constructor() {
    this.menuInfomation = {
      menu1: {
        id: '#top',
        name: 'TOP'
      },
      menu2: {
        id: '#music',
        name: 'MUSIC'
      },
      menu3: {
        id: '#about',
        name: 'ABOUT'
      },
      menu4: {
        id: '#live',
        name: 'LIVE'
      }
    }
  }

  /** header を生成 */
  createHeader() {
    const header = document.getElementById('header');
    header.insertAdjacentHTML('afterbegin', `
    <nav id="menu_content">
      <div class="menu_bg"></div>
      <div class="menu_wrapper">
        <div class="inner">
          <ul id="menu">
            <li>
              <a class="menu-item" href="${this.menuInfomation.menu1.id}">
                <span>${this.menuInfomation.menu1.name}</span>
              </a>
            </li>
            <li>
              <a class="menu-item" href="${this.menuInfomation.menu2.id}">
                <span>${this.menuInfomation.menu2.name}</span>
              </a>
            </li>
            <li>
              <a class="menu-item" href="${this.menuInfomation.menu3.id}">
                <span>${this.menuInfomation.menu3.name}</span>
              </a>
            </li>
            <li>
              <a class="menu-item" href="${this.menuInfomation.menu4.id}">
                <span>${this.menuInfomation.menu4.name}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="menu_btn">
      <div class="wrap">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `);
  }
}
