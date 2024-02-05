function updateValue(input) {
    const type = input.parentNode.dataset.type;
    const rangeValueSpan = input.parentNode.querySelector('.range-value');
    rangeValueSpan.textContent = "%" + input.value;
    const value = input.value;
    console.log(`Updating ${type} with value ${value}`);
    updateChart(type, value);
}
function updateChart(type, value) {
    const barsContainer = document.querySelector('.bars');

    // Check if a bar for this type already exists
    const existingBar = barsContainer.querySelector(`.bar-${type}`);

    if (existingBar) {
        // Update the existing bar
        const maxHeight = barsContainer.offsetHeight; // Maximum height of the container
        const barHeight = (value / 107) * maxHeight; // Adjusted for the 2% and 5% increase
        existingBar.style.height = barHeight + 'px';
        console.log(`Updating existing ${type} bar to height ${barHeight}`);
    } else {
        // Create a new bar
        const bar = document.createElement('div');
        const maxHeight = barsContainer.offsetHeight; // Maximum height of the container
        const barHeight = (value / 107) * maxHeight; // Adjusted for the 2% and 5% increase
        bar.className = `bar bar-${type}`;
        bar.style.height = barHeight + 'px';
        bar.style.backgroundColor = getColor(type);
        barsContainer.appendChild(bar);
        console.log(`Creating new ${type} bar with height ${barHeight}`);
    }
}





function getColor(type) {
    switch (type.toLowerCase()) {
        case 'plastic':
            return '#3498db';
        case 'metal':
            return '#e74c3c';
        case 'paper':
            return '#2ecc71';
        default:
            return '#3498db';
    }
}

// Initial chart setup
function initializeChart() {
    const plasticInput = document.querySelector('.item[data-type="Plastic"] .rang-input');
    const metalInput = document.querySelector('.item[data-type="Metal"] .rang-input');
    const paperInput = document.querySelector('.item[data-type="Paper"] .rang-input');

    updateValue(plasticInput);
    updateValue(metalInput);
    updateValue(paperInput);
}

initializeChart();










































// function updateValue(input) {
//     const itemDiv = input.parentNode;
//     const rangeValueSpan = itemDiv.querySelector('.range-value');
//     rangeValueSpan.textContent = "%" + input.value;
//     const value = input.value;
//     const type = input.parentNode.dataset.type;
//     updateChart(type, value);
// }


// function updateChart(type, value) {
//     const yAxis = document.querySelector('.y-axis');
//     const bars = document.querySelector('.bars');
//     const xAxis = document.querySelector('.x-axis');

//     const bar = document.createElement('div');
//     bar.className = 'bar';
//     bar.style.height = value + 'px';
//     bars.appendChild(bar);

//     const label = document.createElement('div');
//     label.textContent = type;
//     xAxis.appendChild(label);

//     const yAxisLine = document.createElement('div');
//     yAxisLine.className = 'y-axis-line';
//     yAxis.appendChild(yAxisLine);
// }


// updateChart('Plastic', 0);
// updateChart('Metal', 0);
// updateChart('Paper', 0);