import { Menu } from './menus/menu';
import { Item } from './items/item';
import { ButtonItem } from './items/button';

/**
 * Create a new menu
 * @param {table} [options={}] Create menu options, see {@link #CreateMenu~options|options}
 *      
 * @access protected
 * @returns {Menu} - New menu
 * @example
local menu = CreateMenu({
    title = 'MenuV',
    subtitle = 'Welcome to MenuV',
    position = 'topleft',
    r = 0,
    g = 0,
    b = 255,
    size = 'size-125',
    texture = 'example',
    dictionary = 'menuv',
    namespace = 'example_namespace'
})
 */
const CreateMenu = function(options) {
    return new Menu();
}