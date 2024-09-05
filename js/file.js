document.getElementById('btn-triangle').addEventListener('click', function () {
    const inputBase = document.getElementById('base').value;
    const baseText = parseFloat(inputBase);
    const inputHeight = document.getElementById('height').value;
    const heightText = parseFloat(inputHeight);
    const result = 0.5 * baseText * heightText;
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = result;
})