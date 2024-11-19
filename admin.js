// Admin Password
const adminPassword = "FUckyou111@#"; // كلمة السر الخاصة بك

// Handle Login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
    const adminPanel = document.getElementById("admin-panel");
    const loginSection = document.getElementById("login-section");

    if (password === adminPassword) {
        // Hide login and show admin panel
        loginSection.style.display = "none";
        adminPanel.style.display = "block";
    } else {
        // Display error message if password is incorrect
        errorMsg.style.display = "block";
    }
});

// Handle Video Upload
const videoList = JSON.parse(localStorage.getItem("videoList")) || [];

document.getElementById("upload-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const videoTitle = document.getElementById("video-title").value;
    const videoFile = document.getElementById("video-file").files[0];

    if (videoFile) {
        const videoURL = URL.createObjectURL(videoFile);

        // Add video to the list
        videoList.push({ title: videoTitle, src: videoURL });
        localStorage.setItem("videoList", JSON.stringify(videoList));

        alert("Video uploaded successfully!");
        document.getElementById("upload-form").reset();
    } else {
        alert("Please select a video file.");
    }
});
