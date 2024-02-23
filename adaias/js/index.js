var swiper = new Swiper(".product-tab-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: "auto",
      spaceBetween: 6,
    },
  },
});

var swiper2 = new Swiper(".product-popular-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesPerGroup: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: "auto",
      spaceBetween: 12,
    },
  },
});

/* 공지모달 처리 */

const noticeOpen = document.querySelector(".btn-open-notice");
const noticeClose = document.querySelector(".close-btn-box");
const noticeWindow = document.querySelector("#noticeModalBg");

noticeOpen.addEventListener("click", () => {
  noticeWindow.style.display = "block";
});
noticeClose.addEventListener("click", () => {
  noticeWindow.style.display = "none";
});

/* 데스트탑 gnb 처리 */
const gnb = document.querySelector(".gnb");
const depth1 = gnb.querySelectorAll("li"); //  gnb 하위의 li 요소를 모두 찾음
//const depth1 =  document.querySelectorAll('.gnb>li');

depth1.forEach(function (ele) {
  // 마우스가 li 요소 위에 올려졌을때
  ele.addEventListener("mouseenter", function () {
    //현재li 요소의 자식 중에 클래스가 dep2-bg-box인요소를 찾아서 보이게 한다.
    let depth2 = this.querySelector(".dep2-bg-box");
    if (depth2) depth2.style.display = "block";
  });
  // 마우스가 li 요소를 벗어났을 떄
  ele.addEventListener("mouseleave", function () {
    //현재li 요소의 자식 중에 클래스가 dep2-bg-box인요소를 찾아서 숨김
    let depth2 = this.querySelector(".dep2-bg-box");
    if (depth2) depth2.style.display = "none";
  });
});
/* 비디오 컨트롤 */
const vid = document.querySelector("#adidasVideo");
const btnPlay = document.querySelector(".btn-play");
const btnSound = document.querySelector(".btn-sound");
//비디오 스탑 플레이
btnPlay.addEventListener("click", function () {
  let value = btnPlay.classList.contains("stop"); // 가지고 있으면 비디오 플레이 상태
  if (value) {
    btnPlay.classList.remove("stop");
    vid.play();
  } else {
    btnPlay.classList.add("stop");
    vid.pause();
  }
});
//사운드 스탑 플레이
btnSound.addEventListener("click", function () {
  let value = btnSound.classList.contains("play"); // 가지고 있으면 사운드 정지 상태
  if (value) {
    btnSound.classList.remove("play");
    vid.muted = true;
  } else {
    btnSound.classList.add("play");
    vid.muted = false;
  }
});

//모바일 메뉴 핸들링
const mbMenuOpen = document.querySelector("#mbMenuOpen");
const mbNavi = document.querySelector(".mb-navi");
const mbNaviCloaseBtn = mbNavi.querySelectorAll(".nav-close-btn");
const mbDepth1 = document.querySelectorAll(".mb-depth1>li");
const mbDepth2 = document.querySelectorAll(".mb-depth2>li");
const naviPrevBtn = document.querySelectorAll(".navi-prev-btn");

mbMenuOpen.addEventListener("click", function () {
  mbNavi.classList.add("on");
});
//1depth li 클릭
mbDepth1.forEach(function (ele) {
  let depth2 = ele.querySelector(".mb-depth2-area");
  if (depth2) ele.classList.add("icon-on");
  ele.addEventListener("click", function () {
    let depth2 = this.querySelector(".mb-depth2-area");
    if (depth2) depth2.classList.add("on");
  });
});
//2depth li 클릭
mbDepth2.forEach(function (ele) {
  let depth3 = ele.querySelector(".mb-depth3-area");
  if (depth3) ele.classList.add("icon-on");
  ele.addEventListener("click", function () {
    let depth3 = this.querySelector(".mb-depth3-area");
    if (depth3) depth3.classList.add("on");
  });
});
// 닫기버튼 클릭
mbNaviCloaseBtn.forEach(function (ele) {
  ele.addEventListener("click", function () {
    mbNavi.classList.remove("on");
  });
});
// 2depth  3depth 에서 앞으로 가기
naviPrevBtn.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    e.stopPropagation();
    let prev = this.parentNode.parentNode;
    prev.classList.remove("on");
  });
});
