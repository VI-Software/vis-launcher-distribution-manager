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
import { JavaOptions } from './java'
import { Module } from './module'

export interface Server {

    /**
     * The ID of the server. The launcher saves mod configurations and selected servers
     * by ID. If the ID changes, all data related to the old ID will be wiped.
     */
    id: string

    /**
     * The name of the server. This is what users see on the UI.
     */
    name: string

    /**
     * A brief description of the server. Displayed on the UI to provide users more information.
     */
    description: string

    /**
     * A URL to the server's icon. Will be displayed on the UI.
     */
    icon: string

    /**
     * The version of the server configuration.
     */
    version: string

    /**
     * The server's IP address.
     */
    address: string

    /**
     * The version of minecraft that the server is running.
     */
    minecraftVersion: string

    /**
     * Java options.
     * @since 1.2.0
     */
    javaOptions?: JavaOptions

    /**
     * Server specific settings used for Discord Rich Presence.
     */
    discord?: {
        /**
         * Short ID for the server. Displayed on the second status line as Server: shortId.
         */
        shortId: string
        /**
         * Tooltip for the largeImageKey.
         */
        largeImageText: string
        /**
         * Name of the uploaded image for the large profile artwork.
         */
        largeImageKey: string
    }

    /**
     * Only one server in the array should have the mainServer property enabled. This
     * will tell the launcher that this is the default server to select if either the
     * previously selected server is invalid, or there is no previously selected server.
     * If this field is not defined by any server (avoid this), the first server will
     * be selected as the default. If multiple servers have mainServer enabled, the first
     * one the launcher finds will be the effective value. Servers which are not the default
     * may omit this property rather than explicitly setting it to false.
     */
    mainServer?: boolean

    /**
     * Whether or not the server can be autoconnected to. If false, the server will
     * not be autoconnected to even when the user has the autoconnect setting enabled.
     */
    autoconnect: boolean

    /**
     * An array of module objects.
     */
    modules: Module[]

}
