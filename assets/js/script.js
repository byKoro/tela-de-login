function evento() {
    let addElement = document.createElement('p')
    let invalidoText = document.getElementById('invalido')
    let inputText = document.querySelectorAll('input')

    /* console.log(inputText[0].value) */
    if (inputText[0].value == '' || inputText[1].value == '') {
        alert('Valores inválidos')
    }else{
        alert('Logado')
    }
}

function changetheme() {
    let elementTelalogin = document.querySelector('[data-theme-selected]')
    let changeThemeClick = document.querySelector('[data-theme-selected]').getAttribute('data-theme-selected')

    if (changeThemeClick == 'light') {
        setTheme('dark')
    }
    else {
        setTheme('light')
    }
}


function setTheme(theme) {
    localStorage.setItem('theme', theme)
    document.querySelector('[data-theme-selected]').setAttribute('data-theme-selected', theme)
}

(function() {
    if (localStorage.getItem('theme')) {
        setTheme(localStorage.getItem('theme'))
    }else{
        setTheme('light')
    }
})();



