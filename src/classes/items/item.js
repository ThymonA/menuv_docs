/**
 * Item for MenuV
 * @name Item
 * @alias Item
 */
class Item {};

/**
 * Parent menu of item
 * @memberof Item
 * @access private
 * @type {Menu|null}
 * @default null
 * @readonly
 */
Item.__menu = null;

/**
 * Primary event of current item
 * @memberof Item
 * @access private
 * @type {string}
 * @default 'unknown'
 * @readonly
 */
Item.__event = 'unknown';

/**
 * Universally Unique Identifier (UUID) 
 * @memberof Item
 * @access public
 * @type {string}
 * @readonly
 */
Item.UUID = '';

/**
 * Icon of menu item
 * @memberof Item
 * @access public
 * @type {string}
 * @default 'none'
 */
Item.Icon = 'none';

/**
 * Label of menu item
 * @memberof Item
 * @access public
 * @type {string}
 * @default ''
 */
Item.Label = '';

/**
 * Description of menu item
 * @memberof Item
 * @access public
 * @type {string}
 * @default ''
 */
Item.Description = '';

/**
 * Value of menu item
 * @memberof Item
 * @access public
 * @type {any}
 * @default ''
 */
Item.Value = null;

/**
 * `Disabled` state of menu item
 * @memberof Item
 * @access public
 * @type {boolean}
 * @default ''
 */
Item.Disabled = null;

/**
 * List of all registered `on` events
 * @memberof Item
 * @access private
 * @type {Array}
 * @default []
 */
Item.Events = [];

/**
 * When item value changed, force to save changes
 * @memberof Item
 * @access public
 * @type {boolean}
 * @default false
 */
Item.SaveOnUpdate = false;

/**
 * Trigger registered `on` events
 * @memberof Item
 * @access public
 * @this Item
 * @param {Item} item {@link #Item|Item} to trigger event for
 * @param {string} event Name of `on` event to trigger
 * @param {...*} [params=[]] Additional parameters
 */
Item.Trigger = function(item, event, ...params) {}

export {
    Item
}