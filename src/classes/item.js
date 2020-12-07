import { Item } from './items/item';

/**
 * Create a new menu item
 * 
 * @param {object} info Information
 * @access protected
 * @returns {Item} - New menu item
 * @global
 */
const CreateMenuItem = function(info) {
    return new Item();
}

module.exports = {
    CreateMenuItem,
    Item
}