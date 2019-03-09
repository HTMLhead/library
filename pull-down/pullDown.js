class PullDown {
  constructor(elObj, optObj) {
    Object.assign(this, { elObj, optObj });
    this.init();
  }

  init() {
    this.cssProperty = `width:${this.optObj.width}, height:${this.optObj.height}`;
    this.addBtnEvt();
  }

  addBtnEvt() {
    const showingBtn = document.querySelector(this.elObj.btn);
    showingBtn.addEventListener('click', this.showing.bind(this));
  }

  showing() {
    const targetDom = document.querySelector(this.elObj.target);
    targetDom.style.width = `${this.optObj.width}`;
    targetDom.style.height =  `${this.optObj.height}`;
    targetDom.style.transition = `1s all`
  }


}
