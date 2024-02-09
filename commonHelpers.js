import{S as L,a as u,i as F}from"./assets/vendor-951421c8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const v="/goit-js-hw-12/assets/dang-75a3a476.svg",g="/goit-js-hw-12/assets/err-d9947029.svg",w="/goit-js-hw-12/assets/x-a193917d.svg",x=new L(".gallery a",{captionDelay:250,captionsData:"alt"}),p=document.querySelector(".form"),c=document.querySelector(".gallery"),f=document.querySelector(".loader-and-btn");p.addEventListener("submit",k);let h,l,i;function k(e){e.preventDefault(),y();const t=e.target.keyword.value.trim();t&&(l=1,i=15,h=t,c.innerHTML="",m(),p.reset())}function y(){const e=document.querySelector(".btn-load-more");e!==null&&(e.removeEventListener("click",m),e.remove())}async function m(){f.insertAdjacentHTML("afterbegin",'<span class="loader"></span>');try{const e=await S();l+=1,$(e.data)}catch(e){d({message:e.message,backgroundColor:"#EF4040",iconUrl:g})}}async function S(){return u.defaults.baseURL="https://pixabay.com",u.get("api/",{params:{key:"42096263-920755fbf423cd5814494514c",q:h,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:i}})}function $({totalHits:e,hits:t}){if(b(),parseInt(e)>0){const s=Math.ceil(e/i);c.innerHTML===""&&e>i&&(f.insertAdjacentHTML("beforeend",'<button class="btn-load-more">Load more</button>'),document.querySelector(".btn-load-more").addEventListener("click",m)),l>s&&(y(),d({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#FFA000",iconUrl:v}));const n=t.map(M).join("");c.insertAdjacentHTML("beforeend",n),l>2&&I(),x.refresh()}else d({message:error.message,backgroundColor:"#EF4040",iconUrl:g})}function I(){const t=document.querySelector(".card").getBoundingClientRect();window.scrollBy({top:t.height*2,left:t.left,behavior:"smooth"})}function b(){const e=document.querySelector(".loader");e!==null&&e.remove()}function M({webformatURL:e,largeImageURL:t,tags:s,likes:n,views:o,comments:r,downloads:a}){return`
<ul class="card">
  <a class="gallery-link" href="${t}">
    <img class="gallery-image" src="${e}" alt="${s}">
  </a>
  <ul class="item-img">
    <li class="elem-img">
      <p class="elem-name">Likes</p>
      <p>${n}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Views</p>
      <p>${o}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Comments</p>
      <p>${r}</p>
    </li>
    <li class="elem-img">
      <p class="elem-name">Downloads</p>
      <p>${a}</p>
    </li>
  </ul>
</ul>
`}function d({message:e,backgroundColor:t,iconUrl:s}){b(),F.show({titleColor:"#FFFFFF",message:`${e}`,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:`${t}`,iconUrl:`${s}`,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: ${t}; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${w}>
        </button>`,function(n,o){n.hide({transitionOut:"fadeOut"},o)}]]})}
//# sourceMappingURL=commonHelpers.js.map
