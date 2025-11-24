function openLetter() {
  const letter = document.getElementById("letter");
  const paragraphs = letter.querySelectorAll("p");
  const lastWord = letter.querySelector(".last-word");
  const music = document.getElementById("bg-music");

  let current = 0;
  letter.style.display = "block";

  // Mainkan musik saat tombol diklik
  music.play().catch(err => {
    console.error("Autoplay gagal:", err);
  });

  // Tampilkan paragraf satu per satu
  function fadeInNext() {
    if (current < paragraphs.length) {
      paragraphs[current].style.opacity = "1";
      current++;
      setTimeout(fadeInNext, 700); // jeda antar paragraf
    } else {
      lastWord.style.opacity = "1";
    }
  }

  fadeInNext();

  // Sembunyikan tombol setelah diklik
  document.querySelector(".open-btn").style.display = "none";
}
