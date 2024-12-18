// Homepage Alert
function showAlert() {
    alert('Thank you for visiting my portfolio!');
}

// Update Skills Alert
function updateSkills() {
    alert('Skills updated successfully!');
}

// Highlight Project
function highlightProject(projectName) {
    alert(`Project selected: ${projectName}`);
}

// Play Video
function playVideo() {
    const video = document.getElementById('myVideo');
    video.play();
}

// Validate Form
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
        return false;
    }
    alert('Thank you for your feedback!');
    return true;
}
