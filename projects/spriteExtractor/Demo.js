// Set up file input event listener
document.getElementById('localUploadButton').addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = handleFileUpload;
    fileInput.click();
});
document.getElementById('dalle3Button').addEventListener('click', generateImageFromDalle3);
