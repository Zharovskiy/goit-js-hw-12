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
let pageNumber = 1;
let perPage = 15;
let totalQuntityImg;


function onSearch (event) {
  event.preventDefault();
  onBtnRemove();
  onMessageRemove();
  const keyWord = event.target.keyword.value.trim();
  if (keyWord) {
    pageNumber = 1;
    perPage = 15;
    memoryInput = keyWord;
    imageList.innerHTML = '';
    onRequest();
    form.reset();
  }
}

function onBtnRemove () {
  const btnLoadMore = document.querySelector('.btn-load-more');
  if(btnLoadMore !== null) {
    btnLoadMore.removeEventListener('click', maxQuntityPage);
    btnLoadMore.remove();
  }
}

function onMessageRemove () {
  const message = document.querySelector('.is-not-images');
  if(message !== null) {
    message.remove();
  }
}

function onRequest () {
  loadBtn.insertAdjacentHTML('afterbegin', '<span class="loader"></span>');
  axiosRequest()
    .then(({data}) => {
      pageNumber += 1;
      renderImage(data)
    })
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
      page: pageNumber,
      per_page: perPage
    }
  });
}

function maxQuntityPage () {
  const remainder = totalQuntityImg % perPage;
  const quantityPage = ((totalQuntityImg - remainder) / perPage) + 1; 
  if (pageNumber === quantityPage) {
    perPage = remainder;
    onRequest();
    onBtnRemove();
    loadBtn.insertAdjacentHTML('beforeend', `<p class="is-not-images">We're sorry, but you've reached the end of search results.</p>`);
  } else {
    onRequest();
  }
}

function renderImage({totalHits, hits}) {
  onLoaderRemove();
  if (parseInt(totalHits) > 0) {
    totalQuntityImg = totalHits;

    if (imageList.innerHTML === '' && totalHits > perPage) {
      loadBtn.insertAdjacentHTML('beforeend', '<button class="btn-load-more">Load more</button>');
      const btnLoadMore = document.querySelector('.btn-load-more');
      btnLoadMore.addEventListener('click', maxQuntityPage);
    }

    const markup = hits.map(createElementGallery).join('');
    imageList.insertAdjacentHTML('beforeend', markup);

    if (pageNumber > 2) {
      onScroll();
    }
    
    lightbox.refresh();
  }else{
    onWarning();
  }    
}

function onScroll () {
  const elemCard = document.querySelector('.card');
  const getItemCoords = elemCard.getBoundingClientRect();
  window.scrollBy({
    top: getItemCoords.height * 2,
    left: getItemCoords.left, 
    behavior: 'smooth',
  });
}

function onLoaderRemove () {
  const loader = document.querySelector('.loader');
  if(loader !== null) {
    loader.remove();
  }
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
  onLoaderRemove();
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
  onLoaderRemove();
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

