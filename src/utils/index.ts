export const isServerSide = (): boolean => typeof window === 'undefined'
export const isClientSide = (): boolean => typeof window !== 'undefined'
export const error = (msg: string): never => {
    throw new Error(msg)
}
