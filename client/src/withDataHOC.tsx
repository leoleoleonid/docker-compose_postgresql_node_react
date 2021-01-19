import React, {useEffect, useState} from "react";
import {TreeI} from "./interfaces";
import {getTree} from "./api";

const withData = (
    WrappedComponent: React.ComponentType<
        React.PropsWithChildren<{  data : TreeI[] }>
        >
) => {
    return ({ children }: React.PropsWithChildren<{}>) => {
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState<Error | undefined>();
        const [initialState, setInitialState] = useState([]);

        useEffect(() => {
            const fetchInitialState = async () => {
                try {
                    const {data} = await getTree();
                    console.log('requestedData', data);
                    setInitialState(data);
                } catch (e) {
                    setError(e);
                }
                setIsLoading(false);
            };
            fetchInitialState();
        }, [])
        if (isLoading) {
            return <div>Loading</div>
        }

        if (error) {
            return <div>{error.message}</div>
        }

        return (
            <WrappedComponent data={initialState}>
                {children}
            </WrappedComponent>
        )
    }
}

export default withData;
