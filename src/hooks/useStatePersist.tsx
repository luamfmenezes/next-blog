import { useEffect, useState } from 'react'

export const useStatePersist = <T,>(initialState: T, storageName: string) => {
    const [state, setState] = useState<T>(() => {
        const item = localStorage.getItem(storageName)
        return item ? (JSON.parse(item) as T) : initialState
    })

    useEffect(() => {
        localStorage.setItem(storageName, JSON.stringify(state))
    }, [state])

    return [state, setState]
}
