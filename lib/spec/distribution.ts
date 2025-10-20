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

import { Server } from './server'

export interface Distribution {

    version: string

    /**
     * Global settings for Discord Rich Presence.
     */
    discord?: {
        /**
         * Client ID for the Application registered with Discord.
         */
        clientId: string
        /**
         * Tootltip for the smallImageKey.
         */
        smallImageText: string
        /**
         * Name of the uploaded image for the small profile artwork.
         */
        smallImageKey: string
    }

    /**
     * A URL to a RSS feed. Used for loading news.
     */
    rss: string

    /**
     * Array of server objects.
     */
    servers: Server[]

}
