const btMoins = document.getElementById('btMoins');
const btPlus = document.getElementById('btPlus');
const nb = document.getElementById('nb');
btMoins.addEventListener('click', function() {
    if (parseInt(nb.innerHTML) !== 0) {
        console.log('hello', nb.innerHTML, nb.innerHTML !== 0,
            typeof(nb.innerHTML))
        nb.innerHTML--;
        console.log('wafa');
    }
});
btPlus.addEventListener('click', function() {
    nb.innerHTML++;
})