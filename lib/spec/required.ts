/*
    ____   ____.___    _________       _____  __                                 
\   \ /   /|   |  /   _____/ _____/ ____\/  |___  _  _______ _______   ____  
 \   Y   / |   |  \_____  \ /  _ \   __\\   __\ \/ \/ /\__  \\_  __ \_/ __ \ 
  \     /  |   |  /        (  <_> )  |   |  |  \     /  / __ \|  | \/\  ___/ 
   \___/   |___| /_______  /\____/|__|   |__|   \/\_/  (____  /__|    \___  >
                         \/                                 \/            \/ 
                         
    © 2025 VI Software. All rights reserved.

    License: LGPL-3.0-only
    https://www.gnu.org/licenses/lgpl-3.0.en.html

    GitHub: https://github.com/VI-Software
    Website: https://visoftware.dev
*/

export interface Required {

    /**
     * If the module is required. Defaults to true if this property is omited.
     */
    value?: boolean

    /**
     * If the module is enabled by default. Has no effect unless Required.value
     * is false. Defaults to true if this property is omited.
     */
    def?: boolean

}
