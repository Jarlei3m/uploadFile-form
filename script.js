const allInput = document.querySelectorAll('.input');
const thumbBtn = document.querySelector('#thumb-btn');
const sourceBtn = document.querySelector('#source-btn');
const selectIcon = document.querySelector('.material-icons');
const dateInput = document.querySelector('#date');

// mark field as filled
allInput.forEach(input => {
    input.addEventListener('change', (e) => {
        input.value==="" ? input.classList.remove('filled') : input.classList.add('filled');
    })
});

// upload files
thumbBtn.addEventListener('change', () => {
    const spanMsg = document.querySelector('.thumb-upload-check');
    const upBtn = document.querySelector('#thumb');

    thumbBtn.value==="" ? spanMsg.innerHTML="No file Uploaded" : spanMsg.innerHTML="File already uploaded";
    thumbBtn.value==="" ? upBtn.classList.remove('active') : upBtn.classList.add('active');
    
    const filename = thumbBtn.value.replace(/^.*[\\\/]/, '');
    
    if(filename.length <= 16) {
        thumbBtn.value==="" ? upBtn.innerText="Upload File" : upBtn.innerText=filename;
    } else {
        thumbBtn.value==="" ? upBtn.innerText="Upload File" : upBtn.innerText= "... " + filename.slice(-12);
    }
})

sourceBtn.addEventListener('change', () => {
    const spanMsg = document.querySelector('.source-upload-check');
    const upBtn = document.querySelector('#source');

    sourceBtn.value==="" ? spanMsg.innerHTML="No file Uploaded" : spanMsg.innerHTML="File already uploaded";
    sourceBtn.value==="" ? upBtn.classList.remove('active') : upBtn.classList.add('active');

    const filename = sourceBtn.value.replace(/^.*[\\\/]/, '');

    if(filename.length <= 16) {
        sourceBtn.value==="" ? upBtn.innerText="Upload File" : upBtn.innerText=filename;
    } else {
        sourceBtn.value==="" ? upBtn.innerText="Upload File" : upBtn.innerText= "... " + filename.slice(-12);
    }
})

// Date format
dateInput.addEventListener('keypress', () => {
    
    if(dateInput.value.length == 2) {
        dateInput.value += '/'
    } else if(dateInput.value.length == 5) {
        dateInput.value += '/'
    } else if(dateInput.value.length >= 10) {
        dateInput.value = dateInput.value.slice(0, -1)
    }
});
