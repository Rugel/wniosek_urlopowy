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

document.getElementById('pracow').innerHTML=`<span class='ins_dys'>${pracownik}</span>`;
document.title=`${pracownik} (urlop)`;
document.getElementById('budowa').innerHTML=`<span class='ins_dys'>${budowa}</span>`;
document.getElementById('stan').innerHTML=`<span class='ins_dys'>${stanowisko}</span>`;
document.getElementById('rodz_u').innerHTML=`<span class='ins'> ${rodz_url}</span>`;
document.getElementById('rok1').innerHTML=`<span class='ins'> ${rok1} </span>`;
document.getElementById('rok2').innerHTML=`<span class='ins'> ${rok2} </span>`;
document.getElementById('from').innerHTML=`<span class='ins'> ${from} </span>`;
document.getElementById('to').innerHTML=`<span class='ins'> ${to} </span>`;
document.getElementById('uzasad').innerHTML=`<span class='ins'> ${uzasad} </span>`;





      }



//funkcja zamieniająca godzinę w formacie --:-- na liczbę
const change=function(x){
    const sign1=x.charAt(0);
    const sign2=x.charAt(1);
    const sign3=x.charAt(3);
    const sign4=x.charAt(4);
let num=Math.round(parseFloat(sign3+sign4)/60*100);
num=String(num);
if(num<10){num='0'+num};
const ctime=parseFloat(sign1+sign2+'.'+num);
return ctime;
}

const build = document.getElementById('pbu').textContent;
//pętla zapisująca wprowadzone dane oraz wyliczająca liczę godzin z różnicy i ich sumowanie
let k;
let t1;
let t2;
let result;
let sum=0;
for(k=1; k<=l; k++){
    let odvalue=document.getElementById(`od${k}`).value;
    let dovalue=document.getElementById(`do${k}`).value;
    const uwvalue=document.getElementById(`uw${k}`).value;
    t1=change(odvalue);
    t2=change(dovalue);
    if(t2<=t1){t2=t2+24};
    if(isNaN(t1)||isNaN(t2)){t1=0; t2=0};
        result=Math.round((t2-t1)*100)/100;
        sum=sum+result;
    const res=document.getElementById(`s${k}`);
    if(result){res.innerHTML=result}else{res.innerHTML=''};
    document.getElementById(`tdod${k}`).innerHTML=odvalue;
    document.getElementById(`tddo${k}`).innerHTML=dovalue;
    document.getElementById(`tduw${k}`).innerHTML=document.getElementById(`uw${k}`).value;

    //zapis do Storage
   localStorage.setItem(`sod${k}`, odvalue);
   localStorage.setItem(`sdo${k}`, dovalue);
   localStorage.setItem(`suw${k}`, uwvalue);
     }
   localStorage.setItem('st_build', build)
// zapis sumy godzin do komórki tabeli
     document.getElementById('suma').innerHTML=Math.round(sum*100)/100;
    
    
    
    function clean(){
    if(confirm("Czy na pewno chcesz usunąć zapamiętane DANE dla formularza?")){localStorage.clear();
    for(j=1; j<=l; j++){
        localStorage.setItem(`suw${j}`, '');
        localStorage.setItem(`sod${j}`, '');
        localStorage.setItem(`sdo${j}`, '');
    }
        localStorage.setItem('st_build', '');
        alert('USUNIĘTO ZAPAMIĘTANE DANE !!!');
}
}