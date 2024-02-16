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
/**
 * Supported platforms.
 * @since 1.2.0
 */
export enum Platform {
    /**
     * macOS
     * @since 1.2.0
     */
    DARWIN = 'darwin',
    /**
     * Linux
     * @since 1.2.0
     */
    LINUX = 'linux',
    /**
     * Windows
     * @since 1.2.0
     */
    WIN32 = 'win32'
}

/**
 * Supported architectures.
 * @since 1.2.0
 */
export enum Architecture {
    /**
     * arm64
     * @since 1.2.0
     */
    ARM64 = 'arm64',
    /**
     * x64
     * @since 1.2.0
     */
    X64 = 'x64'
}