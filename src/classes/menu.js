import { MenuButton } from './items/button';

/**
 * Create a new menu
 * @param {table} [options={}] Create menu options, see {@link #CreateMenu~options|options}
 *      
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
    /**
     * Menu for MenuV
     * @name Menu
     * @alias Menu
     */
    class Menu {}

    /**
     * Namespace is required to set keybinds, make sure given namespace is unique for every menu.
     * @memberof Menu
     * @access public
     * @type {string}
     * @readonly
     * @default 'unknown'
     */
    Menu.Namespace = 'unknown';

    /**
     * Menu "open" state
     * @memberof Menu
     * @access public
     * @type {boolean}
     * @readonly
     * @default false
     */
    Menu.IsOpen = false;

    /**
     * Universally Unique Identifier (UUID) 
     * @memberof Menu
     * @access public
     * @type {string}
     * @readonly
     */
    Menu.UUID = '';

    /**
     * Title that appears on the big banner.
     * @memberof Menu
     * @access public
     * @type {string}
     * @default 'MenuV'
     */
    Menu.Title = '';

    /**
     * Subtitle that appears in capital letters in a small black bar.
     * @memberof Menu
     * @access public
     * @type {string}
     * @default ''
     */
    Menu.Subtitle = '';

    /**
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
    Menu.Position = '';

    /**
     * Menu primary color as <strong>RGB</strong>
     * @memberof Menu
     * @access public
     * @type {table}
     * @default { R=0, G=0, B=255 }
     */
    Menu.Color = {};

    /**
     * Primary color <strong>RGB</strong> red channel [0-255]
     * @memberof Menu.Color
     * @access public
     * @type {number}
     * @default 0
     */
    Menu.Color.R = 0;

    /**
     * Primary color <strong>RGB</strong> green channel [0-255]
     * @memberof Menu.Color
     * @access public
     * @type {number}
     * @default 0
     */
    Menu.Color.G = 0;

    /**
     * Primary color <strong>RGB</strong> blue channel [0-255]
     * @memberof Menu.Color
     * @access public
     * @type {number}
     * @default 255
     */
    Menu.Color.B = 255;

    /**
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
    Menu.Size = '';

    /**
     * Texture dictionary name for the banner image
     * @memberof Menu
     * @access public
     * @type {string}
     * @default 'menuv'
     */
    Menu.Dictionary = '';

    /**
     * Texture name for the banner image
     * @memberof Menu
     * @access public
     * @type {string}
     * @default 'default'
     */
    Menu.Texture = '';

    /**
     * List of current executing threads
     * @memberof Menu
     * @access public
     * @type {threads}
     * @default '[]'
     * @readonly
     */
    Menu.Threads = [];

    /**
     * Trigger registered `on` events
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to trigger event for
     * @param {string} event Name of `on` event to trigger
     * @param {...*} [params=[]] Additional parameters
     */
    Menu.Trigger = function(menu, event, ...params) {}

    /**
     * Destroy all threads on menu
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu Menu to destroy all threads for
     */
    Menu.DestroyThreads = function(menu) {};

    /**
     * Register a function as `on` event trigger
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to register function for
     * @param {string} event Name of `on` event to trigger
     * @param {function} func Function to trigger
     * @returns {string} Universally Unique Identifier (UUID)
     */
    Menu.On = function(menu, event, func) {};

    /**
     * Remove a registered `on` event
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to remove event for
     * @param {string} event Name of `on` event to remove
     * @param {string} uuid Universally Unique Identifier (UUID) of registered `on` event
     */
    Menu.RemoveOnEvent = function(menu, event, uuid) {};

    /**
     * Check if given value is valid
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to validate input for
     * @param {string} key Name of key to validate input for
     * @param {any} value
     */
    Menu.Validate = function(menu, key, value) {};

    /**
     * Parse `value` to matches item type
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to parse values for
     * @param {string} key Name of key to parse input for
     * @param {any} value
     * @returns {any} Any parsed value
     */
    Menu.Parser = function(menu, key, value) {};

    /**
     * This function will be executed when `__newindex` has been triggerd
     * @memberof Menu
     * @access public
     * @this Menu
     * @param {Menu} menu {@link #Menu|Menu} to trigger `NewIndex` for
     * @param {string} key Name of the key that has been set
     * @param {any} value
     */
    Menu.NewIndex = function(menu, key, value) {};

    /**
     * This function will add a button to {@link #Menu|Menu}
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
     * @returns {MenuButton} - New button item
     */
    Menu.AddButton = function(menu, options) {
        return new MenuButton()
    };

    return new Menu();
}