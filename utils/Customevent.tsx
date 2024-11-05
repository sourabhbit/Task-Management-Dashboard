export default class Customevent {
  name: string;
  event: any;
  constructor(name: string, options: any) {
    this.name = name;
    this.event = new CustomEvent(name, options);
  }
  addListner(listener: any) {
    window.addEventListener(this.name, listener);
  }
  removeListner(listener: any) {
    window.removeEventListener(this.name, listener);
  }
  dispatch() {
    window.dispatchEvent(this.event);
  }
}
