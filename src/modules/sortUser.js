import { render } from "./render";

export const sortUser = () => {
    const sortIsChildren = document.getElementById('sort-is-children')

    let isSort = false;

    sortIsChildren.addEventListener('click', () => {
        userService.getSortUser({
            name: 'children',
            value: isSort ? 'asc' : 'desc'
        })
            .then(res => render(res))

        isSort = !isSort

    })

}