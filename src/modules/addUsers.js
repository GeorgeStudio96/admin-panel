import { render } from './render'

export const addUsers = () => {
    const form = document.querySelector('form')
    const formName = document.getElementById('form-name')
    const formEmail = document.getElementById('form-email')
    const children = document.getElementById('form-children')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if (!form.dataset.method) {
            const user = {
                // id: formName.value,
                name: formName.value,
                email: formEmail.value,
                children: children.checked,
                permissions: false
            }

            userService.addUser(user).then(() => {
                userService.getUser().then(users => {
                    render(users)
                    form.reset()
                })
            })
        }
    })


}

