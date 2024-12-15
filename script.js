document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const videoFile = document.getElementById('videoFile').files[0];
    const formData = new FormData();
    formData.append('video', videoFile);

    // Send the video file to the backend
    fetch('/reverse', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Set the source of the video element to the reversed video URL
            const reversedVideo = document.getElementById('reversedVideo');
            reversedVideo.src = data.videoUrl;
            reversedVideo.style.display = 'block';
        } else {
            alert('Error reversing video: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while processing the video.');
    });
});