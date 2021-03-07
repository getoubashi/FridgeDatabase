export default class Top {
  constructor() {
    this.options =
      '&color=%23b59d9f' +
      '&auto_play=false' +
      '&buying=false' +
      '&liking=false' +
      '&download=true' +
      '&sharing=false' +
      '&show_artwork=false' +
      '&show_comments=false' +
      '&show_playcount=false' +
      '&show_user=false' +
      '&show_reposts=false' +
      '&hide_related=false' +
      '&show_teaser=false' +
      '&visual=false';
  }

  /** music-section を生成 */
  createMusicSection() {
    const music = document.getElementById('music');
    music.insertAdjacentHTML('afterbegin', `
    <div class="contents-body" id="music-body">
      <div class="contents-container">
        <h1 class="section-title">MUSIC</h1>
        <div id="music-contents">
          <iframe id="sc-widget" class="track" width="500" height="400" scrolling="no" frameborder="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/playlists/971590474${this.options}">
          </iframe>
          <i class="material-icons is-pulled-left" id="skip-previous">skip_previous</i>
          <i class="material-icons is-pulled-left" id="skip-next">skip_next</i>
        </div>
      </div>
    </div>
  `);
  }
}
