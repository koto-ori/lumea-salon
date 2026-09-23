/* =========================
STYLIST FADE
========================= */

const staffCards =
  document.querySelectorAll(".staff-fade");

const staffObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const cards =
            [...staffCards];

          const index =
            cards.indexOf(entry.target);

          const isMobile =
            window.innerWidth <= 768;

          const delay =
            isMobile
              ? 100
              : 150;

          setTimeout(() => {

            entry.target.classList.add("show");

          }, index * delay);

          staffObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.15
    }

  );

staffCards.forEach(card => {

  staffObserver.observe(card);

});

/* =========================
HAIR STYLE PAN ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".hair-style-card");
  
    /* hair-style-card がないページでは何もしない */
    if (cards.length === 0) {
      return;
    }
  
    const observer = new IntersectionObserver(
      (entries) => {
  
        entries.forEach((entry) => {
  
          if (!entry.isIntersecting) {
            return;
          }
  
          const card = entry.target;
  
          const index = Array.from(cards).indexOf(card);
  
          const isMobile = window.innerWidth <= 768;
  
          /* PC4列 / スマホ2列 */
          const columns = isMobile ? 2 : 4;
  
          /* 横方向の順番 */
          const columnIndex = index % columns;
  
          const delay = isMobile ? 100 : 120;
  
  
          setTimeout(() => {
  
            card.classList.add("show");
  
          }, columnIndex * delay);
  
  
          /* 一度表示されたら監視終了 */
          observer.unobserve(card);
  
        });
  
      },
      {
        threshold: 0.15
      }
    );
  
  
    cards.forEach((card) => {
  
      observer.observe(card);
  
    });
  
  });

  /* =========================
STYLIST RISE ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const stylistCards =
      document.querySelectorAll(".stylist-card-rise");
  
    if (stylistCards.length === 0) {
      return;
    }
  
  
    const stylistObserver =
      new IntersectionObserver(
  
        (entries) => {
  
          entries.forEach((entry) => {
  
            if (!entry.isIntersecting) {
              return;
            }
  
  
            const card = entry.target;
  
            const cards =
              Array.from(stylistCards);
  
            const index =
              cards.indexOf(card);
  
  
            const isMobile =
              window.innerWidth <= 768;
  
  
            /*
            PC：
            同じ行の左→右に少し時間差
  
            スマホ：
            スクロールで1枚ずつライズ
            */
  
            let delay = 0;
  
  
            if (isMobile) {
  
              delay = 80;
  
            } else {
  
              delay = (index % 2) * 130;
  
            }
  
  
            setTimeout(() => {
  
              card.classList.add("show");
  
            }, delay);
  
  
            stylistObserver.unobserve(card);
  
          });
  
        },
  
        {
          threshold: 0.18
        }
  
      );
  
  
    stylistCards.forEach((card) => {
  
      stylistObserver.observe(card);
  
    });
  
  });

  document.addEventListener("DOMContentLoaded", () => {

    /* =========================
    プロフィール写真 5秒ごと切り替え
    ========================= */
    const profileSlides = document.querySelectorAll(".profile-slide");
  
    if (profileSlides.length > 0) {
      let currentSlide = 0;
  
      setInterval(() => {
        profileSlides[currentSlide].classList.remove("active");
  
        currentSlide = (currentSlide + 1) % profileSlides.length;
  
        profileSlides[currentSlide].classList.add("active");
      }, 5000);
    }
  
  
    /* =========================
    スマホ：スタイル写真 左からパン
    ========================= */
    const styleCards = document.querySelectorAll(".detail-style-card");
  
    if (styleCards.length > 0) {
      const styleObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
  
            const isMobile = window.innerWidth <= 768;
  
            if (isMobile) {
              const cards = Array.from(styleCards);
              const index = cards.indexOf(entry.target);
              const columns = 2;
              const delay = 90;
  
              setTimeout(() => {
                entry.target.classList.add("show");
              }, (index % columns) * delay);
            } else {
              entry.target.classList.add("show");
            }
  
            styleObserver.unobserve(entry.target);
          });
        },
        {
          threshold: 0.15
        }
      );
  
      styleCards.forEach((card) => {
        styleObserver.observe(card);
      });
    }
  
  });