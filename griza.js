const emojis = document.querySelectorAll(".emoji-img");
const emojisImgs = document.querySelector(".emojis");
const submitBtn = document.querySelector(".submit");
const zadovolstvoSection = document.querySelector(".zadovolstvo");
const responseSection = document.querySelector(".response");

emojis.forEach((emoji) => {
  emoji.addEventListener("click", (e) => {
    emojisImgs.classList.add("hidden");
    const clicked = e.target;
    console.log(clicked);
    document
      .querySelector(`.griza-klienti_form-${clicked.dataset.tab}`)
      .classList.add("activeKorisnici");
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  zadovolstvoSection.classList.add("hidden");
  responseSection.classList.add("activeKorisnici");
  sendEmail();
});

(function () {
  emailjs.init("YOUR_USER_ID");
})();

function sendEmail() {
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      to_name: "Recipient Name",
      message: "This is the email message.",
    })
    .then(function (response) {
      console.log("Email sent:", response);
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
    });
}
