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

export interface Artifact {

    /**
     * The size of the artifact.
     */
    size: number

    /**
     * The MD5 hash of the artifact. This will be used to validate local artifacts.
     * Modules that do not provide an MD5 are untracked and not validated.
     */
    MD5?: string

    /**
     * The artifact's download url.
     */
    url: string

    /**
     * A relative path to where the file will be saved. This is appended to the base
     * path for the module's declared type.
     * If this is not specified, the path will be resolved based on the module's ID.
     */
    path?: string

}
