for (let i = 0; i < 4; i++) {
    container= document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    for (let j = 0; j < 4; j++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        container.appendChild(pixel);
        pixel.style.justifyContent = 'center';
        pixel.style.flexDirection = 'column';
        pixel.style.display = 'flex';
        pixel.style.height = '100px';
        pixel.style.width = pixel.style.height;
        pixel.style.border = '1px solid black';

    }
}