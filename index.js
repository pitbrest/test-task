const forBtnsHandler = () => {
  const handledData = [
    {
      title: "For travelers",
      src: "./assets/images/for/img-1.png",
    },
    {
      title: "For travel organization",
      src: "./assets/images/for/img-2.png",
    },
    {
      title: "For employees",
      src: "./assets/images/for/img-3.png",
    },
  ];
  const handledBtns = document.querySelectorAll(".for-button");

  const cardTitle = document.querySelector(".for-card__title");
  const cardImg = document.querySelector(".for-card__img");

  const btnsStyleHandler = (e) => {
    Array.from(handledBtns).forEach((i, idx) => {
      if (idx === +e.currentTarget.id - 1) {
        !i.classList.contains("btn-active") ? i.classList.add("btn-active") : undefined;
      }
      if (idx !== +e.currentTarget.id - 1) {
        i.classList.contains("btn-active") ? i.classList.remove("btn-active") : undefined;
      }
    });
  };

  const btnsHandler = (e) => {
    switch (e.currentTarget.id) {
      case "1":
        cardTitle.innerHTML = handledData[0].title;
        cardImg.src = handledData[0].src;
        btnsStyleHandler(e);

        break;
      case "2":
        cardTitle.innerHTML = handledData[1].title;
        cardImg.src = handledData[1].src;
        btnsStyleHandler(e);
        break;
      case "3":
        cardTitle.innerHTML = handledData[2].title;
        cardImg.src = handledData[2].src;
        btnsStyleHandler(e);
        break;
      default:
        break;
    }
  };

  Array.from(handledBtns).forEach((i) => i.addEventListener("click", btnsHandler));

  window.addEventListener("beforeunload", () => {
    Array.from(handledBtns).forEach((i) => i.removeEventListener("click", btnsHandler));
  });
};

forBtnsHandler();
