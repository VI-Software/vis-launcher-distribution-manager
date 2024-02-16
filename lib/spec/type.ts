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
export enum Type {

    Library = 'Library',
    ForgeHosted = 'ForgeHosted',
    Forge = 'Forge',
    Fabric = 'Fabric',
    LiteLoader = 'LiteLoader',
    ForgeMod = 'ForgeMod',
    FabricMod = 'FabricMod',
    LiteMod = 'LiteMod',
    File = 'File',
    VersionManifest = 'VersionManifest'

}

export interface TypeMetadata {

    id: string
    defaultExtension?: string

}

export const TypeMetadata: {[property: string]: TypeMetadata} = {

    Library: {
        id: Type.Library,
        defaultExtension: 'jar'
    },
    /**
     * @deprecated Will be replaced by Types.Forge.
     */
    ForgeHosted: {
        id: Type.ForgeHosted,
        defaultExtension: 'jar'
    },
    Forge: {
        id: Type.Forge,
        defaultExtension: 'jar'
    },
    Fabric: {
        id: Type.Fabric,
        defaultExtension: 'jar'
    },
    LiteLoader: {
        id: Type.LiteLoader,
        defaultExtension: 'jar'
    },
    ForgeMod: {
        id: Type.ForgeMod,
        defaultExtension: 'jar'
    },
    FabricMod: {
        id: Type.FabricMod,
        defaultExtension: 'jar'
    },
    LiteMod: {
        id: Type.LiteMod,
        defaultExtension: 'litemod'
    },
    File: {
        id: Type.File
    },
    VersionManifest: {
        id: Type.VersionManifest,
        defaultExtension: 'json'
    }

}
