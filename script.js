// Make playVideo globally accessible
function playVideo() {
  const video = document.getElementById("myVideo");
  video.play();
}

document.addEventListener("DOMContentLoaded", function () {
  const tagButtons = document.querySelectorAll(".tag");
  const cards = document.querySelectorAll(".message-card");

  tagButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedTag = button.dataset.tag;

      cards.forEach(card => {
        if (card.dataset.tag === selectedTag) {
          card.classList.add("show");
        } else {
          card.classList.remove("show");
        }
      });
    });
  });
});
