import { io } from "socket.io-client";
import { useSessionStorage } from "./hooks/useSessionStorage";
import { Player } from "./entities/entities";

const URL = import.meta.env.VITE_API_URL;

const socket = io(URL, {
  autoConnect: false,
});

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("disconnect", () => {
  const { handleGetItem, handleRemoveItem } = useSessionStorage();

  const player = handleGetItem<Player>("player");

  if (player) {
    handleRemoveItem("player");
  }

  console.log("Disconnected from server");
});

export default socket;
