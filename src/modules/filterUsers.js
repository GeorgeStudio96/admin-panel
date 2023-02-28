import { render } from './render'


export const filterUsers = () => {
    console.log('filter users')

    const btnIsChildren = document.getElementById('btn-isChildren')
    const btnIsPermissions = document.getElementById('btn-isPermissions')
    const btnIsAll = document.getElementById('btn-isAll')


    btnIsChildren.addEventListener('click', () => {
        userService.filterUser('children')
            .then(res => render(res))
    })

    btnIsPermissions.addEventListener('click', () => {
        userService.filterUser('permissions')
            .then(res => render(res))
    })

    btnIsAll.addEventListener('click', () => {
        userService.getUsers()
            .then(res => render(res))
    })

} 