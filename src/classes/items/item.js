/**
 * Item for MenuV
 * @class
 */
class Item {
    /**
     * Class name of {@link #Item|Item}
     * @memberof Item
     * @access protected
     * @readonly
     * @type {string}
     * @default 'Item'
     */
    __class = 'Item';
    /**
     * Defined type of {@link #Item|Item}
     * @memberof Item
     * @access protected
     * @readonly
     * @type {string}
     * @default 'unknown'
     */
    __type = 'unknown';

    /**
     * Parent menu of item
     * @memberof Item
     * @access protected
     * @type {Menu|null}
     * @default null
     * @readonly
     */
    __menu = null;

    /**
     * Primary event of current item
     * @memberof Item
     * @access protected
     * @type {string}
     * @default 'unknown'
     * @readonly
     */
    __event = 'unknown';

    /**
     * Universally Unique Identifier (UUID) 
     * @memberof Item
     * @access public
     * @type {string}
     * @readonly
     */
    UUID = '';

    /**
     * Icon of menu item
     * @memberof Item
     * @access public
     * @type {string}
     * @default 'none'
     */
    Icon = 'none';

    /**
     * Label of menu item
     * @memberof Item
     * @access public
     * @type {string}
     * @default ''
     */
    Label = '';

    /**
     * Description of menu item
     * @memberof Item
     * @access public
     * @type {string}
     * @default ''
     */
    Description = '';

    /**
     * Value of menu item
     * @memberof Item
     * @access public
     * @type {any}
     * @default ''
     */
    Value = null;

    /**
     * `Disabled` state of menu item
     * @memberof Item
     * @access public
     * @type {boolean}
     * @default ''
     */
    Disabled = false;

    /**
     * List of all registered `on` events
     * @memberof Item
     * @access protected
     * @type {table}
     * @default {}
     */
    Events = {};

    /**
     * When item value changed, force to save changes
     * @memberof Item
     * @access public
     * @type {boolean}
     * @default false
     */
    SaveOnUpdate = false;

    /**
     * Trigger registered `on` events
     * @memberof Item
     * @access protected
     * @this Item
     * @param {Item} item {@link #Item|Item} to trigger event for
     * @param {string} event Name of `on` event to trigger
     * @param {...any} [params=[]] Additional parameters
     */
    Trigger(item, event, ...params) {};

    /**
     * Register a function as `on` event trigger
     * @memberof Item
     * @access public
     * @this Item
     * @param {Item} item {@link #Item|Item} to register function for
     * @param {string} event Name of `on` event to trigger
     * @param {function} func Function to trigger
     */
    On(item, event, func) {};

    /**
     * Check if given value is valid
     * @memberof Item
     * @access protected
     * @this Item
     * @param {Item} item {@link #Item|Item} to validate input for
     * @param {string} key Name of key to validate input for
     * @param {any} value
     * @returns {boolean} `true` if value is valid, otherwise `false`
     */
    Validate(item, key, value) {};

    /**
     * Parse `value` to matches item type
     * @memberof Item
     * @access protected
     * @this Item
     * @param {Item} item {@link #Item|Item} to parse values for
     * @param {string} key Name of key to parse input for
     * @param {any} value
     * @returns {any} Any parsed value
     */
    Parser(item, key, value) {};

    /**
     * This function will be executed when `__newindex` has been triggerd
     * @memberof Item
     * @access protected
     * @this Item
     * @param {Item} item {@link #Item|Item} to trigger `NewIndex` for
     * @param {string} key Name of the key that has been set
     * @param {any} value
     */
    NewIndex(item, key, value) {};

    /**
     * Get current item's value with some validation, see {@link #Item.Value|Item.Value}
     * @memberof Item
     * @access public
     * @this Item
     * @param {Item} item {@link #Item|Item} to get value from
     * @returns {any|nil} Return current valid value or `nil`
     */
    GetValue(item) {};

    /**
     * Returns the {@link #Menu|Menu} where item is added to (Parent Menu)
     * @memberof Item
     * @access public
     * @this Item
     * @param {Item} item {@link #Item|Item} to get parent menu from
     * @returns {Menu} Parent's menu
     */
    GetParentMenu(item) {};
};

/**
 * Event will be triggered when item becomes active/selected in NUI
 * @access public
 * @this Item
 * @event Item#enter
 * @param {Item} item Current active/selected item
 * @example
item:On('enter', function(item)
    print('You have entered this item :)')
end)
 */
Item.On(Item, 'enter', function(item) {});

/**
 * Event will be triggered when item becomes inactive/unselected in NUI
 * @access public
 * @this Item
 * @event Item#leave
 * @param {Item} item Current inactive/unselected item
 * @example
item:On('leave', function(item)
    print('You have unselected this item :(')
end)
 */
Item.On(Item, 'leave', function(item) {});

/**
 * Event will be triggered when item's value changed
 * @access public
 * @this Item
 * @event Item#update
 * @param {Item} item Current updated item
 * @param {string} key Current updated key
 * @param {any} value Current updated value
 * @param {any} oldValue Previous value
 * @example
item:On('update', function(item, key, value, oldValue)
    print('You have updated this item :)')
end)
 */
Item.On(Item, 'update', function(item, key, value, oldValue) {});

export {
    Item
}