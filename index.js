import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

export default function useSocketIo(endpoint, onFunctionName) {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(endpoint);
        socket.on(onFunctionName, data => {
            setResponse(data);
        });
    }, []);

    return [response]
}