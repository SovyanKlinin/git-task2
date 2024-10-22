window.onload = function () {

    let fullName = document.getElementsByClassName('input')[0];
    let userName = document.getElementsByClassName('input')[1];
    let agreeToTerns = document.getElementsByClassName('checkbox')[0];
    let signUp = document.getElementsByClassName('button')[0];
    let popUpButton = document.getElementsByClassName('button')[1];
    let haveAccount = document.getElementsByClassName('link')[0];
    let input = document.getElementsByClassName('input');
    let mainInput = document.getElementsByClassName('main-input');

    fullName.onkeydown = (e) => {
        if (parseInt(e.key)) {
            e.preventDefault();
        }
    }

    userName.onkeydown = (e) => {
        if (e.key === '.') {
            e.preventDefault();
        } if (e.key === ',') {
            e.preventDefault();
        }
    }

    agreeToTerns.onclick = () => {
        if (agreeToTerns.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }

    signUp.onclick = () => {
        let exam = false;
        if (signUp.innerText === 'Sign Up') {
            for (let i = 0; i < input.length; i++) {
                if (input[i].value === '') {
                    alert('Заполните поле ' + input[i].parentElement.previousElementSibling.innerText);
                    this.preventDefault();
                    exam = false;
                } else exam = true
            }
            if (input[3].value.length < 8) {
                alert('Слишком короткий пароль');
                this.preventDefault();
                exam = false;
            } else exam = true
            if (input[3].value !== input[4].value) {
                alert('Пароли должны совпадать');
                this.preventDefault();
                exam = false;
            } else exam = true
            if (!agreeToTerns.checked) {
                alert('Не выбрано согласие с условиями');
                alert('Не выбрано согласие с условиями');
                this.preventDefault();
                exam = false;
            } else exam = true
            if (exam === true) {
                document.getElementsByClassName('pop-up')[0].style.display = "flex";
                document.getElementsByClassName('overlay')[0].style.display = "block";
            }
        } if (signUp.innerText === 'Sign In') {
            for (let i = 0; i < input.length; i++) {
                if (input[i].value === '') {
                    alert("Отсутствует логин или пароль");
                    this.preventDefault();
                } else {
                    alert('Добро пожаловать, ' + input[0].value + '!');
                    this.preventDefault();
                }
            }
        }

    }

    function goToLoginPage() {
        document.getElementsByClassName('main-title')[0].innerText = 'Log in to the system';
        mainInput[0].remove();
        mainInput[1].remove();
        mainInput[2].remove();
        document.getElementsByClassName('main-info-checkbox')[0].remove();
        haveAccount.remove();
        signUp.innerText = "Sign In";
    }

    haveAccount.onclick = () => {
        goToLoginPage();
    }

    popUpButton.onclick = () => {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
        document.getElementsByClassName('pop-up')[0].style.display = "none";
        document.getElementsByClassName('overlay')[0].style.display = "none";
        goToLoginPage();
    }

}

alert('MYTASK');