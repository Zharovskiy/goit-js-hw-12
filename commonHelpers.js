import{S as x,a as p,i as f}from"./assets/vendor-951421c8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const v="/goit-js-hw-12/assets/dang-75a3a476.svg",w="/goit-js-hw-12/assets/err-d9947029.svg",h="/goit-js-hw-12/assets/x-a193917d.svg",S=new x(".gallery a",{captionDelay:250,captionsData:"alt"}),y=document.querySelector(".form"),c=document.querySelector(".gallery"),m=document.querySelector(".loader-and-btn");y.addEventListener("submit",q);let b,l=1,s=15,u;function q(e){e.preventDefault(),F(),k();const t=e.target.keyword.value.trim();t&&(l=1,s=15,b=t,c.innerHTML="",d(),y.reset())}function F(){const e=document.querySelector(".btn-load-more");e!==null&&(e.removeEventListener("click",L),e.remove())}function k(){const e=document.querySelector(".is-not-images");e!==null&&e.remove()}function d(){m.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),C().then(({data:e})=>{l+=1,M(e)}).catch(e=>R(e))}async function C(){return p.defaults.baseURL="https://pixabay.com",await p.get("api/",{params:{key:"42096263-920755fbf423cd5814494514c",q:b,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:s}})}function L(){const e=u%s,t=(u-e)/s+1;l===t?(s=e,d(),F(),m.insertAdjacentHTML("beforeend",`<p class="is-not-images">We're sorry, but you've reached the end of search results.</p>`)):d()}function M({totalHits:e,hits:t}){if(g(),parseInt(e)>0){u=e,c.innerHTML===""&&e>s&&(m.insertAdjacentHTML("beforeend",'<button class="btn-load-more">Load more</button>'),document.querySelector(".btn-load-more").addEventListener("click",L));const r=t.map(j).join("");c.insertAdjacentHTML("beforeend",r),l>2&&$(),S.refresh()}else I()}function $(){const t=document.querySelector(".card").getBoundingClientRect();window.scrollBy({top:t.height*2,left:t.left,behavior:"smooth"})}function g(){const e=document.querySelector(".loader");e!==null&&e.remove()}function j({webformatURL:e,largeImageURL:t,tags:r,likes:i,views:o,comments:n,downloads:a}){return`
<ul class="card">
  <a class="gallery-link" href="${t}">
    <img class="gallery-image" src="${e}" alt="${r}">
  </a>
  <ul class="item-img">
    <li class="elem-img">
      <p class="elem-name">Likes</p>
      <p>${i}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Views</p>
      <p>${o}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Comments</p>
      <p>${n}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Downloads</p>
      <p>${a}</p>
    </li>
  </ul>
</ul>
`}function I(){g(),f.warning({title:"Sorry,",titleColor:"#FFFFFF",message:"there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:v,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${h}>
        </button>`,function(e,t){e.hide({transitionOut:"fadeOut"},t)}]]})}function R(e){g(),f.show({title:"Error",titleColor:"#FFFFFF",message:`${e}`,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:w,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${h}>
        </button>`,function(t,r){t.hide({transitionOut:"fadeOut"},r)}]]})}
//# sourceMappingURL=commonHelpers.js.map
