function DateTime() {
    let date = new Date();
    alert(date.toLocaleString());
}
function inprime() {
    window.print();
}
function darklightmode() {
    document.body.classList.toggle("dark");
}
function share() {
    let obj = {
        title: "share the websit",
        text: "it was just an example",
        url: window.location.href,
    };
    navigator.share(obj);
}
function Nextpage() {
    window.history.go(1);
}
function Backpage() {
    window.history.back();
}
// Declare events 
// mouse 
function CreateMenu(x, y) {
    let div = document.createElement("div");

    // add class to my_div 
    div.classList.add("card");

    // adding style
    div.style.width = "18rem";

    // console.log(div);
    // ul code 
    let ul = document.createElement("ul");
    // adding two classes 
    ul.classList.add("list-group", "list-group-flush");

    // lists Code 
    let listOne = document.createElement("li");

    listOne.classList.add("list-group-item");
    listOne.textContent = "Date & Time";

    let listTwo = document.createElement("li");

    listTwo.classList.add("list-group-item");
    listTwo.textContent = "print";

    let listThree = document.createElement("li");

    listThree.classList.add("list-group-item");
    listThree.textContent = "Dark/Light Mode";

    let listfour = document.createElement("li");

    listfour.classList.add("list-group-item");
    listfour.textContent = "share";

    let listfive = document.createElement("li");

    listfive.classList.add("list-group-item");
    listfive.textContent = "Next page";

    let listsix = document.createElement("li");

    listsix.classList.add("list-group-item");
    listsix.textContent = "Back page";

    listOne.onclick = () => {
        DateTime();
    };
    listTwo.onclick = () => {
        inprime();
    };
    listThree.onclick = () => {
        darklightmode();
    };
    listfour.onclick = () => {
        share();
    };
    listfive.onclick = () => {
        Nextpage();
    };
    listsix.onclick = () => {
        Backpage();
    };

    // ul append children
    ul.append(listOne);
    ul.append(listTwo);
    ul.append(listThree);
    ul.append(listfour);
    ul.append(listfive);
    ul.append(listsix);

    // div append ul child 
    div.append(ul);

    // positionner la div
    div.style.position = "absolute";
    div.style.top = y + "px";
    div.style.left = x + "px";


    document.body.append(div);
}
window.onmousemove = (ev) => {

    let x_coord = ev.clientX;
    let y_coord = ev.clientY;

    // contextMenu 
    window.oncontextmenu = (e) => {
        // bloquer event

        e.preventDefault();

        // create Elements 
        if (document.querySelector("div") == null) {

            CreateMenu(x_coord, y_coord);
        } else {
            document.querySelector("div").remove();
            CreateMenu(x_coord, y_coord);

        }

    };

};
window.onclick = () => {
    let cards = document.getElementsByTagName("div");
    if (typeof cards[0] === "undefined") {
    } else {
        cards[0].remove();
    }
};
