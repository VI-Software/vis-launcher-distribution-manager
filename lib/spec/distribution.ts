/*
    ____   ____.___    _________       _____  __                                 
\   \ /   /|   |  /   _____/ _____/ ____\/  |___  _  _______ _______   ____  
 \   Y   / |   |  \_____  \ /  _ \   __\\   __\ \/ \/ /\__  \\_  __ \_/ __ \ 
  \     /  |   |  /        (  <_> )  |   |  |  \     /  / __ \|  | \/\  ___/ 
   \___/   |___| /_______  /\____/|__|   |__|   \/\_/  (____  /__|    \___  >
                         \/                                 \/            \/ 
                         
                         
    Copyright 2024 (©) VI Software y contribuidores. Todos los derechos reservados.
    
    GitHub: https://github.com/VI-Software/vis-launcher-distribution-manager
    Web: https://vis.galnod.com
    Licencia del proyecto: https://github.com/VI-Software/vis-launcher-distribution-manager/blob/main/LICENSE

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
