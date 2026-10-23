function ShowAlert(){
    alert("Click Me Button clicked using HTML Events");
}

document.getElementById("clickButton").addEventListener("click", ShowAlert2);

function ShowAlert2(){
    alert("Click Me Button clicked using JS Events");
}

document.getElementById("box").addEventListener("click", ()=>{
    document.getElementById("box").innerText = "This Box was clicked"
});

document.getElementById("box2").addEventListener("mouseenter", ()=>{
    document.getElementById("box2").innerText = "The mouse entered to Box"
});

document.getElementById("box2").addEventListener("mouseout", ()=>{
    document.getElementById("box2").innerText = "The mouse exit from the Box"
});