import { render } from './render'

export const removeUsers = () => {
    const tBody = document.getElementById('table-body')

    tBody.addEventListener('click', (e) => {

        if (e.target.closest('.btn-remove')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.id

            userService.removeUser(id)
                .then(res => userService.getUser().then(users => {
                    render(users)
                }))
        }
    })
}