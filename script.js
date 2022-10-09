const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';
    dataIncrement();

    function dataIncrement() {
        let conterNum = +counter.innerText;
        const dataCeil = counter.getAttribute('data-ceil')
        const incremint = dataCeil / 5;
        conterNum = Math.floor(conterNum + incremint);
        counter.innerText = conterNum;

        if (conterNum < dataCeil) {
            counter.innerText = conterNum;
            setTimeout(dataIncrement, 60)
        } else {
            counter.innerText = dataCeil;
        }
    }
});

