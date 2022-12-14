import Items from "/shop/src/js/core/Items.js";
import Header from "/shop/src/js/core/Header.js";
import Footer from "/shop/src/js/core/Footer.js"

class App {
    constructor() {
      const $header = document.querySelector('#header');
      const $shop = document.querySelector('#shop');
      const $footer = document.querySelector('#footer');
      new Header($header);
      if($shop){
        new Items($shop);
      }
      new Footer($footer);
    }
}
  
new App();