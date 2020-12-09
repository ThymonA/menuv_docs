import { ButtonItem } from '../items/button';
import { CheckboxItem } from '../items/checkbox';
import { SliderItem } from '../items/slider';
import { RangeItem } from '../items/range';
import { ConfirmItem } from '../items/confirm';

/**
 * Menu for MenuV
 * @class
 */
class Menu {
    /**
     * <strong>Type:</strong> `string`
     * 
     * Change the look of MenuV by changing the theme
     * 
     * <strong>Default:</strong> https://i.imgur.com/xGagIBm.png
     * 
     * <strong>Native:</strong> https://i.imgur.com/KSkeiQm.png
     * @memberof Menu
     * @access public
     * @type {string}
     * @readonly
     * @default 'default'
     */
    Theme = 'default';

    /**
     * <strong>Type:</strong> `string`
     * 
     * Namespace is required to set keybinds, make sure given namespace is unique for every menu.
     * @memberof Menu
     * @access public
     * @type {string}
     * @readonly
     * @default 'unknown'
     */
    Namespace = 'unknown';

    /**
     * <strong>Type:</strong> `string`
     * 
     * Menu "open" state
     * @memberof Menu
     * @access public
     * @type {boolean}
     * @readonly
     * @default false
     */
    IsOpen = false;

    /**
     * <strong>Type:</strong> `string`
     * 
     * Universally Unique Identifier (UUID) 
     * @memberof Menu
     * @access public
     * @type {string}
     * @readonly
     */
    UUID = '';

    /**
     * <strong>Type:</strong> `string`
     * 
     * Title that appears on the big banner.
     * @memberof Menu
     * @access public
     * @type {string}
     * @default 'MenuV'
     */
    Title = '';

    /**
     * <strong>Type:</strong> `string`
     * 
     * Subtitle that appears in capital letters in a small black bar.
     * @memberof Menu
     * @access public
     * @type {string}
     * @default ''
     */
    Subtitle = '';

    /**
     * <strong>Type:</strong> `string`
     * 
     * Menu position on screen
     * 
     * 
     * <strong>options:</strong> 
     * 
     * `topleft` | `topcenter` | `topright` | `centerleft` | `center` | `centerright` | `bottomleft` | `bottomcenter` | `bottomright`
     * @memberof Menu
     * @access public
     * @type {string}
     * @default 'topleft'
     */
    Position = '';

    /**
     * <strong>Type:</strong> `table`
     * 
     * Menu primary color as <strong>RGB</strong>
     * @memberof Menu
     * @access public
     * @type {table}
     * @default { R=0, G=0, B=255 }
     */
    Color = {
        /**
         * <strong>Type:</strong> `number`
         * 
         * Primary color <strong>RGB</strong> red channel [0-255]
         * @memberof Menu.Color
         * @access public
         * @type {number}
         * @default 0
         */
        R: 0,

        /**
         * <strong>Type:</strong> `number`
         * 
         * Primary color <strong>RGB</strong> green channel [0-255]
         * @memberof Menu.Color
         * @access public
         * @type {number}
         * @default 0
         */
        G: 0,

        /**
         * <strong>Type:</strong> `number`
         * 
         * Primary color <strong>RGB</strong> blue channel [0-255]
         * @memberof Menu.Color
         * @access public
         * @type {number}
         * @default 255
         */
        B: 255
    };

    /**
     * <strong>Type:</strong> `string`
     * 
     * Menu size in %
     * 
     * 
     * <strong>options:</strong> 
     * 
     * `size-100` | `size-110` | `size-125` | `size-150` | `size-175` | `size-200`
     * @memberof Menu
     * @access public
     * @type {string}
     * @default 'size-110'
     */
    Size = '';

    /**
     * <strong>Type:</strong> `string`
     * 
     * Texture dictionary name for the banner image
     * @memberof Menu
     * @access public
     * @type {string}
     * @default 'menuv'
     */
    Dictionary = '';

    /**
     * <strong>Type:</strong> `string`
     * 
     * Texture name for the banner image
     * @memberof Menu
     * @access public
     * @type {string}
     * @default 'default'
     */
    Texture = '';

    /**
     * <strong>Type:</strong> `table`
     * 
     * List of current executing threads
     * @memberof Menu
     * @access protected
     * @type {threads}
     * @default '[]'
     * @readonly
     */
    Threads = [];

    /**
     * <strong>Type:</strong> `function`
     * 
     * Trigger registered `on` events
     * @memberof Menu
     * @access protected
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to trigger event for
     * @param {string} event Name of `on` event to trigger
     * @param {...*} [params=[]] Additional parameters
     */
    Trigger(menu, event, ...params) {}

    /**
     * <strong>Type:</strong> `function`
     * 
     * Destroy all threads on menu
     * @memberof Menu
     * @access protected
     * @this Menu
     * @param {Menu} menu Menu to destroy all threads for
     */
    DestroyThreads(menu) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Register a function as `on` event trigger
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to register function for
     * @param {string} event Name of `on` event to trigger
     * @param {function} func Function to trigger
     * @returns {string} Universally Unique Identifier (UUID)
     */
    On(menu, event, func) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Remove a registered `on` event
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to remove event for
     * @param {string} event Name of `on` event to remove
     * @param {string} uuid Universally Unique Identifier (UUID) of registered `on` event
     */
    RemoveOnEvent(menu, event, uuid) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Check if given value is valid
     * @memberof Menu
     * @access protected
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to validate input for
     * @param {string} key Name of key to validate input for
     * @param {any} value
     * @returns {boolean}
     */
    Validate(menu, key, value) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Parse `value` to matches item type
     * @memberof Menu
     * @access protected
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to parse values for
     * @param {string} key Name of key to parse input for
     * @param {any} value
     * @returns {any} Any parsed value
     */
    Parser(menu, key, value) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * This function will be executed when `__newindex` has been triggerd
     * @memberof Menu
     * @access protected
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to trigger `NewIndex` for
     * @param {string} key Name of the key that has been set
     * @param {any} value
     */
    NewIndex(menu, key, value) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Register keybind for specific menu, a unqiue {@link #Menu.Namespace|Menu.Namespace} is required
     * @memberof Menu
     * @access protected
     * @param {Menu} menu Menu
     * @param {function} func Trigger this function when button has been pressed
     * @param {string} description Description in FiveM keybinds
     * @param {string} defaultType Default input type, like: KEYBOARD, MOUSE_BUTTON etc.
     * @param {string} defaultKey Default input button, like: E, F12, LEFT_BUTTON etc.
     */
    AddControlKey(menu, func, description, defaultType, defaultKey) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Register keybind for opening this menu, a unqiue {@link #Menu.Namespace|Menu.Namespace} is required
     * @memberof Menu
     * @access public
     * @param {Menu} menu Menu
     * @param {string} defaultType Default input type, like: KEYBOARD, MOUSE_BUTTON etc.
     * @param {string} defaultKey Default input button, like: E, F12, LEFT_BUTTON etc.
     */
    OpenWith(menu, defaultType, defaultKey) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Change menu's title
     * @memberof Menu
     * @access public
     * @param {Menu} menu Menu
     * @param {string} title Title of menu
     */
    SetTitle(menu, title) {};

    /**
     * Change menu's subtitle
     * @memberof Menu
     * @access public
     * @param {Menu} menu Menu
     * @param {string} subtitle Subtitle of menu
     */
    SetSubtitle(menu, subtitle) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Change menu's position
     * @memberof Menu
     * @access public
     * @param {Menu} menu Menu
     * @param {string} position
     * Menu position on screen
     * 
     * 
     * <strong>options:</strong> 
     * 
     * `topleft` | `topcenter` | `topright` | `centerleft` | `center` | `centerright` | `bottomleft` | `bottomcenter` | `bottomright`
     */
    SetPosition(menu, position) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Clear all items in menu
     * @memberof Menu
     * @access public
     * @param {Menu} menu Menu
     * @param {boolean} [update=true] Force NUI update
     */
    ClearItems(menu, update) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Open this menu
     * @memberof Menu
     * @access public
     * @param {Menu} menu Menu
     */
    Open(menu) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Close this menu
     * @memberof Menu
     * @access public
     * @param {Menu} menu Menu
     */
    Close(menu) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Transform {@link #Menu|Menu} to `table`
     * @memberof Menu
     * @access public
     * @param {Menu} menu Menu
     */
    ToTable(menu) {};

    /**
     * Create a new menu from properties of this one (without items and events)
     * @memberof Menu
     * @access public
     * @param {Menu} menu Menu
     * @param {table} overrides A table with key values to override, see {@link #Menu~options|Menu options}
     * @param {string} namespace Unique namespace, see {@link #Menu.Namespace|Menu.Namespace}
     * @returns {Menu} - New menu with properties of this one
     */
    InheritMenu(menu, overrides, namespace) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * This function will add a button item to {@link #Menu|Menu}
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to add `button` for
     * @param {table} [options={}]
     * Button information
     *      @param {string} [options.icon='']
     *             Emoji as item prefex, see {@link https://emojipedia.org/|emojipedia.org}
     *      @param {string} [options.label='']
     *             Label on button
     *      @param {string} [options.description='']
     *             Button description when this button is active
     *      @param {any|Menu} [options.value=nil]
     *             Button menu value, when value is a {@link #Menu|Menu}, MenuV will open that {@link #Menu|Menu} on button select
     *      @param {boolean} [options.disabled=false]
     *             When this option is `true`, button isn't selectable anymore
     * @returns {ButtonItem} - New button item
     */
    AddButton(menu, options) {
        return new ButtonItem()
    };

    /**
     * <strong>Type:</strong> `function`
     * 
     * This function will add a checkbox item to {@link #Menu|Menu}
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to add `checkbox` item for
     * @param {table} [options={}]
     * Checkbox information
     *      @param {string} [options.icon='']
     *             Emoji as item prefex, see {@link https://emojipedia.org/|emojipedia.org}
     *      @param {string} [options.label='']
     *             Label on checkbox
     *      @param {string} [options.description='']
     *             Checkbox description when this checkbox item is active
     *      @param {boolean} [options.value=false]
     *             Checkbox item value
     *      @param {boolean} [options.disabled=false]
     *             When this option is `true`, checkbox isn't selectable anymore
     * @returns {CheckboxItem} - New checkbox item
     */
    AddCheckbox(menu, options) {
        return new CheckboxItem()
    };

    /**
     * <strong>Type:</strong> `function`
     * 
     * This function will add a slider item to {@link #Menu|Menu}
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to add `slider` for
     * @param {table} [options={}]
     * Slider information
     *      @param {string} [options.icon='']
     *             Emoji as item prefex, see {@link https://emojipedia.org/|emojipedia.org}
     *      @param {string} [options.label='']
     *             Label on slider
     *      @param {string} [options.description='']
     *             Slider description when this slider is active
     *      @param {number} [options.value=1]
     *             Slider menu value, must be a valid index of {@link #SliderItem.Values|SliderItem.Values}
     *      @param {table} [options.values=[]]
     *             List of values
     *             @param {string} [value.label='Value']
     *                    Label of value item
     *             @param {string} [value.description='']
     *                    Description of value item
     *             @param {any} [value.value=null]
     *                    Value of value item
     *             @param {boolean} [options.disabled=false]
     *                    When this option is `true`, slider isn't selectable anymore
     * @returns {SliderItem} - New slider item
     */
    AddSlider(menu, options) {
        return new SliderItem()
    };

    /**
     * <strong>Type:</strong> `function`
     * 
     * This function will add a range item to {@link #Menu|Menu}
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to add `range` item for
     * @param {table} [options={}]
     * Range information
     *      @param {string} [options.icon='']
     *             Emoji as item prefex, see {@link https://emojipedia.org/|emojipedia.org}
     *      @param {string} [options.label='']
     *             Label on range item
     *      @param {string} [options.description='']
     *             Range item description when this range item is active
     *      @param {number} [options.value=0]
     *             Range item value
     *      @param {number} [options.min=0]
     *             Minimal range value
     *      @param {number} [options.max=0]
     *             Maximal range value
     *      @param {boolean} [options.disabled=false]
     *             When this option is `true`, range item isn't selectable anymore
     * @returns {RangeItem} - New range item
     */
    AddRange(menu, options) {
        return new RangeItem()
    };

    /**
     * <strong>Type:</strong> `function`
     * 
     * This function will add a confirm item to {@link #Menu|Menu}
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to add `confirm` item for
     * @param {table} [options={}]
     * Confirm information
     *      @param {string} [options.icon='']
     *             Emoji as item prefex, see {@link https://emojipedia.org/|emojipedia.org}
     *      @param {string} [options.label='']
     *             Label on confirm item
     *      @param {string} [options.description='']
     *             Confirm description when this confirm item is active
     *      @param {boolean} [options.value=false]
     *             Confirm menu value
     *      @param {boolean} [options.disabled=false]
     *             When this option is `true`, confirm item isn't selectable anymore
     * @returns {ConfirmItem} - New confirm item
     */
    AddConfirm(menu, options) {
        return new ConfirmItem()
    };
}

/**
 * Event will be triggered when menu is opened
 * @memberof Menu
 * @access public
 * @this Menu
 * @event Menu#open
 * @param {Menu} menu Current opened menu
 * @example
menu:On('open', function(menu)
    print('You have now opened the menu :)')
end)
 */
Menu.On(Menu, 'open', function(menu) {});

/**
 * Event will be triggered when menu is closed
 * @memberof Menu
 * @access public
 * @this Menu
 * @event Menu#close
 * @param {Menu} menu Current closed menu
 * @example
menu:On('close', function(menu)
    print('You have now closed the menu :)')
end)
 */
Menu.On(Menu, 'close', function(menu) {});

export {
    Menu
}