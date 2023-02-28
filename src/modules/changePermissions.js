import { render } from './render'


export const changePermissions = () => {
    const tBody = document.getElementById('table-body')

    tBody.addEventListener('click', (e) => {
        if (e.target.closest('.form-check-input')) {
            const checkStatus = e.target.checked
            console.log(checkStatus, 'check')
            const tr = e.target.closest('tr')
            const id = tr.dataset.id
            console.log(id)

            userService.changePermissionsUser(id, { permissions: checkStatus })
                .then(res => console.log(res))
        }


    })
}
