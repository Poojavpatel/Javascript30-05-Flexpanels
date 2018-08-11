/*jshint esversion: 6 */
const introDivs = document.querySelectorAll('.projIntro');
const projectDivs = document.querySelectorAll('.project');
console.log(projectDivs);

function itsLoaded() {
    introDivs.forEach( (introDiv) => {
        introDiv.classList.add('itsloaded');
    });
}
function projSelected(event) {
    console.log(this);
    this.classList.add('expand');
    const notprojs = document.querySelectorAll('.project:not(.expand)');
    console.log(notprojs);
    notprojs.forEach((notproj) => {notproj.classList.add('shrink');});
}

window.addEventListener('load',itsLoaded);
projectDivs.forEach( (projectDiv) => {
    projectDiv.addEventListener('click',projSelected);
});
