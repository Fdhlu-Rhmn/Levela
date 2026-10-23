// Prefix public files with the basePath so images still load when the site lives in a subfolder.
export const asset = (path: string): string => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
