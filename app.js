
(function(){
 const root=document.documentElement;
 const saved=localStorage.getItem('mca301-theme');
 if(saved) root.dataset.theme=saved;
 const t=document.getElementById('themeToggle');
 if(t)t.onclick=()=>{const dark=root.dataset.theme!=='dark'; if(dark)root.dataset.theme='dark';else delete root.dataset.theme;localStorage.setItem('mca301-theme',dark?'dark':'light')};
 const q=document.getElementById('searchBox'), r=document.getElementById('searchResults');
 if(q && r && window.MCA301_INDEX){
   q.addEventListener('input',()=>{
     const term=q.value.trim().toLowerCase();
     if(!term){r.innerHTML='';return}
     const hits=MCA301_INDEX.filter(x=>(x.title+' '+x.text+' '+x.unit).toLowerCase().includes(term)).slice(0,20);
     r.innerHTML=hits.length?hits.map(x=>`<div class="result"><a href="${x.url}"><b>${x.title}</b></a><span>${x.unit} · ${x.text.slice(0,180)}…</span></div>`).join(''):'<div class="result">No matching lesson found.</div>';
   });
 }
})();
