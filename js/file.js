document.getElementById('btn-triangle').addEventListener('click', function () {
    const inputBase = document.getElementById('base').value;
    const baseText = parseFloat(inputBase);
    const inputHeight = document.getElementById('height').value;
    const heightText = parseFloat(inputHeight);
    const result = 0.5 * baseText * heightText;
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = result;
})

document.getElementById('btn-rectangle').addEventListener('click', function () {
    const inputWidth = document.getElementById('width').value;
    const widthText = parseFloat(inputWidth);
    const inputLength = document.getElementById('length').value;
    const lengthText = parseFloat(inputLength);
    const result = widthText * lengthText;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = result
})

const nameOfOrganization = document.getElementById("name").value;

console.log(nameOfOrganization);