import {useEffect, useState} from "react";
import {IMovie} from "../types/IMovie";


export default function useFetching<T>(callback: Function) {
    const [data, setData] = useState<null | T>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('')


    useEffect(() => {
        setIsLoading(true)
        callback()
            .then((response: T) => setData(response))
            .catch((error: any) => {
                if (typeof error === 'string') {
                    setError(error)
                } else if (error instanceof Error) {
                    setError(error.message)
                }
            })
            .finally(() => setIsLoading(false))
    }, [])

    return {
        data: data,
        isLoading: isLoading,
        error: error,
    };
}

