document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".hero-content").classList.add("show");
    }, 2000); // 2-second delay before text fades in
});
document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("bg-video");
    video.play().catch(error => {
        console.log("Autoplay prevented. User interaction required.");
    });
});
