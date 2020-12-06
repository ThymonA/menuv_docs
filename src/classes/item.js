/**
 * Create a new menu item
 * 
 * @param {object} info Information
 * @returns {Item} - New menu item
 * @global
 */
const CreateMenuItem = function(info) {
    return new Item();
}

module.exports = {
    CreateMenuItem: CreateMenuItem,
    Item: Item   
}