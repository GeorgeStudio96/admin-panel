import { addUsers } from "./modules/addUsers"
import { render } from "./modules/render"
import { UserService } from './modules/userService'
import { removeUsers } from './modules/removeUsers'
import { changePermissions } from './modules/changePermissions'
import { editUser } from './modules/editUsers'
import { filterUsers } from './modules/filterUsers'
import { sortUser } from './modules/sortUser'
import { searchUser } from './modules/searchUsers'

window.userService = new UserService

userService.getUsers().then(data => {
    console.log(data)
    render(data)
})

addUsers()
removeUsers()
changePermissions()
editUser()
filterUsers()
sortUser()
searchUser()