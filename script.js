function createGrid(size) {
    // Create a wrapper to contain the grid
    const gridWrapper = document.createElement('div');
    gridWrapper.className = 'grid-wrapper';
    document.body.appendChild(gridWrapper);
    gridWrapper.style.display = 'flex';
    gridWrapper.style.flexDirection = 'column';
    gridWrapper.style.width = '80vw';
    gridWrapper.style.height = '80vw';
    gridWrapper.style.maxWidth = '80vh';
    gridWrapper.style.maxHeight = '80vh';
    gridWrapper.style.aspectRatio = '1 / 1';
    gridWrapper.style.marginLeft = '10px auto';
    gridWrapper.style.marginRight = '10px auto';
    gridWrapper.style.marginTop = '0px';

    for (let i = 0; i < size; i++) {
        const container = document.createElement('div');
        container.className = 'container';
        gridWrapper.appendChild(container);
        container.style.display = 'flex';
        container.style.flex = '1 1 0';
        container.style.flexDirection = 'row';

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            container.appendChild(pixel);
            pixel.style.flex = '1 1 0';
            pixel.style.aspectRatio = '1 / 1';
            pixel.style.border = '0.0001px solid black';
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = '#ffa7a7ff';
            });
        }
    }
}



const resetButton = document.createElement('button');
resetButton.textContent = 'New Grid';
document.body.appendChild(resetButton);
resetButton.addEventListener('click', () => {
    const gridWrapper = document.querySelector('.grid-wrapper');
    if (gridWrapper) {
        gridWrapper.remove();
    }
    let newSize = prompt("Enter the number of pixels per side (max 100):");
    if (newSize && newSize <= 100 && newSize > 0) {
        createGrid(newSize);
    }
    else {
        alert("Please enter a valid number between 1 and 100.");
    }
    
});

createGrid(16); // Initial grid size