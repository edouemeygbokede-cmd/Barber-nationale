/* Barber Nationale — menu mobile, année et horaires du jour */
(function(){
  var nav=document.getElementById('nav'),btn=document.getElementById('menuBtn');
  var year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  function closeMenu(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Ouvrir le menu');btn.textContent='☰';}
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(o));btn.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu');btn.textContent=o?'×':'☰';});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});
  window.addEventListener('resize',function(){if(window.innerWidth>1024)closeMenu();});

  /* Horaires : met en avant le jour en cours (page Sans rendez-vous) */
  var now=new Date(),dd=now.getDay(),row=document.querySelector('#hours [data-d="'+dd+'"]');
  if(row){row.classList.add('today');
    var sl=[[10,19],[9.5,20],[9.5,20],[9.5,20],[9.5,20],[9.5,21],[9.5,21]][dd],h=now.getHours()+now.getMinutes()/60;
    function fmt(x){var m=Math.round((x%1)*60);return Math.floor(x)+'h'+(m?String(m).padStart(2,'0'):'');}
    document.getElementById('openNow').textContent=(h>=sl[0]&&h<sl[1])?'Ouvert en ce moment, jusqu’à '+fmt(sl[1])+'.':'Fermé en ce moment. Aujourd’hui : '+fmt(sl[0])+' – '+fmt(sl[1])+'.';}
})();
