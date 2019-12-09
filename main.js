const logFormToConsole = () => {
  const form = document.querySelector(".contact__form");
  const logOnSubmit = e => {
    e.preventDefault();
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData);
    console.log(formEntries);
  };
  form.addEventListener("submit", logOnSubmit);
};

const greetOnTicketBuy = () => {
  const concertsContainer = document.querySelector(".concerts");
  const switchButtonToText = e => {
    if (e.target.type === "submit") {
      const textNode = document.createElement("div");
      textNode.innerHTML = "Have fun!";
      e.target.replaceWith(textNode);
      e.target.remove();
    }
  };
  concertsContainer.addEventListener("click", switchButtonToText);
};

const hamburgerHandler = () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const toggleVisibility = e => {
    const navigation = document.querySelector(".page-navigation");
    navigation.classList.toggle("invisible");
  };
  hamburgerMenu.addEventListener("click", toggleVisibility);
};

hamburgerHandler();
greetOnTicketBuy();
logFormToConsole();
