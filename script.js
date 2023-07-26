let home = document.getElementById("home");
let destin = document.getElementById("destin");
let crew = document.getElementById("crew");
let tech = document.getElementById("technology");
let moonbtn = document.getElementById("moon");
let marsbtn = document.getElementById("mars");
let europbtn = document.getElementById("europa");
let titanbtn = document.getElementById("titan");
let commander = document.getElementById("commander");
let specialist = document.getElementById("specialist");
let pilot = document.getElementById("pilot");
let engineer = document.getElementById("engineer");
let launch = document.getElementById("launch");
let spaceport = document.getElementById("spaceport");
let capsule = document.getElementById("capsule");


// to open and close the sidebar:
function openbtn() {
    let sideNav = document.getElementById("sidenav");
    sideNav.classList.remove("hidden");
}
function closebtn() {
    let sideNav = document.getElementById("sidenav");
    sideNav.classList.add("hidden");
}

// clicking buttons on destination section:
function showplanet (planetID) {
    var planets = document.querySelectorAll('.main-moon, .main-mars, .main-europa, .main-titan ');
    for(let i = 0 ; i < planets.length; i++){
        planets[i].classList.add('hide');
    }
    
    var currentPlanet = document.querySelector(planetID);
    currentPlanet.classList.remove('hide');

    function clearBorder() {
        moonbtn.style.borderBottom = 'none';
        marsbtn.style.borderBottom = 'none';
        europbtn.style.borderBottom = 'none';
        titanbtn.style.borderBottom = 'none';
    }

    switch(planetID) {
        case ".main-moon":
            clearBorder()
            let x = moonbtn;
            x.style.borderBottom = "3px solid white";
            x.style.paddingBottom = "12px";
            break;

        case ".main-mars":
            clearBorder();
            let y = marsbtn;
            y.style.borderBottom = "3px solid white";
            y.style.paddingBottom = "12px";
            break;

        case ".main-europa":
            clearBorder();
            let z = europbtn;
            z.style.borderBottom = "3px solid white";
            z.style.paddingBottom = "12px";
            break;
        
        default:
            clearBorder();
            let k = titanbtn;
            k.style.borderBottom = "3px solid white";
            k.style.paddingBottom = "12px";
            break;
    }
}

// for crew section
function showCrew(crewID) {
    var crew = document.querySelectorAll('.main-commander, .main-specialist, .main-pilot, .main-engineer ');
    for(let i = 0 ; i < crew.length; i++){
        crew[i].classList.add('hide');
    }
    var currentCrew = document.querySelector(crewID);
    currentCrew.classList.remove('hide');

    function clearBorder() {
        commander.style.backgroundColor = 'rgb(69, 69, 69)';
        specialist.style.backgroundColor = 'rgb(69, 69, 69)';
        pilot.style.backgroundColor = 'rgb(69, 69, 69)';
        engineer.style.backgroundColor = 'rgb(69, 69, 69)';
    }

    switch(crewID) {
        case ".main-commander":
            clearBorder()
            let x = commander;
            x.style.backgroundColor = "white";
            break;

        case ".main-specialist":
            clearBorder();
            let y = specialist;
            y.style.backgroundColor = "white";
            break;

        case ".main-pilot":
            clearBorder();
            let z = pilot;
            z.style.backgroundColor = "white";
            break;
        
        default:
            clearBorder();
            let k = engineer;
            k.style.backgroundColor = "white";
            break;
    }
}

// for tech section
function showTech(techID) {
    var tech = document.querySelectorAll('.main-launch, .main-port, .main-capsule');
    for(let i = 0 ; i < tech.length; i++){
        tech[i].classList.add('hide');
    }
    var currentTech = document.querySelector(techID);
    currentTech.classList.remove('hide');

    function clearBorder() {
        launch.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        launch.style.color = 'white';
        spaceport.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        spaceport.style.color = 'white';
        capsule.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        capsule.style.color = 'white';
    }

    switch(techID) {
        case ".main-launch":
            clearBorder()
            let x = launch;
            x.style.backgroundColor = "white";
            x.style.color = 'black';
            break;

        case ".main-port":
            clearBorder();
            let y = spaceport;
            y.style.backgroundColor = "white";
            y.style.color = 'black';
            break;
        
        default:
            clearBorder();
            let k = capsule;
            k.style.backgroundColor = "white";
            k.style.color = 'black';
            break;
    }
}