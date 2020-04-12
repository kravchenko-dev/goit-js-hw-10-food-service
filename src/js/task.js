import menuList from '../menu.json';
import menuItemsTamplate from '../tamplate/gallery-items.hbs';

export default function() {
    const menuListContainer = document.querySelector('.js-menu');

    const menuItems = menuList.reduce((acc, item) => {
        return acc + menuItemsTamplate(item);
    }, '');

    menuListContainer.innerHTML = menuItems;
}
