let allBooks = [];

// Fetch books from API
fetch('http://localhost:3000/api/books')
  .then(response => response.json())
  .then(data => {
    allBooks = data;
    displayBooks(allBooks);
  });

// Display books
function displayBooks(books) {
  const container = document.getElementById('book-list');
  container.innerHTML = '';

  books.forEach(book => {
    container.innerHTML += `
      <div class="col s12 m4">
        <div class="card hoverable">
          <div class="card-image">
            <img src="${book.image}">
            <span class="card-title">${book.title}</span>
          </div>
          <div class="card-content">
            <p><b>Author:</b> ${book.author}</p>
            <p>${book.description}</p>
          </div>
        </div>
      </div>
    `;
  });
}

// Search functionality
document.getElementById('search').addEventListener('input', function () {
  const value = this.value.toLowerCase();

  const filtered = allBooks.filter(book =>
    book.title.toLowerCase().includes(value) ||
    book.author.toLowerCase().includes(value)
  );

  displayBooks(filtered);
});