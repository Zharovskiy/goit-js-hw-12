import{S as L,a as m,i as F}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const v="/goit-js-hw-12/assets/dang-75a3a476.svg",p="/goit-js-hw-12/assets/err-d9947029.svg",w="/goit-js-hw-12/assets/x-a193917d.svg",x=new L(".gallery a",{captionDelay:250,captionsData:"alt"}),f=document.querySelector(".form"),c=document.querySelector(".gallery"),g=document.querySelector(".loader-and-btn");f.addEventListener("submit",S);let h,l,i;function S(e){e.preventDefault(),y();const o=e.target.keyword.value.trim();o&&(l=1,i=15,h=o,c.innerHTML="",d(),f.reset())}function y(){const e=document.querySelector(".btn-load-more");e!==null&&(e.removeEventListener("click",d),e.remove())}function d(){g.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),k().then(({data:e})=>{l+=1,$(e)}).catch(e=>u({message:e,backgroundColor:"#EF4040",iconUrl:p}))}async function k(){return m.defaults.baseURL="https://pixabay.com",await m.get("api/",{params:{key:"42096263-920755fbf423cd5814494514c",q:h,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:i}})}function $({totalHits:e,hits:o}){if(b(),parseInt(e)>0){const s=Math.ceil(e/i);c.innerHTML===""&&e>i&&(g.insertAdjacentHTML("beforeend",'<button class="btn-load-more">Load more</button>'),document.querySelector(".btn-load-more").addEventListener("click",d)),l>s&&(y(),u({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#FFA000",iconUrl:v}));const r=o.map(C).join("");c.insertAdjacentHTML("beforeend",r),l>2&&q(),x.refresh()}else u({message:error,backgroundColor:"#EF4040",iconUrl:p})}function q(){const o=document.querySelector(".card").getBoundingClientRect();window.scrollBy({top:o.height*2,left:o.left,behavior:"smooth"})}function b(){const e=document.querySelector(".loader");e!==null&&e.remove()}function C({webformatURL:e,largeImageURL:o,tags:s,likes:r,views:t,comments:n,downloads:a}){return`
<ul class="card">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${e}" alt="${s}">
  </a>
  <ul class="item-img">
    <li class="elem-img">
      <p class="elem-name">Likes</p>
      <p>${r}</p>
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
`}function u({message:e,backgroundColor:o,iconUrl:s}){b(),F.show({titleColor:"#FFFFFF",message:`${e}`,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:`${o}`,iconUrl:`${s}`,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: ${o}; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${w}>
        </button>`,function(r,t){r.hide({transitionOut:"fadeOut"},t)}]]})}
//# sourceMappingURL=commonHelpers.js.map
