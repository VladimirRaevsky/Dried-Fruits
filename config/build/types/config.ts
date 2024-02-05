export type BuildMode = 'production' | 'development'

export type Analyze = 'server' | 'disabled'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
    scssMixin: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
    analyze: Analyze
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    analyze: Analyze
}
