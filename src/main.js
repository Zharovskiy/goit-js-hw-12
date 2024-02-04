import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import dangIcon from './img/dang.svg';
import errorIcon from './img/err.svg';
import xIcon from './img/x.svg';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});

const form = document.querySelector('.form');
const imageList = document.querySelector('.gallery');
const loadBtn = document.querySelector('.loader-and-btn');

form.addEventListener('submit', onSearch);

let memoryInput;
let pageNamber = 1;
const perPage = 15;

function onSearch (event) {
  event.preventDefault();
  onBtnRemove();
  const keyWord = event.target.keyword.value.trim();
  if (keyWord) {
    if(memoryInput !== keyWord) {
      pageNamber = 1;
    }
    memoryInput = keyWord;
    imageList.innerHTML = '';
    loadBtn.insertAdjacentHTML('afterbegin', '<span class="loader"></span>');
    onRequest();
    form.reset();
  }
}

function onBtnRemove () {
  const btnLoadMore = document.querySelector('.btn-load-more');
  if(btnLoadMore !== null) {
    btnLoadMore.remove();
  }
}

function onRequest () {
  axiosRequest()
    .then(({data}) => renderImage(data))
    .catch((error) => onRejected(error));
}

async function axiosRequest() {
  axios.defaults.baseURL = 'https://pixabay.com';
  return await axios.get('api/', {
    params: {
      key: '42096263-920755fbf423cd5814494514c',
      q: memoryInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pageNamber,
      per_page: perPage
    }
  });
}

function renderImage({totalHits, hits}) {
  onLoaderRemove();
  if (parseInt(totalHits) > 0) {
    if (imageList.innerHTML === '' && totalHits > perPage) {
      loadBtn.insertAdjacentHTML('beforeend', '<button class="btn-load-more">Load more</button>');
    }
    const markup = hits.map(createElementGallery).join('');
    imageList.insertAdjacentHTML('beforeend', markup);
    
    const btnLoadMore = document.querySelector('.btn-load-more');
    btnLoadMore.addEventListener('click', loadMoreImages);
    lightbox.refresh();
  }else{
    onWarning();
  }    
}

function onLoaderRemove () {
  const loader = document.querySelector('.loader');
  if(loader !== null) {
    loader.remove();
  }
}

function loadMoreImages () {
  loadBtn.insertAdjacentHTML('afterbegin', '<span class="loader"></span>');
  pageNamber += 1;
  onRequest();
}

function createElementGallery({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
  return `
<ul class="card">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}">
  </a>
  <ul class="item-img">
    <li class="elem-img">
      <p class="elem-name">Likes</p>
      <p>${likes}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Views</p>
      <p>${views}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Comments</p>
      <p>${comments}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Downloads</p>
      <p>${downloads}</p>
    </li>
  </ul>
</ul>
`}

function onWarning() {
  iziToast.warning({
    title: 'Sorry,',
    titleColor: '#FFFFFF',
    message: 'there are no images matching your search query. Please try again!',
    messageColor: '#FFFFFF',
    messageSize: '16px',
    backgroundColor: '#FFA000',
    iconUrl: dangIcon,
    position: 'center',
    close: false,
    buttons: [
      [
        `<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${xIcon}>
        </button>`,
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast);
        },
      ],
    ]
  });
}

function onRejected(error) {
  iziToast.show({
    title: 'Error',
    titleColor: '#FFFFFF',
    message: `${error}`,
    messageColor: '#FFFFFF',
    messageSize: '16px',
    backgroundColor: '#EF4040',
    iconUrl: errorIcon,
    position: 'topRight',
    close: false,
    buttons: [
      [
        `<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${xIcon}>
        </button>`,
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast);
        },
      ],
    ]
  });
};

