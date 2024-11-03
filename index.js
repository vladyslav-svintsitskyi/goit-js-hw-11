import{i as a,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="46861440-5100b639d37c0efc8464b7fe2",l=document.querySelector(".loader");function d(s,i){const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return l.style.display="block",fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{t.hits.length===0&&a.error({title:"No pictures found",message:"Sorry, there are no images matching your search query. Please try again",timeout:2500,closeOnClick:!0}),l.style.display="none",i(t.hits)}).catch(t=>console.log(t))}const g=new h(".gallery a",{captionData:"alt"});function p(s){const i=s.map(({webformatURL:o,largeImageURL:t,tags:e,likes:r,views:n,comments:u,downloads:f})=>`
      <li class='gallery-item' >
        <a href='${t}' class="gallery-image">
          <img src='${o}' alt='${e} '>
        </a>
        <ul class="info-list">
          <li class="info-list-item">
            <h2 class="info-heading">Likes</h2>
            <p class="info-text">${r}</p>
          </li>
          <li class="info-list-item">
            <h2 class="info-heading">Views</h2>
            <p class="info-text">${n}</p>
          </li>
          <li class="info-list-item">
            <h2 class="info-heading">Comments</h2>
            <p class="info-text">${u}</p>
          </li>
          <li class="info-list-item">
            <h2 class="info-heading">Downloads</h2>
            <p class="info-text">${f}</p>
          </li>
        </ul>
      </li>
      `).join("");c.innerHTML=i,g.refresh()}const y=document.querySelector(".search-form"),c=document.querySelector(".gallery");y.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const i=s.currentTarget.elements.tag.value;if(i.trim()===""){a.warning({title:"Missing tags",message:"Please enter a search tag!",closeOnClick:!0});return}d(i,p)});
//# sourceMappingURL=index.js.map
