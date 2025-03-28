function renderTemplate(){
    var data = {
        title: "Types of animals",
        list: [
            {name: "dogs"},
            {name: "cats"},
            {name: "ducks"}
        ]
    };
    var template = Handlebars.compile(document.querySelector("#template").innerHTML);
    var html = template(data);
    document.querySelector("#output").innerHTML = html;
}

function resetTemplate(){
    document.querySelector("#output").innerHTML = "Nothing here...";
}