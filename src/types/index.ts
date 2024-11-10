// src/types/index.ts
export interface ChatMessage {
    text: string;
    time: string;
    userId?: string;
    name?: string;
}

export interface ServerToClientEvents {
    'chat message': (message: ChatMessage) => void;
}

export interface ClientToServerEvents {
    'chat message': (message: ChatMessage) => void;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    userId: string;
    name?: string;
}