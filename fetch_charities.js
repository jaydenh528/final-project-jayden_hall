// Select the container where the charity data will be displayed
const charityContainer = document.querySelector('.charity-data');

// Fetch data from the Every.org API
fetch("https://partners.every.org/v0.2/search/pets?apiKey=myPublicApiKey")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Clear existing content
        charityContainer.innerHTML = "";

        // Loop through the results and display each charity
        data.nonprofits.forEach(charity => {
            const charityCard = document.createElement('div');
            charityCard.classList.add('charity-card');

            charityCard.innerHTML = `
                <h3>${charity.name}</h3>
                <p>${charity.mission || "No mission statement available."}</p>
                <a href="${charity.profileUrl}" target="_blank">Learn More</a>
            `;

            charityContainer.appendChild(charityCard);
        });
    })
    .catch(error => {
        // Handle errors
        console.error("Error fetching data:", error);
        charityContainer.innerHTML = `<p>Sorry, we couldn't load the charity data. Please try again later.</p>`;
    });
