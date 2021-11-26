
let elForm = document.querySelector('#form')
let elInput = elForm.querySelector('#name')
let elPass = elForm.querySelector('#password')
let elUl = document.querySelector('#ul')
let people = [
    {
        name: 'Admin',
        password: '123',
        role: 'admin'
    },
    {
        name: 'Abd',
        password: '123',
        role: 'admin'
    },
    {
        name: 'Abd2',
        password: '322',
        role: 'student'
    },
    {
        name: 'Abd3',
        password: '323',
        role: 'student'
    },
    {
        name: 'Abd4',
        password: '324',
        role: 'student'
    },
    {
        name: 'Abd5',
        password: '325',
        role: 'student'
    }
]
elForm.addEventListener("submit", function (evt) {
    evt.preventDefault ( )
    if (elInput.value == 'Admin' || elInput.value == 'Abd' && elPass.value == '123' ) {
        for (let i = 0; i < people.length; i++) {
            let elLI = document.createElement('li')
            elLI.textContent = ${people[i].name}+' s password  ' +`${people[i].password}+ '. And role is ' + ${people[i].role};
            elUl.appendChild(elLI)
        }
    } else if (elInput.value == 'Abd2' && elPass.value == '322') {
        let elLI = document.createElement('li');
        elLI.textContent = ${people[2].name} + ' s password  ' + `${people[2].password} + '. And role is ' + ${people[2].role};
        elUl.appendChild(elLI)
    } else if (elInput.value == 'Abd3' && elPass.value == '323') {
        let elLI = document.createElement('li');
        elLI.textContent =` ${people[3].name}` + ' s password  ' + `${people[3].password} + '. And role is ' + ${people[3].role};
        elUl.appendChild(elLI)
    } else if (elInput.value == 'Abd4' && elPass.value == '324') {
        let elLI = document.createElement('li');
        elLI.textContent = ${people[4].name} + ' s password  ' + `${people[4].password} + '. And role is ' + ${people[4].role};
        elUl.appendChild(elLI)
    }else if (elInput.value == 'Abd5' && elPass.value == '325') {
        let elLI = document.createElement('li');
        elLI.textContent = ${people[5].name} + ' s password  ' + `${people[5].password} + '. And role is ' + ${people[5].role};
        elUl.appendChild(elLI)
    }
    elInput.value = "";
    elPass.value = "";
})