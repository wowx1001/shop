import Component from "/src/js/components/Components.js";

export default class Header extends Component {
//   setup () {
//     this.$state = { items: ['item1', 'item2'] };
//   }
  template () {
    return `
        <div class="footer-wrapper">
          <div style="margin: auto; padding: 2rem; display: flex; flex-direction: row; max-width: 952px; justify-content: center;">
            <div style="width:25%;">
              <strong>고객 상담센터</strong>
              <p><strong>02-000-0000</strong></p>
              <ul style="padding:0;">
                <li>
                  <span>평일</span>
                  00:00 ~ 00:00
                </li>    
                  <li>
                  <span>주말</span>
                  00:00 ~ 00:00
                </li> 
                <li>
                  <span>토 / 일 / 공휴일 휴무</span>
                </li> 
              </ul>
              <strong>이메일 문의</strong>
              <p>email@email.com</p>
              <strong>반품 주소</strong>
              <p>서울시 동작구 대방동</p>
              <strong>뱅킹</strong>
              <ul style="padding:0;">
                <li><span>국민은행</span> 000000-00-000000</li>
                <li><span>기업은행</span> 000000-00-000000</li>
                <li><span>농협은행</span> 000000-00-000000</li>
                <li><span>예금주</span> (주) 샘플 회사</li>
              </ul>
            </div>
            <div style="width:18.75%;">
              <strong>공지사항</strong>
              <ul style="padding:0;">
                <li>자주 묻는 질문</li>
                <li>이용 약관</li>
                <li>이용 가이드</li>
              </ul>
            </div>
            <div style="width:18.75%;">
              <strong>전체상품</strong>
              <ul style="padding:0;">
                <li>보조도구</li>
                <li>붓</li>
                <li>연필</li>
                <li>물감</li>
                <li>스프레이</li>
                <li>지류</li>
                <li>전자용품</li>
              </ul>
            </div>
            <div style="width:18.75%;">
              <strong>이벤트</strong>
              <ul style="padding:0;">
                <li>진행중인 이벤트</li>
                <li>종료된 이벤트</li>
              </ul>
            </div>
            <div style="width:18.75%;">
              <strong>고객센터</strong>
              <ul style="padding:0;">
                <li>배송 / 교환 / 반품문의</li>
                <li>입금확인 / 환불문의</li>
                <li>단체 주문 문의</li>
                <li>광고 문의</li>
                <li>입점 문의</li>
              </ul>
              <div style="margin-top:2rem;">
                <a href="#"><i style="font-size:32px;" class="fa-brands fa-facebook-square"></i></a>
                <a href="#"><i style="font-size:32px;" class="fa-brands fa-instagram-square"></i></a>
                <a href="#"><i style="font-size:32px;" class="fa-brands fa-blogger"></i></a>
                <a href="#"><i style="font-size:32px;" class="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
    `
  }

//   setEvent () {
//     this.$target.querySelector('button').addEventListener('click', () => {
//       const { items } = this.$state;
//       this.setState({ items: [ ...items, `item${items.length + 1}` ] });
//     });
//   }
}