import { Item } from './item';

/**
 * Confirm item for MenuV
 * @class
 * @implements {Item}
 * @extends {Item}
 */
class ConfirmItem extends Item {
    /**
     * Defined type of {@link #ConfirmItem|ConfirmItem}
     * @memberof ConfirmItem
     * @access protected
     * @readonly
     * @type {string}
     * @default 'confirm'
     * @override
     */
    __type = "confirm";

    /**
     * Primary event of {@link #ConfirmItem|ConfirmItem}
     * @memberof ConfirmItem
     * @access protected
     * @type {string}
     * @default 'OnConfirm'
     * @readonly
     * @override
     */
    __event = "OnConfirm";

    /**
     * Value of {@link #ConfirmItem|ConfirmItem}
     * @memberof ConfirmItem
     * @access public
     * @type {boolean}
     * @default false
     */
    Value = false;

    /**
     * Confirm this item, set confirm state to `true`
     * @memberof ConfirmItem
     * @access public
     */
    Confirm() {};

    /**
     * Deny this item, set confirm state to `false`
     * @memberof ConfirmItem
     * @access public
     */
    Deny() {};
};

/**
 * Event will be triggered when user changed confirm state
 * @memberof ConfirmItem
 * @access public
 * @this ConfirmItem
 * @event ConfirmItem#change
 * @param {ConfirmItem} item Current changed confirm item
 * @param {boolean} newValue New state of confirm
 * @param {boolean} oldValue Previous state of confirm
 * @example
item:On('change', function(item, newValue, oldValue)
    print('You have changed them confirm state :)')
end)
 */
ConfirmItem.On(ConfirmItem, 'change', function(item, newValue, oldValue) {});

/**
 * Event will be triggered when user confirm the {@link #ConfirmItem|ConfirmItem}
 * @memberof ConfirmItem
 * @access public
 * @this ConfirmItem
 * @event ConfirmItem#confirm
 * @param {ConfirmItem} item Current confirmed confirm item
 * @example
item:On('confirm', function(item)
    print('You have confirmed the confirm item :D')
end)
 */
ConfirmItem.On(ConfirmItem, 'confirm', function(item) {});

/**
 * Event will be triggered when user denied the {@link #ConfirmItem|ConfirmItem}
 * @memberof ConfirmItem
 * @access public
 * @this ConfirmItem
 * @event ConfirmItem#deny
 * @param {ConfirmItem} item Current denied confirm item
 * @example
item:On('deny', function(item)
    print('You have denied the confirm item :D')
end)
 */
ConfirmItem.On(ConfirmItem, 'deny', function(item) {});

export {
    ConfirmItem
}