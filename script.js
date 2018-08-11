/*jshint esversion: 6 */
const introDivs = document.querySelectorAll('.projIntro');
const projectDivs = document.querySelectorAll('.project');
const preloaderScreen = document.querySelector('.preloaderscreen');
const fullContainer = document.querySelector('.fullcontainer');
console.log(projectDivs);

/******** Preloader related *******/

function itsLoaded() {
    introDivs.forEach( (introDiv) => {
        introDiv.classList.add('itsloaded');
    });
}
function itsallloaded() {
    preloaderScreen.classList.add('loadercomplete');
    fullContainer.classList.remove('hideme');
    preloaderScreen.style.display = "none";
}

function projSelected(event) {
    // Expand selected project
    console.log(this);
    this.classList.add('expand');

    //collapse rest projects
    const notprojs = document.querySelectorAll('.project:not(.expand)');
    console.log(notprojs);
    notprojs.forEach((notproj) => {notproj.classList.add('shrink');});

    //show description
    projdata = this.children[1];
    console.log(projdata);
    projdata.classList.add('showme');
    
    //add scrollbar after 1s
    // setTimeout(function(){ alert("Hello"); }, 1000);
    setTimeout(function(){ 
        event.target.classList.add('addscroll'); 

        //show close icon
        document.querySelector('.close').style.display = "initial";

        //show scroll icon and hidewhen scrolled up
        document.querySelector('.scroll').style.display = "initial";
    },1500);
}

function projScrolled(event) {
    console.log(this.scrollTop);
    if (this.scrollTop > 50) {
        document.querySelector('.scroll').style.display = "none";
    }else{
        document.querySelector('.scroll').style.display = "initial";
    }
}

window.addEventListener('load',itsallloaded);
window.addEventListener('load',itsLoaded);

projectDivs.forEach( (projectDiv) => {
    projectDiv.addEventListener('click',projSelected);
});

projectDivs.forEach( (projectDiv) => {
    projectDiv.addEventListener('scroll',projScrolled);
});

