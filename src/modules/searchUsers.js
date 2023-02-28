import { render } from "./render"
import { debounce } from './helpers'

export const searchUser = () => {
    console.log('search')
    const searchInput = document.getElementById('search-input')


    const debounceSearch = () => {
        let searchInputVal = searchInput.value

        userService.getSearchUser(searchInputVal)
            .then(res => render(res))
    }


    const setDebounceSearch = debounce(debounceSearch, 1000)

    searchInput.addEventListener('input', setDebounceSearch)


}

