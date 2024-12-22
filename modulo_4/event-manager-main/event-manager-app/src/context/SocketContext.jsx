import { createContext } from "react";
import {io} from "socket.io-client"

export const SocketContext = createContext();

const socket = io("http://localhost:4000");

export default function SocketProvider({ children }){

    const [events, setEvents] = useState([]);
    useEffect(() => {
        socket.on("event:list", (data) => setEvents(data));
        socket.on("event:update", (data) => setEvents(data));

    return () => {
        socket.off("event:list");
        socket.off("event:update");
    }
}, []);

    const addEvent = (newEvent) => {
        socket.emit("event:add", newEvent);
    }

    return (
        <SocketContext.Provider value={{ events, addEvent }}>
            {children}
        </SocketContext.Provider>
    );
}