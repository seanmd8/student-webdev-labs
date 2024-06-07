const url = 'https://anapioficeandfire.com/api/books/';

const app = $('#books');
app.css(`paddingLeft`, 0);
const loading = $('#loading');

const addBookToDOM = (item) => {
  console.log(item);

  /*
  let element = $(`<div></div>`);
  element.css(`display`, 'flex');
  element.css(`flexDirection`, 'column');
  element.css(`alignItems`, 'center');
  element.css(`marginTop`, '20px');
  let title = $(`<h4></h4>`);
  console.log(item.name);
  title.css(`innerText`, item.name);
  app.append(element);
  element.append(title);
  */
  app.append($('<div>')
    .css(`display`, 'flex')
    .css(`flexDirection`, 'column')
    .css(`alignItems`, 'center')
    .css(`marginTop`, '20px')
    .append($('<h4>').text(item.name))
    .append($('<p>').text(`by ${item.authors[0]}`))
    .append($('<p>').text(item.released.substr(0, 4)))
    .append($('<p>').text(`${item.numberOfPages} pages`))
  )
};

const fetchData = (url) => {
    $.get(url, (response, status) => {
        response.forEach((item) => {
            addBookToDOM(item);
        });
        loading.remove();
    });
};

fetchData(url);
