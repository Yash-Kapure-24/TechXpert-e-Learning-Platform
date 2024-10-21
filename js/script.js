
// loading

// Function to check network speed and show website content
function checkNetworkSpeedAndShowContent() {
  // Record the start time
  var startTime = performance.now();

  // Simulate network speed check with a setTimeout
  setTimeout(function () {
    // Calculate the time taken for the network speed check
    var endTime = performance.now();
    var loadingTime = endTime - startTime;

    // Simulate network speed (you can replace this with actual network speed measurement)
    var networkSpeed = loadingTime < 1000 ? 'fast' : 'slow'; // Adjust the threshold as needed

    // Hide the loader and show the website content based on network speed
    var loaderContainer = document.querySelector('.loader-container');
    var websiteContent = document.getElementById('website-content');

    if (networkSpeed === 'fast') {
      // Simulate fast loading by hiding the loader immediately and showing the website content
      loaderContainer.style.display = 'none';
      websiteContent.style.display = 'block';
    } else {
      // Simulate slow loading by delaying the display of website content
      setTimeout(function () {
        loaderContainer.style.display = 'none';
        websiteContent.style.display = 'block';
      }, 3000); // Adjust the delay as needed
    }
  }, 3000); // Simulate network speed check taking 3 seconds
}

// Call the function to check network speed and show content when the page loads
checkNetworkSpeedAndShowContent();
