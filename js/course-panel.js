// card content
function switchContent(tab) {
    const cardContent = document.getElementById("card-content");
    const tabs = document.querySelectorAll(".tab");

    // Remove active class from all tabs
    tabs.forEach((tabElement) => tabElement.classList.remove("active"));

    // Add active class to the clicked tab
    if (tab === "personal") {
        tabs[0].classList.add("active");

        // Update content for Personal
        cardContent.innerHTML = `
        <h3>Subscribe to Udemy's top courses</h3>
        <p>Get this course, plus 12,000+ of our top-rated courses, with Personal Plan. <a href="#">Learn more</a></p>
        <button class="btn-subscribe">Start subscription</button>
        <p class="subscription-info">Starting at ₹850 per month<br>Cancel anytime</p>
        <hr>
        <p class="price">₹1,999</p>
        <button class="btn-add-to-cart">Add to cart</button>
        <p class="guarantee">30-Day Money-Back Guarantee<br>Full Lifetime Access</p>
        <div class="coupon-section">
          <p>KEEPLEARNING is applied</p>
          <div class="apply-coupon">
            <input type="text" placeholder="Enter Coupon">
            <button class="btn-apply">Apply</button>
          </div>
        </div>
      `;
    } else if (tab === "teams") {
        tabs[1].classList.add("active");

        // Update content for Teams
        cardContent.innerHTML = `
        <h3>TechXpert Business Plan</h3>
        <p>Get access to team-wide learning with courses, certifications, and enterprise-grade analytics. <a href="#">Learn more</a></p>
        <button class="btn-subscribe">Start Business Plan</button>
        <p class="subscription-info">Custom pricing based on team size<br>Cancel anytime</p>
        <hr>
        <p class="price">Contact for pricing</p>
        <button class="btn-add-to-cart">Contact Sales</button>
        <p class="guarantee">Custom plans for companies<br>Dedicated support team</p>
      `;
    }
}


//pop-up video content
const playButton = document.getElementById("playButton");
const videoPopup = document.getElementById("videoPopup");
const closeButton = document.getElementById("closeButton");
const videoIframe = videoPopup.querySelector("iframe");

// Function to open the video popup

playButton.addEventListener("click", () => {
    videoPopup.style.display = "block";
});

// Function to close the video popup
closeButton.addEventListener("click", () => {
    videoPopup.style.display = "none";
    // Stop the video by resetting the iframe src
    videoIframe.src = "";
});

// Close the popup if the user clicks outside of the popup content
window.addEventListener("click", (event) => {
    if (event.target === videoPopup) {
        videoPopup.style.display = "none";
        // Stop the video by resetting the iframe src
        videoIframe.src = "";
    }
});