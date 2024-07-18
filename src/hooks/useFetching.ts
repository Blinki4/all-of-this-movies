import {useEffect, useState} from "react";


export default function useFetching(callback: Function) {
    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('')


    useEffect(() => {
        setIsLoading(true)
        callback()
            .then((response: any) => setData(response))
            .catch((error: any) => {
                if (typeof error === 'string') {
                    setError(error)
                } else if (error instanceof Error) {
                    setError(error.message)
                }
            })
            .finally(() => setIsLoading(false))
    }, [])

    return [data, isLoading, error];
}

