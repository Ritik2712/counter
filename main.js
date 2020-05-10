const numb = document.getElementById('numb');
const sub = document.getElementById('sub')
const add = document.getElementById('add');
add.addEventListener('click', function () {
    var text = +numb.innerText;
    numb.innerText = text + 1

})

sub.addEventListener('click', function () {
    var text = +numb.innerText;
    numb.innerText = text - 1

})