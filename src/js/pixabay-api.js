import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '46861440-5100b639d37c0efc8464b7fe2';
const loader = document.querySelector('.loader');

function fetchData(tag, renderFunction) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: tag,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  loader.style.display = 'block';

  return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'No pictures found',
          message:
            'Sorry, there are no images matching your search query. Please try again',
          timeout: 2500,
          closeOnClick: true,
        });
      }

      loader.style.display = 'none';

      renderFunction(data.hits);
    })
    .catch(error => console.log(error));
}

export default fetchData;
