var men = document.getElementById('men');
var women = document.getElementById('women');
var children = document.getElementById('children');
var secMen = document.getElementById('sec-men');
var secWomen = document.getElementById('sec-women');
var secChildren = document.getElementById('sec-children');
var seeAll = document.documentElement.getElementsByClassName('see-all');

function modalShow(section){
    section.classList.add("show");
    section.classList.remove("hide");
}
function modalClose(section){
    section.classList.add("hide");
    section.classList.remove("show");
}

men.addEventListener('click', function(){
if (men.checked === true){modalShow(secMen)}
else{
    modalClose(secMen)
}}
);
women.addEventListener('click', function(){
    if (women.checked === true){modalShow(secWomen)}
    else{
        modalClose(secWomen)
    }}
);
children.addEventListener('click', function(){
    if (children.checked === true){modalShow(secChildren)}
    else{
        modalClose(secChildren)
    }}
);
seeAll[0].addEventListener('click', function(){
    modalShow(secMen);
    modalShow(secWomen);
    modalShow(secChildren);
    men.checked=true;
    women.checked=true;
    children.checked=true;
}
);
console.log(seeAll)
