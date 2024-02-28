const searchEl = document.querySelector(".search");
// 변수에 할당해준다

// document = 문서다 html
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

document.addEventListener("DOMContentLoaded", function () {
  // Swiper 초기화 및 옵션 설정
  const mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    loop: true,
  });

  // 데스크톱에서 포커스가 빠진 경우 자동 슬라이드 재생
  const swiperContainer = document.querySelector(".swiper-container");
  swiperContainer.addEventListener("focusout", () => {
    setTimeout(() => {
      if (swiperContainer.querySelector(":focus") === null) {
        console.log("focusout, startAutoplay");
        mySwiper.autoplay.start();
      }
    }, 100);
  });

  // 모바일에서 화면을 움직이면 자동 슬라이드 기능 재생
  document.addEventListener("touchmove", () => {
    console.log("touchmove, startAutoplay");
    mySwiper.autoplay.start();
  });

  // 스티키 이미지 설정
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollX;
    var stickyImgA = document.querySelector(".stickyImgA");

    if (scrollPosition > 1000) {
      stickyImgA.style.position = "static"; // 스크롤이 일정 위치 이상이면 고정을 해제
    } else {
      stickyImgA.style.position = "fixed"; // 그 외에는 다시 고정
    }
  });
});
function scrollToFooter() {
  const footer = document.querySelector("footer");
  footer.scrollIntoView({ behavior: "smooth" });
}

AOS.init();

// tab const even click functions
document.addEventListener("DOMContentLoaded", function () {
  const tabWrappers = document.querySelectorAll(".box-wrap");
  tabWrappers[0].classList.add("on");
});

function showTab(tabIndex, event) {
  const tabWrappers = document.querySelectorAll(".box-wrap");
  tabWrappers.forEach((tab, index) => {
    if (index === tabIndex) {
      tab.classList.add("on");
    } else {
      tab.classList.remove("on");
    }
  });
  event.preventDefault();
}

//
function addFooter(content) {
  document.getElementById("footer").innerHTML = content;
}

// 다른 HTML 파일에서 푸터를 가져와서 현재 페이지에 추가
