let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("mysql");
        habilidades[3].classList.add("linux");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}

function pagina_cv() {
    window.location.href = "https://smooth2044.github.io/curriculum/"; 
}

function pagina_p2() {
    window.location.href = "https://smooth2044.github.io/desafio2/"; 
}

function iguana() {
    window.location.href = "https://smooth2044.github.io/desafio_iguana/"; 
}

function cupones() {
    window.location.href = "https://smooth2044.github.io/desafio_cupones/"; 
}

function portafolio(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

window.onscroll = function(){
    efectoHabilidades();
} 