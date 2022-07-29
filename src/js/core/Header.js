import Component from "/shop/src/js/components/Components.js";
import "/shop/src/js/effect/effect.js";

export default class Header extends Component {
  template () {
    return `
        <div class="top-container">
            <div class="top-ul-wrapper">
                <ul class="top-ul top-left">
                    <li><a href="/shop">홈으로</a></li>
                    <li><a href="#">모바일 버전</a></li>
                </ul>
                <ul class="top-ul top-right">
                    <li><a href="/shop/view/member/login.html">로그인</a></li>
                    <li><a href="/shop/view/member/join.html">회원가입</a></li>
                    <li><a href="#">내정보</a></li>
                    <li><a href="#">장바구니</a></li>
                </ul>
            </div>
        </div>
        <div class="search-events-area">
            <div class="search-box-wrap">
                <div class="search-box clearfix">
                    <input type="text" class="search-input"/>
                    <div class="best-keywords-wrap clearfix">
                        <ul id="best-keywords-box">
                            <li class="best-keywords-items swipe-contents-cur" data-swipe-index="0"><a href="">1. 유화물감</a></li>
                            <li class="best-keywords-items swipe-contents-next" data-swipe-index="1"><a href="">2. 스케치북</a></li>
                            <li class="best-keywords-items" data-swipe-index="2"><a href="">3. 연필</a></li>
                            <li class="best-keywords-items" data-swipe-index="3"><a href="">4. 수채화 물감</a></li>
                            <li class="best-keywords-items" data-swipe-index="4"><a href="">5. 오일파스텔</a></li>
                            <li class="best-keywords-items" data-swipe-index="5"><a href="">6. 이젤</a></li>
                            <li class="best-keywords-items" data-swipe-index="6"><a href="">7. 파렛트</a></li>
                            <li class="best-keywords-items" data-swipe-index="7"><a href="">8. 붓</a></li>
                            <li class="best-keywords-items" data-swipe-index="8"><a href="">9. 면천 캔버스</a></li>
                            <li class="best-keywords-items swipe-contents-prev" data-swipe-index="9"><a href="">10. 마카</a></li>
                            <li class="best-keywords-items swipe-contents-cur" data-swipe-index="0"><a href="">1. 유화물감</a></li>
                        </ul>
                    </div>
                    <button class="search-icon-box">
                        <img src="/shop/src/media/images/search.png">
                    </button>
                </div>
                <div class="top-image-box clearfix">
                    <img src="/shop/src/media/images/yisel.jpg"/>
                </div>
            </div>
        </div>
        <div class="navbar-wrapper">
            <!-- <nav class="navbar-on"> -->
            <nav class="navbar">
                <a href="#" class="burger-menu"><img width="30" src="/shop/src/media/images/burger.png"/></a>
                <a id="logo" href="/shop">LOGO AREA</a>
                <ul class="navbar-ul navbar-left-contents">
                    <li class="nav-item item1"><a href="/shop">Logo</a></li>
                    <li class="nav-item item2">
                    <ul class="dropdown-area">
                        <li class="nav-item"><a href="/shop/view/board/notify.html">공지사항</a></li>
                        <li class="nav-item"><a href="/shop/view/product/shop.html">전체상품</a></li>
                        <li class="nav-item"><a href="/shop/view/board/faq.html">고객센터</a></li>
                        <li class="nav-item"><a>이벤트</a></li>
                        <li class="nav-item"><a href="/shop/view/board/review.html">리뷰게시판</a></li>
                    </ul>
                    </li>
                </ul>
            </nav>
            <!-- div class="navbar-right-contents" style="cursor: pointer; z-index: 10000;">
                <button class="serach"><i class="fa fa-search fa-lg"></i></button>
                <button class="users" onclick="location.href='/shop/view/member/login.html'"><i class="fa fa-solid fa-user fa-lg"></i></button>
            </div -->
        </div>
    `
  }
}
