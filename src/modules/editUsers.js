import { render } from './render'

export const editUser = () => {
    const tBody = document.getElementById('table-body')
    const form = document.querySelector('form')
    const formName = document.getElementById('form-name')
    const formEmail = document.getElementById('form-email')
    const children = document.getElementById('form-children')

    tBody.addEventListener('click', (e) => {

        if (e.target.closest('.btn-edit')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.id
            userService.getUser(id)
                .then(res => {

                    formName.value = res.name
                    formEmail.value = res.email
                    children.checked = res.children
                })
            form.dataset.method = id
        }
    })


    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if (form.dataset.method) {
            const user = {
                // id: formName.value,
                name: formName.value,
                email: formEmail.value,
                children: children.checked,
                permissions: false
            }

            console.log(user)
            console.log(form.dataset.method)
            const idUser = form.dataset.method
            console.log(idUser)




            userService.editUser(idUser, user)
                .then(() => {
                    userService.getUser()
                        .then(users => {
                            render(users)
                            form.reset()
                            form.removeAttribute('data-method')
                        })

                })

        }
    })
}