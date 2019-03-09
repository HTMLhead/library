class PullDown {
  constructor(elObj, optObj) {
    Object.assign(this, { elObj, optObj });
    this.init()
  }

  init() {
    const showClass = document.createElement('show');
    showClass.style = `widht:${this.optObj.width}, height:${this.optObj.height}`
    this.showClass = showClass
    this.addBtnEvt();
  }

  addBtnEvt() {
    const showingBtn = document.querySelector(this.elObj.btn);
    showingBtn.addEventListener('click', this.showing.bind(this));
  }

  
}
