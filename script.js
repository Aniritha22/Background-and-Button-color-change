var lightbtn=document.getElementById('on');
var darkbtn=document.getElementById('off');
var body=document.querySelector('body');

function light(){
    body.style.backgroundColor="crimson";
    lightbtn.style.backgroundColor="cyan";
    darkbtn.style.backgroundColor="cyan";
    const shadow="0 0 10px 4px cyan";
    lightbtn.style.boxShadow=shadow;
    darkbtn.style.boxShadow=shadow;
    lightbtn.style.color="black";
    darkbtn.style.color="black";

}

function dark(){
    body.style.backgroundColor="pink";
    lightbtn.style.backgroundColor="brown";
    darkbtn.style.backgroundColor="brown";
    const shadow="0 0 10px 4px brown";
    lightbtn.style.boxShadow=shadow;
    darkbtn.style.boxShadow=shadow;
    lightbtn.style.color="white";
    darkbtn.style.color="white";
}