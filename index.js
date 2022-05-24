const btMoins = document.getElementById('btMoins');
const btPlus = document.getElementById('btPlus');
const nb = document.getElementById('nb');
btMoins.addEventListener('click', function() {
    if (parseInt(nb.innerHTML) !== 0) {
        nb.innerHTML--;
    }
});
btPlus.addEventListener('click', function() {
    nb.innerHTML++;
})