async function fetchBooks() {
    try {
        const response = await fetch('/api/books');
        const books = await response.json();
        const listDiv = document.getElementById('book-list');
        
        // Clear the "Loading" text
        listDiv.innerHTML = '';

        // Render the title and author for each book
        books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'book-item';
            bookDiv.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
            listDiv.appendChild(bookDiv);
        });
    } catch (err) {
        console.error("Error fetching books:", err);
        document.getElementById('book-list').innerText = "Failed to load books.";
    }
}

// Execute the fetch when the window loads
window.onload = fetchBooks;