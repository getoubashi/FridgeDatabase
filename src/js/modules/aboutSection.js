export default class AboutSection {
  constructor() {
    this.aboutText = `
      <p>オーケストレーターとして活躍していた作家に師事し、映画音楽の道に進む。</p>
      <p>感情や情景が浮かびあがるような、世界観をダイレクトに表現した楽曲を製作。</p>
    `;
  }

  /** about-section を生成 */
  createAboutSection() {
    const about = document.getElementById('about');
    about.insertAdjacentHTML('afterbegin', `
    <div class="contents-body" id="about-body">
      <div class="contents-container">
        <h1 class="section-title">ABOUT</h1>
        <div class="section-contents">
          ${this.aboutText}
        </div>
      </div>
    </div>
    `);
  }
}
