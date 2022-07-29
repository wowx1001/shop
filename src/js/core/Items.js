import Component from "/shop/src/js/components/Components.js";
import products from "/shop/src/products.json" assert { type: "json" };

export default class Items extends Component {
  setup () {
      this.setState({
        items: products.data.main_category, 
        index: Object.keys(products.data.main_category),
        sc: this.get_scategory(),
        ci: this.get_cidx(),
        pd: this.get_pd()
      })
  }
  
  template () {
    const { items, index, sc, ci, pd } = {...this.$state};
    // {0: Array(1), 1: Array(1), 2: Array(1), 3: Array(3), 4: Array(4), 5: Array(3), 6: Array(2), 7: Array(3), 8: Array(2), 9: Array(2), 10: Array(2), 11: Array(2), 12: Array(2), 13: Array(1), 14: Array(2)}
    // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
    // console.log(items[this.$scategory][0]["watercolor"])
    // console.log(sc)
    // console.log(typeof(sc))
    return `
        ${items[sc][ci][pd].map((item) => `
        <li>
        <a>
            <img class="item-img" style="width: 100%;" src="${item.imgSrc}"/>
            <div class="item-text">
                <h6>[${item.item_category}]</h6>
                <div style="font-size: 13px;word-break: keep-all;">
                  ${item.title}
                </div>
                <div style="font-size: 13px;">
                    <del>${item.sale_price}원</del>
                    <p>${item.cur_price}원</p>
                </div>
                <p style="font-size: 13px;"><img src="/shop/src/media/images/likes-sm.png"/>123</p>
            </div>
        </a>
        </li>`).join('')}
    `
  }

  setEvent(){
    const keys = Object.keys(this.$state.items)
    const self = this
    for (var i = 0; i<keys.length; i++){
      (function(m){
        const list = document.getElementById('products'+String(m))
        const common_li = document.getElementById('cid'+String(m))
        list.addEventListener('click', () => {
            self.setState({
              sc: String(keys[m]),
              ci: 0,
              pd: "0"
            })
          },false)
          common_li.addEventListener('click', () => {
          self.setState({
            sc: String(keys[m]),
            ci: 0,
            pd: "0"
          })
        },false)
      })(i)
    }
  }
}