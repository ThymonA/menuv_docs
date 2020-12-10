import Menu from './classes/menu';

/**
 * Object
 * @typedef {object} table
 */
/**
 * List of threads
 * @typedef {number[]} threads
 */

/**
 * CreateMenu options
 * 
 * @access public
 * @memberof Menu
 * @typedef {object} Menu~options
 * 
 * @param {string} [options.namespace=unknown]
 *        Namespace is required to set keybinds, make sure given namespace is unique for every menu.
 * @param {boolean|string} [options.title=MenuV]
 *        Title that appears on the big banner.
 * @param {string} [options.subtitle=""]
 *        Subtitle that appears in capital letters in a small black bar.
 * @param {string} [options.position="topleft"]
 *        Menu position on screen
 *         
 *         
 *        <strong>options:</strong> 
 * 
 *        `topleft` | `topcenter` | `topright` | `centerleft` | `center` | `centerright` | `bottomleft` | `bottomcenter` | `bottomright`
 * @param {number} [options.r=0]
 *        Primary color `RGB` red channel [0-255]
 * @param {number} [options.g=0]
 *        Primary color `RGB` green channel [0-255]
 * @param {number} [options.b=255]
 *        Primary color `RGB` blue channel [0-255]
 * @param {string} [options.size=size-110]
 *        Menu size in %
 * 
 * 
 *        <strong>options:</strong> 
 * 
 *        `size-100` | `size-110` | `size-125` | `size-150` | `size-175` | `size-200`
 * @param {string} [options.dictionary=menuv]
 *        Texture dictionary name for the banner image
 * @param {string} [options.texture=default]
 *        Texture name for the banner image
 * @param {table} [options.events={}]
 *        Custom events to add
 * @param {function} [options.validate=nil]
 *        Custom {@link #Menu.Validate|Menu.Validate} function
 * @param {function} [options.newIndex=nil]
 *             Custom {@link #Menu.NewIndex|Menu.NewIndex} function
 */

/**
 * MenuV library
 * @name MenuV
 * @alias MenuV
 * @class MenuV
 * @namespace MenuV
 */
class MenuV {
    /**
     * <strong>Type:</strong> `string`
     * 
     * Class name of {@link #MenuV|MenuV}
     * @memberof MenuV
     * @access protected
     * @private
     * @readonly
     * @type {string}
     * @default 'MenuV'
     */
    __class = 'MenuV';

    /**
     * <strong>Type:</strong> `string`
     * 
     * Defined type of {@link #MenuV|MenuV}
     * @memberof MenuV
     * @access protected
     * @private
     * @readonly
     * @type {string}
     * @default 'MenuV'
     */
    __type = 'MenuV';

    /**
     * <strong>Type:</strong> `function`
     * 
     * Create a `MenuV` menu
     * @memberof MenuV
     * @access public
     * @param {MenuV} MenuV
     * @param {string|boolean} [title='MenuV']
     *        Title that appears on the big banner.
     * @param {string} [subtitle='']
     *        Subtitle that appears in capital letters in a small black bar.
     * @param {string} [position='topleft']
     *        Menu position on screen
     *        
     *        
     *        <strong>options:</strong> 
     *        
     *        `topleft` | `topcenter` | `topright` | `centerleft` | `center` | `centerright` | `bottomleft` | `bottomcenter` | `bottomright`
     * @param {number} [r=0]
     *        Primary color <strong>RGB</strong> red channel [0-255]
     * @param {number} [g=0]
     *        Primary color <strong>RGB</strong> green channel [0-255]
     * @param {number} [b=255]
     *        Primary color <strong>RGB</strong> blue channel [0-255]
     * @param {string} [size='size-110']
     *        Menu size in %
     *        
     *        
     *        <strong>options:</strong> 
     *        
     *        `size-100` | `size-110` | `size-125` | `size-150` | `size-175` | `size-200`
     * @param {string} [texture='default']
     *        Texture name for the banner image
     * @param {string} [dictionary='menuv']
     *        Texture dictionary name for the banner image
     * @param {string} [namespace='unknown']
     *        Namespace is required to set keybinds, make sure given namespace is unique for every menu.
     * @param {string} [theme='default']
     *        Change the look of the menu, available options: `default` and `native`
     * @example
     * local menu = MenuV:CreateMenu('MenuV')
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV')
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft')
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0)
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125')
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125', 'example')
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125', 'example', 'menuv')
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125', 'example', 'menuv', 'example_namespace')
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125', 'example', 'menuv', 'example_namespace', 'native')
     * @returns {Menu}
     */
    CreateMenu(MenuV, title, subtitle, position, r, g, b, size, texture, dictionary, namespace, theme) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Create a new menu from properties of this one (without items and events)
     * @memberof MenuV
     * @access public
     * @param {MenuV} MenuV
     * @param {Menu} menu Menu to take properties from
     * @param {table} overrides A table with key values to override, see {@link #Menu~options|Menu options}
     * @param {string} namespace Unique namespace, see {@link #Menu.Namespace|Menu.Namespace}
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125', 'example', 'menuv', 'example_namespace', 'native')
     * 
     * local menu2 = MenuV:InheritMenu(menu, { title = 'Menu V2', subtitle = 'Welcome to MenuV2 :D', theme = 'default' })
     * @returns {Menu} - New menu with properties of this one
     */
    InheritMenu(MenuV, menu, overrides, namespace) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Returns created menu matching `UUID`
     * @memberof MenuV
     * @access public
     * @param {MenuV} MenuV
     * @param {string} uuid Universally Unique Identifier (UUID)
     * @example
     * local menu = MenuV:GetMenu('00000000-0000-0000-0000-000000000000')
     * @returns {Menu|null} Returns matching menu or `nil`
     */
    GetMenu(MenuV, uuid) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Open a menu
     * @memberof MenuV
     * @access public
     * @param {MenuV} MenuV 
     * @param {Menu|string} menu Menu or Universally Unique Identifier (UUID)
     * @param {function} [callback] Trigger callback when function has been executed
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125', 'example', 'menuv', 'example_namespace', 'native')
     * 
     * MenuV:OpenMenu(menu)
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125', 'example', 'menuv', 'example_namespace', 'native')
     * 
     * MenuV:OpenMenu(menu, function()
     *    print('Menu is now open :D')
     * end)
     */
    OpenMenu(MenuV, menu, callback) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Close a menu
     * @memberof MenuV
     * @access public
     * @param {MenuV} MenuV 
     * @param {Menu|string} menu Menu or Universally Unique Identifier (UUID)
     * @param {function} [callback] Trigger callback when function has been executed
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125', 'example', 'menuv', 'example_namespace', 'native')
     * 
     * MenuV:CloseMenu(menu)
     * @example
     * local menu = MenuV:CreateMenu('MenuV', 'Welcome to MenuV', 'topleft', 255, 0, 0, 'size-125', 'example', 'menuv', 'example_namespace', 'native')
     * 
     * MenuV:CloseMenu(menu, function()
     *    print('Menu closed :(')
     * end)
     */
    CloseMenu(MenuV, menu, callback) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Register keybind for specific menu, a unqiue {@link #Menu.Namespace|Menu.Namespace} is required
     * @memberof MenuV
     * @access protected
     * @param {MenuV} MenuV 
     * @param {Menu|string} menu Menu or Universally Unique Identifier (UUID)
     * @param {function} func Trigger this function when button has been pressed
     * @param {string} description Description in FiveM keybinds
     * @param {string} defaultType Default input type, like: KEYBOARD, MOUSE_BUTTON etc.
     * @param {string} defaultKey Default input button, like: E, F12, LEFT_BUTTON etc.
     */
    AddControlKey(MenuV, menu, func, description, defaultType, defaultKey) {};

    /**
     * <strong>Type:</strong> `function`
     * 
     * Checks if namespace is available
     * @memberof MenuV
     * @access public
     * @param {string} namespace Namespace, see {@link #Menu.Namespace|Menu.Namespace}
     * @example
     * local available = MenuV:IsNamespaceAvailable('example_namespace')
     * @returns {boolean} Return `true` if given namespace is available, otherwise `false`
     */
    IsNamespaceAvailable(namespace) {};
}

/**
 * Register callback handler for MenuV
 * @global
 * @access protected
 * @namespace exports.NUICallback
 * @exports NUICallback
 * @param {string} name Name of NUI callback
 * @param {table} info Information from NUI
 * @param {function} callback NUI callback function
 */
export default NUICallback = function(name, info, callback) {
}