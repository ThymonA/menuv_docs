import { Item } from './item';

/**
 * Checkbox item for MenuV
 * @class
 * @implements {Item}
 * @extends {Item}
 */
class CheckboxItem extends Item {
    /**
     * Defined type of {@link #CheckboxItem|CheckboxItem}
     * @memberof CheckboxItem
     * @access protected
     * @readonly
     * @type {string}
     * @default 'checkbox'
     * @override
     */
    __type = "checkbox";

    /**
     * Primary event of {@link #CheckboxItem|CheckboxItem}
     * @memberof CheckboxItem
     * @access protected
     * @type {string}
     * @default 'OnCheck'
     * @readonly
     * @override
     */
    __event = "OnCheck";

    /**
     * Value of {@link #CheckboxItem|CheckboxItem}
     * @memberof CheckboxItem
     * @access public
     * @type {boolean}
     * @default false
     */
    Value = false;
};

/**
 * Event will be triggered when user changed checkbox state
 * @memberof CheckboxItem
 * @access public
 * @this CheckboxItem
 * @event CheckboxItem#change
 * @param {CheckboxItem} item Current changed checkbox item
 * @param {boolean} newValue New state of checkbox
 * @param {boolean} oldValue Previous state of checkbox
 * @example
item:On('change', function(item, newValue, oldValue)
    print('You have changed them checkbox state :)')
end)
 */
CheckboxItem.On(CheckboxItem, 'change', function(item, newValue, oldValue) {});

/**
 * Event will be triggered when user check the checkbox
 * @memberof CheckboxItem
 * @access public
 * @this CheckboxItem
 * @event CheckboxItem#check
 * @param {CheckboxItem} item Current checked checkbox item
 * @example
item:On('check', function(item)
    print('You have set the checkbox state to checked :D')
end)
 */
CheckboxItem.On(CheckboxItem, 'check', function(item) {});

/**
 * Event will be triggered when user uncheck the checkbox
 * @memberof CheckboxItem
 * @access public
 * @this CheckboxItem
 * @event CheckboxItem#uncheck
 * @param {CheckboxItem} item Current unchecked checkbox item
 * @example
item:On('uncheck', function(item)
    print('You have set the checkbox state to unchecked :(')
end)
 */
CheckboxItem.On(CheckboxItem, 'uncheck', function(item) {});

export {
    CheckboxItem
}