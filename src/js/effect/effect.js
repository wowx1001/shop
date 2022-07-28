let idx = {
    "preIdx":9,
    "curIdx":0,
    "nextIdx":1,
    "style":{
        "duration":"400ms",
        "yAxis":0
    }
}

// 인기검색어 애니메이션
$(function(){
    const u_bx = document.getElementById("best-keywords-box");
    setInterval(function(){
        if(idx.curIdx==10){
            idx.curIdx=0;
            idx.style.yAxis="0";
            u_bx.style.transitionDuration = "0ms";
            u_bx.style.transform = "translateY("+idx.style.yAxis+"px)";
        }else{
            idx.curIdx++;
            idx.style.yAxis = idx.style.yAxis-24
            u_bx.style.transitionDuration = "400ms";
            u_bx.style.transform = "translateY("+idx.style.yAxis+"px)";
        }
    },3000)
})

//햄버거 버튼 & 아코디언 메뉴
$(function(){
    const mask = document.getElementById("mask");
    const atag = document.getElementsByClassName("burger-menu")[0];
    const close_btn = document.getElementsByClassName("close")[0];
    let acm = document.getElementsByClassName("accordion-menu")[0];

    // 아코디언 메뉴 펼치기 클래스 전환
    if(typeof atag.addEventListener=="function"){
        atag.addEventListener("click",function(){
            acm.setAttribute("class","accordion-menu open-accordion");
            $("#app").removeClass("body-container").addClass("body-passive");
            $("#main").addClass("move-container");
            $("#header").addClass("move-container");
            $("#mask").addClass("mask-off");
        });
    }

    // 아코디언 메뉴 접기 클래스 전환
    if(typeof close_btn.addEventListener=="function"){
        close_btn.addEventListener("click",function(){
            acm.setAttribute("class","accordion-menu close-accordion");
            $("#app").removeClass("body-passive").addClass("body-container");
            $("#main").removeClass("move-container");
            $("#header").removeClass("move-container");
            $("#mask").removeClass("mask-off");
        });
    }
});

// 아코디언 상세메뉴 펼치기
$(function(){
    const li = document.getElementById("shop-records");
    li.addEventListener("click",function(){
        let arrow = $("#shop-records a:nth-child(2)");
        let contents = $("#shop-records > .second-depth-ul");
        if(contents.hasClass("ul-active")){
            contents.removeClass("ul-active")
            arrow.removeClass("t-arrow-box")
            arrow.addClass("b-arrow-box")
        }else{
            contents.addClass("ul-active")
            arrow.removeClass("b-arrow-box")
            arrow.addClass("t-arrow-box")
        }
    })
});

// 리뷰게시판
$(function(){
    const review_item = document.getElementsByClassName("review-item");
    const r_dtl = document.getElementById("review-detail");
    const close_btn = document.querySelector("#detail-close-area .line-box");
    if(review_item){
        for(var i=0;i<review_item.length;i++){
            review_item[i].addEventListener("click",function(){
                r_dtl.setAttribute("class","visible-review-detail");
            });
        }
    }
    if(close_btn){
        close_btn.addEventListener("click",function(){
            r_dtl.setAttribute("class","hide-review-detail");
        });
    }
});

// shop 카테고리 펼치기
$(function(){
    const cc_open = $("#common-cg-open");
    const table_item = document.getElementsByClassName("common-tables");
    const cc_arrow = $("#common-cg-open a:nth-child(2)");
    cc_open.click(function(){
    if(cc_open && cc_open.hasClass("cc-close")){
        cc_open.removeClass("cc-close");
        cc_arrow.removeClass("b-arrow-box");
        for(var i=0;i<table_item.length;i++){
            table_item[i].setAttribute("class","category-items common-tables ci-active");
        }
        cc_open.addClass("cc-open");
        cc_arrow.addClass("t-arrow-box");
    }else{
        cc_open.removeClass("cc-open");
        cc_arrow.removeClass("t-arrow-box");
        for(var i=0;i<table_item.length;i++){
            table_item[i].setAttribute("class","category-items common-tables ci-passive");
        }
        cc_open.addClass("cc-close")        
        cc_arrow.addClass("b-arrow-box");
    }     
    }); 
});