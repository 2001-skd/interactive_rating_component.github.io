let ratingButton = document.querySelectorAll("ul li");
let submitButton = document.querySelector("button");
let rating = document.querySelector(".user_rating");
let ratingCard = document.querySelector(".rating_card");
let thankYouCard = document.querySelector(".thanks_card");
let userRating = 0;

submitButton.onclick = showThankYou;

ratingButton.forEach((btn) =>
  btn.addEventListener("click", () => {
    userRating = btn.textContent;
    ratingButton.forEach((button) => button.classList.remove("selected"));
    btn.classList.add("selected");

    // console.log(btn.innerHTML);
    // console.log("userrating inside", userRating);
    // userRating = btn.innerHTML;
    // return btn.innerHTML;
  })
);

function showThankYou() {
  rating.innerText = userRating;
  thankYouCard.style.display = "block";
  ratingCard.style.display = "none";
  console.log(`You selected ${userRating} out of 5`);
}
