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
