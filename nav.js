
// <!-- <a href="tips.html">Tips</a> -->
// <!-- <a href="index.html" class="title cursive">Hawaii</a> -->
// <!-- <a href="hotels.html">Hotels</a> -->

var nav = document.getElementById("nav");
var links = [
    {name:"Tips", link:"tips.html"},
    {name:"Hawaii", link:"index.html", class:"title cursive"},
    {name:"Hotels", link:"hotels.html"}
];

for (let i = 0; i < links.length; ++i)
{
    let link = document.createElement("a");
    link.innerHTML = links[i].name;
    link.href = links[i].link;
    link.className = links[i].class;
    nav.appendChild(link);
}

// nav.innerHTML =
//     "<a href=\"tips.html\">Tips</a>" +
//     "<a href=\"index.html\" class=\"title cursive\">Hawaii</a>" +
//     "<a href=\"hotels.html\">Hotels</a>";

