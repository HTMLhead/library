class PullDown {
  constructor(elObj, optObj) {
    Object.assign(this, { elObj, optObj });
    this.isOpen = false;
    this.init();
  }

  init() {
    this.targetDom = document.querySelector(this.elObj.target);
    this.addBtnEvt();
    this.applyOpt(this.targetDom.style);
  }

  applyOpt(target) {
    target.background = `${this.optObj.background}`;
    target.opacity = `${this.optObj.opacity}`;
    target.transition = `width ${this.optObj.time} ${this.optObj.animation}`;
  }

  addBtnEvt() {
    const toggleButton = document.querySelector(this.elObj.toggleButton);
    toggleButton.addEventListener('click', e => this.toggleShowing(e));
  }

  toggleShowing(e) {
    this.isOpen ? this.closing() : this.showing();
    this.addBtnAnimation();
  }

  addBtnAnimation() {
    const secLine = document.querySelector('.sec-line');
    secLine.classList.toggle('clicked');
  }

  showing() {
    this.isOpen = true;
    this.targetDom.style.width = `${this.optObj.width}`;
  }

  closing() {
    this.isOpen = false;
    this.targetDom.style.width = `0`;
  }
}
