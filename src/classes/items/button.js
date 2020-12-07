import { Item } from './item';

/**
 * Button item for MenuV
 * @class
 * @implements {Item}
 * @extends {Item}
 */
class ButtonItem extends Item {
    /**
     * Defined type of {@link #ButtonItem|ButtonItem}
     * @memberof ButtonItem
     * @access protected
     * @readonly
     * @type {string}
     * @default 'button'
     * @override
     */
    __type = "button";

    /**
     * Primary event of {@link #ButtonItem|ButtonItem}
     * @memberof ButtonItem
     * @access protected
     * @type {string}
     * @default 'OnSelect'
     * @readonly
     * @override
     */
    __event = "OnSelect";
};

/**
 * Event will be triggered when user pressed `ENTER` on item
 * @memberof ButtonItem
 * @access public
 * @this ButtonItem
 * @event ButtonItem#select
 * @param {ButtonItem} item Current selected item
 * @example
item:On('select', function(item)
    print('You have updated this item :)')
end)
*/
ButtonItem.On(ButtonItem, 'select', (item) => {});

export {
    ButtonItem
}