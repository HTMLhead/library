class PullDown {
  constructor(elObj, optObj) {
    Object.assign(this, { elObj, optObj });
    this.init();
  }

  init() {
    this.targetDom = document.querySelector(this.elObj.target);
    this.targetDom.style.height =  `${this.optObj.height}`;
    this.targetDom.style.transition = `0.3s all ${this.optObj.animation}`;
    this.addBtnEvt();
  }

  addBtnEvt() {
    const showingBtn = document.querySelector(this.elObj.openBtn);
    const closingBtn = document.querySelector(this.elObj.closeBtn);
    showingBtn.addEventListener('click', () => this.showing());
    closingBtn.addEventListener('click', () => this.closing());
  }

  showing() {
    this.targetDom.style.width = `${this.optObj.width}`;
  }

  closing() {
    this.targetDom.style.width = `0`;
  }
}
