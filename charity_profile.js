// Select the button and container
const volunteerBtn = document.getElementById("volunteerBtn");
const formContainer = document.getElementById("volunteerFormContainer");

// Event listener for button click
volunteerBtn.addEventListener("click", () => {
    // Check if the form already exists
    if (!formContainer.innerHTML) {
        formContainer.innerHTML = `
            <form id="volunteerForm" style="background-color: #f4f4f4; padding: 1rem; border-radius: 8px;">
                <h3>Volunteer Form</h3>
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Your Name" required><br><br>
                
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Your Email" required><br><br>
                
                <button type="submit">Submit</button>
            </form>
        `;

        // Handle form submission
        const volunteerForm = document.getElementById("volunteerForm");
        volunteerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            alert(`Thank you, ${name}! We'll contact you at ${email} soon.`);
            formContainer.style.display = "none"; // Hide form after submission
        });
    }

    // Display the form
    formContainer.style.display = "block";
});

const charityName = document.getElementById("charityName");
const charityDetails = document.getElementById("charityDetails");

charityName.addEventListener("mouseover", () => {
    charityDetails.style.display = "block";
});

charityName.addEventListener("mouseout", () => {
    charityDetails.style.display = "none";
});

