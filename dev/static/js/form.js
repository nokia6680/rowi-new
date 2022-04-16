const fileUploader = document.getElementById('file-input');
const dropZone = document.getElementById('formDrop');
const filewrap = document.querySelector('.form__upload');
const filename = document.getElementById('filename');
const removeBtn = document.querySelector('.form__upload-delete');

fileUploader.addEventListener('change', (event) => {
    const files = event.target.files;
    console.log('files', files);

    if (window.FileList && window.File) {
        dropZone.addEventListener('dragover', event => {
            event.stopPropagation();
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
        });

        dropZone.addEventListener('drop', event => {
            filename.innerHTML = '';
            event.stopPropagation();
            event.preventDefault();
            const files = event.dataTransfer.files;
            console.log(files);

            const msg = `${files[0].name}`;

            filewrap.classList.add('active');
            filename.innerHTML = msg;
        });
    }

    const msg = `${files[0].name}`;

    filewrap.classList.add('active');
    filename.innerHTML = msg;

    removeBtn.addEventListener('click', function () {
        filewrap.classList.remove('active');
        filename.innerHTML = '';
    });
});
