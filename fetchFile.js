const first_result = document.getElementById('first_result');
const second_result = document.getElementById('second_result');
const first_btn = document.getElementById('first_btn');
const second_btn = document.getElementById('second_btn');



first_btn.addEventListener('click', getRandomPicture)
second_btn.addEventListener('click', getRandomPicture2)

function getRandomPicture(){
fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .data(data => {
    first_result.innerHTML = '<img src="${data.file}"/>'
    })
}

function getRandomPicture2(){
fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .data(data => {
    second_result.innerHTML = '<img src="${data.url}"/>'
        })
}