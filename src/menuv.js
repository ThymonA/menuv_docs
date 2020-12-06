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
 * @typedef {object} CreateMenu~options
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
 */
class MenuV {}

/**
 * Class name of @see MenuV
 * @memberof MenuV
 * @access private
 * @private
 * @readonly
 * @type {string}
 * @default 'MenuV'
 */
MenuV.__class = 'MenuV';

/**
 * Defined type of @see MenuV
 * @memberof MenuV
 * @access private
 * @private
 * @readonly
 * @type {string}
 * @default 'MenuV'
 */
MenuV.__type = 'MenuV';

/**
 * @memberof MenuV
 * @returns {Menu}
 */
MenuV.CreateMenu = function() {
};