// zoomout
function zoomImage(imageSrc) {
    const zoomedProject = document.createElement('div');
    zoomedProject.classList.add('zoomed-project');
    zoomedProject.style.display = 'none';

    const zoomedImg = document.createElement('img');
    zoomedImg.src = imageSrc;

    zoomedProject.appendChild(zoomedImg);
    document.body.appendChild(zoomedProject);

    zoomedProject.addEventListener('click', () => {
        zoomedProject.style.opacity = '0';
        zoomedImg.style.transform = 'scale(0.5)';
        setTimeout(() => {
            zoomedProject.style.display = 'none';
        }, 200);
    });

    zoomedProject.style.display = 'flex';
    setTimeout(() => {
        zoomedProject.style.opacity = '1';
        zoomedImg.style.transform = 'scale(1)';
    }, 10);
}

// categorias galeria

document.addEventListener("DOMContentLoaded", function () {
    const btnContainer = document.getElementById("myBtnContainer");
    const btns = btnContainer.getElementsByClassName("btn");
    const projectList = document.getElementById("projectList");
    const projects = projectList.getElementsByClassName("project-item");
  
    // Filtrar proyectos al hacer clic en los botones
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        const current = document.querySelector(".btn.active");
        current.classList.remove("active");
        this.classList.add("active");
  
        const category = this.getAttribute("data-category");
        filterProjects(category);
      });
    }
  
    // Mostrar todos los proyectos al cargar la página
    filterProjects("all");
  
    // Función para filtrar proyectos
    function filterProjects(category) {
      for (let i = 0; i < projects.length; i++) {
        const categories = projects[i].classList;
        if (category === "all" || categories.contains(category)) {
          projects[i].style.display = "block";
        } else {
          projects[i].style.display = "none";
        }
      }
    }
  });
  