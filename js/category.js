function searchCourses() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      card.style.display = title.includes(input) ? 'block' : 'none';
    });
  }