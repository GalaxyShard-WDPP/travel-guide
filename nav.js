var nav = document.getElementById("nav");
var links = [
    {name:"Tips", link:"tips.html"},
    {name:"Hawaii", link:"index.html", class:"title cursive"},
    {name:"Hotels", link:"hotels.html"}
];
var extra = [
    {name:"Food", link:"food.html"},
    {name:"Places", link:"places.html"}
];
var flag = document.createElement("img");
flag.src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg";
flag.id = "flag";
nav.appendChild(flag);

var drop = document.createElement("div");
drop.id = "nav-dropdown";
drop.innerHTML = "More";
var dropContent = document.createElement("div");

for (let i = 0; i < extra.length; ++i)
{
    let link = document.createElement("a");
    link.innerHTML = extra[i].name;
    link.href = extra[i].link;
    dropContent.appendChild(link);
    if (i != extra.length-1)
        dropContent.appendChild(document.createElement("hr"));
}
drop.appendChild(dropContent);
nav.appendChild(drop);

for (let i = 0; i < links.length; ++i)
{
    let link = document.createElement("a");
    link.innerHTML = links[i].name;
    link.href = links[i].link;
    link.className = links[i].class;
    nav.appendChild(link);
}