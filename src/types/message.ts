import { Medium } from "./medium"

export type Message = {
    
        id: number;
        title: string;
        fullName: string;
        text: string;
        date: string;
        medium: Medium;
        status: boolean;
    
}