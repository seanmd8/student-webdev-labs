const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = async (url) => {
    // Retrieve the data from the API
    let raw_response = await fetch(url)
    let response = await raw_response.json();
    document.getElementById(`loading`).style.display = `none`;
    return response;
};

const display_data = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  let result = await fetchData(url);

  for(let book of result){
    let box = document.createElement(`div`);

    let title = document.createElement(`h2`);
    title.innerText = book.name;

    let author = document.createElement(`p`);
    author.innerText = `by ${book.authors.join(`, `)}`;

    let published = document.createElement(`p`);
    published.innerText = new Date(book.released).getFullYear();

    let pages = document.createElement(`p`);
    pages.innerText = `${book.numberOfPages} pages`;

    for(let element of [title, author, published, pages]){
        element.style.textAlign = `center`;
        box.append(element);
    }

    app.append(box);
  }
};

display_data(url);