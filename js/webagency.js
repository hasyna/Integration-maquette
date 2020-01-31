    filterSelection("portfolio__item")
    
/* lien active Header menu */
var menuLink = document.getElementsByClassName("menu__item");
for (var i=0;i < menuLink.length; i++){
    menuLink[i].addEventListener("click",function(){
        current=document.getElementsByClassName("menu__link--active");
        console.log(current[0]);
        /*current[0].className = current[0].className.replace(" menu__link--active","");*/
        current[0].classList.remove("menu__link--noHover");
        current[0].classList.remove("menu__link--active");
        /*this.className+=" menu__link--active";*/
        this.classList.add("menu__link--noHover");
        this.classList.add("menu__link--active");
});
}

/* lien active projects*/
var projectsItem = document.getElementsByClassName("projects__item");
var projectsLink=document.getElementsByClassName("projects__link");
for (var i=0; i< projectsLink.length; i++){
    projectsLink[i].addEventListener("click",function(){    
    currentLink=document.getElementsByClassName("projects__link--active");    
    currentLink[0].classList.remove("projects__link--active");
    this.classList.add("projects__link--active");    
})}
/*Afficher portfolio selon selection*/
projectsLink[0].addEventListener("click",function(){
    filterSelection("portfolio__item");
});
projectsLink[1].addEventListener("click",function(){
    filterSelection("portfolio__creation");
});
projectsLink[2].addEventListener("click",function(){
    filterSelection("portfolio__coorporate");
});
projectsLink[3].addEventListener("click",function(){
    filterSelection("portfolio__logo");
})

function filterSelection(c){
    var x,i;
    x=document.getElementsByClassName("portfolio__item");
    for (i=0;i<x.length;i++){
        x[i].classList.remove("portfolio__item--show");
        if (x[i].classList.contains(c)) {x[i].classList.add("portfolio__item--show");
        console.log(x[i]);}
}
}


