export default class AboutSection {
  constructor() {
    this.liveInfomation = {
      DATE: '日付',
      dateDetail: '',
      VENUE: '会場',
      venueDetail: '',
      TIME: '時間',
      timeDetail: '',
      TICKET: 'チケット',
      ticketDetail: ''
    };
  }

  /** live-section を生成 */
  createLiveSection() {
    const live = document.getElementById('live');
    live.insertAdjacentHTML('afterbegin', `
      <div class="contents-body" id="live-body">
        <div class="contents-container">
          <h1 class="section-title">LIVE</h1>
          <div class="section-contents">
            <div class="row">
              <div class="cell">${this.liveInfomation.DATE}</div>
              <div class="cell">${this.liveInfomation.dateDetail}</div>
            </div>
            <div class="row">
              <div class="cell">${this.liveInfomation.VENUE}</div>
              <div class="cell">${this.liveInfomation.venueDetail}</div>
            </div>
            <div class="row">
              <div class="cell">${this.liveInfomation.TIME}</div>
              <div class="cell">${this.liveInfomation.timeDetail}</div>
            </div>
            <div class="row">
              <div class="cell">${this.liveInfomation.TICKET}</div>
              <div class="cell">${this.liveInfomation.ticketDetail}</div>
            </div>
          </div>
        </div>
      </div>
    `);
  }
}
