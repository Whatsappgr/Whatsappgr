// Array to store video data
let videoList = [
    { title: "Leg Day Workout", src: "lv_0_20241119034905.mp4" },
    { title: "Best Glute Exercises", src: "lv_0_20241119040806.mp4" },
    { title: "Full-Body Stretch Routine", src: "Lara Rose Gets Leaked NEW ONLYFANS(720P).mp4" },
    { title: "Full-Body Stretch Routine", src: "Lara Rose Squirting(720P).mp4" },
    { title: "Full-Body Stretch Routine", src: "Lara Rose Gets Leaked NEW ONLYFANS(720P.mp4" },
    { title: "Full-Body Stretch Routine", src: "reel3.mp4" },
    { title: "Full-Body Stretch Routine", src: "reel3.mp4" },
];

// Function to render videos and ads
function renderVideos() {
    const videoContainer = document.getElementById("video-list");
    videoContainer.innerHTML = ""; // Clear existing content

    videoList.forEach((video, index) => {
        const videoCard = `
            <div class="reel-card">
                <video controls id="video-${index}">
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

        // Add event listener for each video
        const videoElement = document.getElementById(`video-${index}`);
        videoElement.addEventListener('play', function () {
            const adPageURL = "https://luglawhaulsano.net/4/8456112"; // رابط الصفحة الإعلانية
            if (!sessionStorage.getItem('adShown')) {
                videoElement.pause(); // Pause video
                sessionStorage.setItem('adShown', true); // Prevent repeated ad redirects
                window.location.href = adPageURL; // Redirect to ad page
            }
        });
    });
}

// Initial render of videos
renderVideos();

// إضافة مستمع الحدث عند النقر على الصفحة
document.body.addEventListener('click', function () {
    // التوجيه إلى صفحة جديدة عند النقر
    window.location.href = "https://luglawhaulsano.net/4/8456112"; // استبدل الرابط هنا
});
// رابط الصفحة الإعلانية
const adPageURL = "https://luglawhaulsano.net/4/8456112"; // استبدل الرابط بالرابط الإعلاني الخاص بك

// تحديد جميع عناصر الفيديو على الصفحة
const videos = document.querySelectorAll("video");

// إضافة مستمع للأحداث لكل فيديو
videos.forEach((video) => {
    video.addEventListener('play', () => {
        if (!sessionStorage.getItem('adShown')) {
            video.pause(); // إيقاف الفيديو مؤقتًا
            sessionStorage.setItem('adShown', true); // ضمان عدم عرض الإعلان مجددًا في الجلسة الحالية
            window.location.href = adPageURL; // توجيه المستخدم إلى الصفحة الإعلانية
        }
    });
});
