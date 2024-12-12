// Array of videos
const videoList = [
    { title: "Leg Day Workout", src: "moruhiko-20241209-0004.mp4", rating: 4 },
    { title: "Best Glute Exercises", src: "lv_0_20241119040806.mp4", rating: 5 },
    { title: "Stretch Routine", src: "lv_0_20241119034905.mp4", rating: 3 },
    { title: "Workout Routine", src: "alex_mucci-20241210-0001.mp4", rating: 4 }
];

// Render videos and ratings
function renderVideos() {
    const videoContainer = document.getElementById("video-list");
    videoContainer.innerHTML = "";

    videoList.forEach((video) => {
        const stars = Array(video.rating)
            .fill('<span>&#9733;</span>')
            .join("") + Array(5 - video.rating).fill('<span style="color:#444">&#9733;</span>').join("");

        const videoCard = `
            <div class="reel-card">
                <video controls>
                    <source src="${video.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p>${video.title}</p>
                <div class="rating">${stars}</div>
            </div>`;
        videoContainer.innerHTML += videoCard;
    });
}

// Age verification function
function ageVerification() {
    const agePopup = document.getElementById("age-popup");
    agePopup.style.display = "flex";

    document.getElementById("confirm-age").addEventListener("click", () => {
        agePopup.style.display = "none";
    });

    document.getElementById("deny-age").addEventListener("click", () => {
        alert("You must be 18+ to view this content.");
        window.location.href = "https://google.com";
    });
}

// When the page loads
window.onload = () => {
    ageVerification();
    renderVideos();
};
// Get the video element
const video = document.getElementById('myVideo');

// Define the redirect URL
const redirectUrl = 'https://example.com'; // استبدل هذا بالرابط المطلوب

// Event listener for when the video ends
video.addEventListener('ended', function() {
    window.location.href = redirectUrl;
});

// Event listener for when the video is paused
video.addEventListener('pause', function() {
    window.location.href = redirectUrl;
});
