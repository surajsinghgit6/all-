
var toggle = 0;
function getData() {
    const Http = new XMLHttpRequest();              //creating an XMLHttpRequest object
    const url = "https://jsonplaceholder.typicode.com/posts";
    Http.open("GET", url);
    Http.send();                           //To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object
    Http.onreadystatechange = function ()     //The onreadystatechange function is called every time the readyState changes.
    {
        myFunction(myArr);
    }
}

function myFunction(arr) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    for (var i = 0; i < arr.length; i++) {
        var dynamicDiv = document.createElement("div");
        if (toggle == 0) {
            dynamicDiv.setAttribute("style", "border : solid yellow")
            dynamicDiv.innerHTML += "UserId:" + arr[i].userId + "<br>" + "Id:" + " " + arr[i].id + "<br>" + "Title: " + arr[i].title + "<br>" + "Body:" + " " + arr[i].body + "<br>" + "<br>" + "<br>";
            toggle = 1;
            div1.append(dynamicDiv);
        }
        else if (toggle == 1) {
            dynamicDiv.setAttribute("style", "border : solid red")
            dynamicDiv.innerHTML += "UserId:" + arr[i].userId + "<br>" + "Id:" + " " + arr[i].id + "<br>" + "Title: " + arr[i].title + "<br>" + "Body:" + " " + arr[i].body + "<br>" + "<br>" + "<br>";
            toggle = 0;
            div2.append(dynamicDiv);
        }
    }
}

function deleteData() {
    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
}