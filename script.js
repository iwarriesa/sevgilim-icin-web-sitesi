// Başlangıçtaki tarih hesaplaması (sevgiliyle ne kadar süre geçirdiğimiz)
const startDate = new Date("2024-10-13"); // Sevgilinizle başladığınız tarih (13 Ekim 2024)
const counter = setInterval(function () {
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remainingDays = days % 30;
  
  // Ekranda gösterilecek bilgilerin güncellenmesi
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = remainingDays;
}, 1000);

// Video izleme fonksiyonu
function playVideo(videoFile) {
  const videoElement = document.getElementById("videoElement");
  const videoPlayer = document.getElementById("videoPlayer");
  const videoSource = document.getElementById("videoSource");

  videoSource.src = videoFile;
  videoElement.load();
  videoPlayer.style.display = "block";
  videoElement.play();
}

// Video player'ı kapatma fonksiyonu
function closeVideo() {
  const videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.style.display = "none";
  const videoElement = document.getElementById("videoElement");
  videoElement.pause();
  videoElement.currentTime = 0;
}
