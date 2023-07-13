function setTheme(theme){ 
    if(theme == "0"){
        document.getElementById("wallpaper").setAttribute("href", "../CSS/backSnow.css");
        document.getElementById("theme").textContent = "火";
    } else {
        document.getElementById("wallpaper").setAttribute("href", "../CSS/backFire.css");
        document.getElementById("theme").textContent = "雪";
    }
}
function setTrack(theme){
    if(theme == "0"){
        currTheme = "0";
        localStorage.setItem("currTheme", "0")
    } else {
        currTheme = "1";
        localStorage.setItem("currTheme", "1");
    }
}

function changeTheme(theme){
    if(theme == "0"){
        setTheme("1");
    } else {
        setTheme("0");
    }
}
function changeTrack(theme){
    if(theme == "0"){
        setTrack("1");
    } else {
        setTrack("0");
    }
}