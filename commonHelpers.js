import{S as y,a as d,i as m}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const b="/goit-js-hw-12/assets/dang-75a3a476.svg",F="/goit-js-hw-12/assets/err-d9947029.svg",p="/goit-js-hw-12/assets/x-a193917d.svg",L=new y(".gallery a",{captionDelay:250,captionsData:"alt"}),g=document.querySelector(".form"),i=document.querySelector(".gallery"),c=document.querySelector(".loader-and-btn");g.addEventListener("submit",x);let l,u=1;const f=15;function x(e){e.preventDefault(),w();const o=e.target.keyword.value.trim();o&&(l!==o&&(u=1),l=o,i.innerHTML="",c.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),h(),g.reset())}function w(){const e=document.querySelector(".btn-load-more");e!==null&&e.remove()}function h(){S().then(({data:e})=>v(e)).catch(e=>j(e))}async function S(){return d.defaults.baseURL="https://pixabay.com",await d.get("api/",{params:{key:"42096263-920755fbf423cd5814494514c",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:f}})}function v({totalHits:e,hits:o}){if(k(),parseInt(e)>0){i.innerHTML===""&&e>f&&c.insertAdjacentHTML("beforeend",'<button class="btn-load-more">Load more</button>');const r=o.map(M).join("");i.insertAdjacentHTML("beforeend",r),document.querySelector(".btn-load-more").addEventListener("click",q),L.refresh()}else $()}function k(){const e=document.querySelector(".loader");e!==null&&e.remove()}function q(){c.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),u+=1,h()}function M({webformatURL:e,largeImageURL:o,tags:r,likes:s,views:t,comments:n,downloads:a}){return`
<ul class="card">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${e}" alt="${r}">
  </a>
  <ul class="item-img">
    <li class="elem-img">
      <p class="elem-name">Likes</p>
      <p>${s}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Views</p>
      <p>${t}</p>
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
`}function $(){m.warning({title:"Sorry,",titleColor:"#FFFFFF",message:"there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:b,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${p}>
        </button>`,function(e,o){e.hide({transitionOut:"fadeOut"},o)}]]})}function j(e){m.show({title:"Error",titleColor:"#FFFFFF",message:`${e}`,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:F,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${p}>
        </button>`,function(o,r){o.hide({transitionOut:"fadeOut"},r)}]]})}
//# sourceMappingURL=commonHelpers.js.map
