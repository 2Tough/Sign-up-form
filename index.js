
const password = document.getElementById('password')
const confirmation = document.getElementById('confirmation')
const noMatch = document.getElementById("no-match-password")

let checkPassword = function() {
    if (password.value ==
        confirmation.value) {
            noMatch.style.color = 'green';
            noMatch.innerHTML = 'Password match';
            password.classList.add('good')
            confirmation.classList.add('good')
            password.classList.remove('bad')
            confirmation.classList.remove('bad')

    } else {
        noMatch.style.color = 'red';
        noMatch.innerHTML = 'Passwords do not match';
        password.classList.add('bad')
        confirmation.classList.add('bad')
        password.classList.remove('good')
        confirmation.classList.remove('good')
    }
  }