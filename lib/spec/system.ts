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