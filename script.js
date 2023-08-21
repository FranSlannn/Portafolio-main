// script.js
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
