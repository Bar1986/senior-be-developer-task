import { Message } from "./Database";

export class Queue {
    private messages: Message[];
    private pendingMessages: Map<string, number> = new Map();

    constructor() {
        this.messages = [];
    }

    Enqueue = (message: Message): void => {
        this.messages.push(message);
    };

    Dequeue = (workerId: number): Message | undefined => {
        const currentMessage = this.messages.shift();
        if (currentMessage) {
            this.pendingMessages.set(currentMessage.id, workerId)
        }
        return currentMessage
    };

    Confirm = (workerId: number, messageId: string) => {
        if (this.pendingMessages.get(messageId) === workerId) {
            this.pendingMessages.delete(messageId);
        }
           
    };

    Size = (): number => {
        return this.messages.length + this.pendingMessages.size;
    };
}
