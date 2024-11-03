import fetchData from './js/pixabay-api';
import renderGallery from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.search-form');
export const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';

  const tagValue = event.currentTarget.elements.tag.value;
  if (tagValue.trim() === '') {
    iziToast.warning({
      title: 'Missing tags',
      message: 'Please enter a search tag!',
      closeOnClick: true,
    });
    return;
  }
  fetchData(tagValue, renderGallery);
});
