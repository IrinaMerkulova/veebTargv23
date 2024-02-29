//funktsioon mis võtam massivist pilti ja muudab pilti veebilehe värskendamisel
// https://meet.google.com/kqo-ekrg-exw

function juhuslikPilt(){
    // massiiv piltidest
    const pildid=[
        'img/1.png',
        'img/2.png',
        'img/3.png'
    ];
    //juhuslik pilt
    const  juhuslikPilt=Math.floor(Math.random()*pildid.length);

    //pilt võetakse massiivist
    const pilt=pildid[juhuslikPilt];
    const rpilt=document.getElementById("random-pilt");

    rpilt.src=pilt;

}
//kontroll - kas pildiaadress on sama kui option value

function pildiKontroll(){
    puhastaRadio();

    const rpilt=document.getElementById("random-pilt");
    if(document.getElementById("valik").value==rpilt.getAttribute("src")){
        document.getElementById("vastus").innerHTML="Õige!";
        document.getElementById("vastus").style.color="green";
    } else{
        document.getElementById("vastus").innerHTML="Vale!";
        document.getElementById("vastus").style.color="red";
    }
}
function pildiKontroll2() {
    puhastaSelect();

    const rpilt = document.getElementById("random-pilt");
    const valik2 = document.getElementsByName("valik2"); // name on üks, aga elemente on palju

    for (let i = 0; i < valik2.length; i++) {
        if (valik2[i].checked) {
            if (valik2[i].value === rpilt.getAttribute("src")) {
                document.getElementById("vastus").innerHTML = "Õige!";
                document.getElementById("vastus").style.color = "green";
            } else {
                document.getElementById("vastus").innerHTML = "Vale!";
                document.getElementById("vastus").style.color = "red";
            }
        }
    }
}
// puhastamisfunktsioonid
// puhastame radionupud
function puhastaRadio(){
    const valik2 = document.getElementsByName("valik2");
    for (let i = 0; i < valik2.length; i++) {
        valik2[i].checked=false;
    }
}
//puhastame selectedIndex
function puhastaSelect(){
    document.getElementById("valik").selectedIndex=0;
}
function arvuta(kogus, pildiValik){
    return (kogus*pildiValik).toFixed(1);
    //toFixed(1) - 1 märk peale coma
}

const pilt1Hind=2.5;
const pilt2Hind=1;
const pilt3Hind=50;
function radioValikuHinnad(){
    let vastus2=document.getElementById("vastus2");
    let kogus=document.getElementById("kogus").value;
    let pilt1=document.getElementById("pilt1");
    let pilt2=document.getElementById("pilt2");
    let pilt3=document.getElementById("pilt3");
    if(pilt1.checked){
        vastus2.innerHTML=arvuta(kogus, pilt1Hind) + " euro ";
    } else if(pilt2.checked){
        vastus2.innerHTML=arvuta(kogus, pilt2Hind) + " euro ";
    } else if(pilt3.checked){
        vastus2.innerHTML=arvuta(kogus, pilt3Hind) + " euro ";
    }
    else {
        vastus2.innerHTML="palun vali pilti";
    }
}