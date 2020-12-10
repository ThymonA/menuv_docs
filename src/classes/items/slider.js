import { Item } from './item';

/**
 * Slider item for MenuV
 * @class
 * @implements {Item}
 * @extends {Item}
 */
class SliderItem extends Item {
    /**
     * <strong>Type:</strong> `string`
     * 
     * Defined type of {@link #SliderItem|SliderItem}
     * @memberof SliderItem
     * @access protected
     * @readonly
     * @type {string}
     * @default 'slider'
     * @override
     */
    __type = "slider";

    /**
     * <strong>Type:</strong> `string`
     * 
     * Primary event of {@link #SliderItem|SliderItem}
     * @memberof SliderItem
     * @access protected
     * @type {string}
     * @default 'OnSelect'
     * @readonly
     * @override
     */
    __event = "OnSelect";

    /**
     * <strong>Type:</strong> `number`
     * 
     * Value of slider item (current selected index)
     * @memberof SliderItem
     * @access public
     * @type {number}
     * @default 1
     */
    Value = 1;

    /**
     * <strong>Type:</strong> `table`
     * 
     * List of slider values
     * @memberof SliderItem
     * @access protected
     * @type {table}
     * @default {}
     */
    Values = {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Add a value to slider
     * @memberof SliderItem
     * @access public
     * @this SliderItem
     * @param {SliderItem} item {@link #SliderItem|SliderItem} to add a value for
     * @param {table} value
     * Value information
     *        @param {string} [value.label='Value']
     *        Label of value item
     *        @param {string} [value.description='']
     *        Description of value item
     *        @param {any} [value.value=null]
     *        Value of value item
     */
    AddValue(item, value) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Add a list of values to slider
     * @memberof SliderItem
     * @access public
     * @this SliderItem
     * @param {SliderItem} item {@link #SliderItem|SliderItem} to add values for
     * @param {table} values
     * Value information
     *        @param {string} [value.label='Value']
     *        Label of value item
     *        @param {string} [value.description='']
     *        Description of value item
     *        @param {any} [value.value=null]
     *        Value of value item
     */
    AddValues(item, ...values) {};
};

/**
 * <strong>Type:</strong> `event`
 * 
 * Event will be triggered when user changed slider state
 * @memberof SliderItem
 * @access public
 * @this SliderItem
 * @event SliderItem#change
 * @param {SliderItem} item Current changed slider item
 * @param {number} newValue New index of slider item
 * @param {number} oldValue Previous index of slider item
 * @example
item:On('change', function(item, newValue, oldValue)
    print('You have changed them slider :)')
end)
 */
SliderItem.On(SliderItem, 'change', function(item, newValue, oldValue) {});

/**
 * <strong>Type:</strong> `event`
 * 
 * Event will be triggered when user pressed 'ENTER' in slider item
 * @memberof SliderItem
 * @access public
 * @this SliderItem
 * @event SliderItem#select
 * @param {SliderItem} item Current selected slider item
 * @param {any} value Value from selected option
 * @example
item:On('select', function(item, value)
    print('You have select a slider option :)')
end)
 */
SliderItem.On(SliderItem, 'select', function(item, value) {});

export {
    SliderItem
}