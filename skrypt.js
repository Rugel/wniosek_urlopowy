      function zapisz(){
const pracownik = document.getElementById('employee').value;
const budowa = document.getElementById('build').value;
const stanowisko=document.getElementById('engagement').value;
const rodz_url = document.getElementById('urlop').value;
const rok1 = document.getElementById('r1').value;
const rok2 = document.getElementById('r2').value;
const from = document.getElementById('od').value;
const to = document.getElementById('do').value;
const uzasad = document.getElementById('uza').value;
const miej = document.getElementById('miej').value;
const data = document.getElementById('data').value;

document.getElementById('button').innerHTML='<button id="druk" onclick=window.print()>DRUKUJ</button>'
document.title=`${pracownik} (urlop)`;

pracownik?document.getElementById('pracow').innerHTML=`<span class='ins_dys'>${pracownik}</span>`: document.getElementById('pracow').innerHTML=`<span class='to_r'>........................................................................................................................................................................</span>`;

budowa?document.getElementById('budowa').innerHTML=`<span class='ins_dys'>${budowa}</span>` : document.getElementById('budowa').innerHTML=`<span class='to_r'>........................................................................................................................................................................</span>`;

stanowisko?document.getElementById('stan').innerHTML=`<span class='ins_dys'>${stanowisko}</span>`:document.getElementById('stan').innerHTML=`<span class='to_r'>........................................................................................................................................................................</span>`;

if(rodz_url=='WYPOCZYNKOWEGO')
      {document.getElementById('rodz_u').innerHTML=`<span class='ins'> ${rodz_url}</span> /<s>OKOLICZNOŚCIOWEGO</s> /<s>BEZPŁATNEGO</s>`}
       else if(rodz_url=='OKOLICZNOŚCIOWEGO'){document.getElementById('rodz_u').innerHTML=` <s>WYPOCZYNKOWEGO</s> /<span class='ins'> ${rodz_url}</span> /<s>BEZPŁATNEGO</s>`} 
       else if(rodz_url=='BEZPŁATNEGO'){document.getElementById('rodz_u').innerHTML=` <s>WYPOCZYNKOWEGO</s>  /<s>OKOLICZNOŚCIOWEGO</s> /<span class='ins'>${rodz_url}</span>`}
       else if(!rodz_url){document.getElementById('rodz_u').innerHTML='WYPOCZYNKOWEGO /OKOLICZNOŚCIOWEGO /BEZPŁATNEGO '};

rok1?document.getElementById('rok1').innerHTML=`<span class='ins'> ${rok1} </span>`:document.getElementById('rok1').innerHTML='....................................';

rok2?document.getElementById('rok2').innerHTML=`<span class='ins'> ${rok2} </span>`:document.getElementById('rok2').innerHTML='....................................';

from?document.getElementById('from').innerHTML=`<span class='ins'> ${from} </span>`:document.getElementById('from').innerHTML='...........................................';

to?document.getElementById('to').innerHTML=`<span class='ins'> ${to} </span>`:document.getElementById('to').innerHTML='...........................................';

uzasad?document.getElementById('uzasad').innerHTML=`<span class='ins'> ${uzasad} </span>`:document.getElementById('uzasad').innerHTML='.....................................................................................................................................................................................';

miej?document.getElementById('msc').innerHTML=`<span class='ins'> ${miej} </span>`:document.getElementById('msc').innerHTML=`<span class='to_right'>.........................................................</span>`;

data?document.getElementById('dt').innerHTML=`<span class='ins'> ${data} </span>`:document.getElementById('dt').innerHTML='................................. ';

 }