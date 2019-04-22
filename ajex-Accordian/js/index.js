var myData = [];
var toggle = 0;

function getData() {
    const Http = new XMLHttpRequest();
    const url = "https://restcountries.eu/rest/v2/all ";
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    }
    addDataToDOM()
}

function myFunction(arr) {
    for (var i = 0; i < arr.length; i++)
        myData.push(arr[i]);
}


function addDataToDOM() {
    var div = document.getElementById("workArea");
    for (var i = 0; i < myData.length; i++) {
        var dynamicDiv = document.createElement("div");
        var space = document.createElement("p");
        var section = document.createElement("section");

        var countryObj = myData[i];
        var url = countryObj.flag;
        var polpulationInput = document.createElement("input");
        polpulationInput.setAttribute("value", countryObj.population);
        polpulationInput.setAttribute("type", "text");
        polpulationInput.setAttribute("disabled", "true");
        var img = document.createElement("img");
        img.setAttribute("src", url);
        img.setAttribute("style", "height:200px");
        img.setAttribute("style", "width : 180px");

        section.innerHTML = "<b>Country Name: </b>" + countryObj.name + "<br>" + "<b>Capital: </b>" + countryObj.capital + "<br>" + "<b>Region: </b>" + countryObj.region + "<br>" + "<b>Currency: </b>" + countryObj.currencies[0].symbol + "<br>" + "<b>Population: <b>";
        var editBtn = document.createElement("button");
        var deleteBtn = document.createElement("button");
        space.innerHTML = "<br>";
        editBtn.innerHTML = "Edit";
        deleteBtn.innerHTML = "Delete";

        dynamicDiv.append(img);
        dynamicDiv.append(section);
        dynamicDiv.append(polpulationInput);
        dynamicDiv.append(editBtn);
        dynamicDiv.append(deleteBtn);
        dynamicDiv.append(space);
        div.append(dynamicDiv);

        editBtn.addEventListener('click', function (event) {
            let parent = event.target.parentNode;
            let thirdChild = parent.firstChild.nextSibling.nextSibling;
            if (toggle == 0) {
                thirdChild.removeAttribute("disabled");
                toggle = 1;
            } else if (toggle == 1) {
                thirdChild.setAttribute("disabled", "true");
                toggle = 0;
            }
        });

        deleteBtn.addEventListener("click", function (event) {
            var grandParent = event.target.parentNode.parentNode;
            var childParent = event.target.parentNode;
            grandParent.removeChild(childParent);
            toggle = 0;
        });
    }
}