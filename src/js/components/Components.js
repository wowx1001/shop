export default class Component {
    $target;
    $state;
    $scategory;
    $c_idx;
    $pd;
    constructor ($target, $scategory="0", $c_idx=0, $pd="0") {
      this.$target = $target;
      this.set_scategory($scategory);
      this.set_cidx($c_idx);
      this.set_pd($pd);
      this.setup();
      this.render();
      this.setEvent();
    }
    setup () {

    };

    header(){
      this.$target.innerHTML = this.template();
    }

    template () { 
      return ''; 
    }
    render () {
      this.$target.innerHTML = this.template(); 
      // this.setEvent();
    }
    setEvent () {

    }
    setState (newState) {
      this.$state = { ...this.$state, ...newState };
      this.render();
    }

    set_scategory(sc){
      this._$scategory=sc;
    }
    
    set_cidx(ci){
      this._$c_idx=ci;
    }
    
    set_pd(pd){
      this._$pd=pd;
    }

    get_scategory(){
      return this._$scategory;
    }
    
    get_cidx(){
      return this._$c_idx;
    }
    
    get_pd(){
      return this._$pd;
    }
}