/*jshint esversion: 6 */
const introDivs = document.querySelectorAll('.projIntro');
const projectDivs = document.querySelectorAll('.project');
console.log(projectDivs);

function itsLoaded() {
    introDivs.forEach( (introDiv) => {
        introDiv.classList.add('itsloaded');
    });
}

window.addEventListener('load',itsLoaded);
