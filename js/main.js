function updateDisplaySize(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.querySelector("#dims").innerHTML = `(x: ${width} y: ${height})`;
}