import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

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