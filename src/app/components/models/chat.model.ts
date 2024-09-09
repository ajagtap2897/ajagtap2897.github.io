import { Message } from "./message.model";
import { User } from "./user.model";

export interface Chat {
    user: User;
    last_message: Message
}