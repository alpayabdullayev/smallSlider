let bigImg = document.getElementById('bigImg')
let row = document.querySelector('.row')
let col = document.querySelectorAll('.col-4')


col.forEach((element) => {
    element.addEventListener('click', () => {
        bigImg.textContent = '';
        let img = document.createElement('img');
        img.src = element.querySelector('img').src; 
        bigImg.appendChild(img);
    });
});
