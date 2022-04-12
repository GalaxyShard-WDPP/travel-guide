
// <!-- <a href="tips.html">Tips</a> -->
// <!-- <a href="index.html" class="title cursive">Hawaii</a> -->
// <!-- <a href="hotels.html">Hotels</a> -->

var nav = document.getElementById("nav");
var links = [
    {name:"Tips", link:"tips.html"},
    {name:"Hawaii", link:"index.html", class:"title cursive"},
    {name:"Hotels", link:"hotels.html"}
];
var extra = [
    {name:"See the official site!", link:"https://www.gohawaii.com/"},
    {name:"Food", link:"food.html"},
    {name:"Activities", link:"activies.html"}

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
    link.className = extra[i].class;
    dropContent.appendChild(link);
    dropContent.appendChild(document.createElement("hr"));
}
// dropContent.innerHTML = "<a href=\"https://www.gohawaii.com/\">See the official site!</a>";
// var ;
// dropContent.appendChild();
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