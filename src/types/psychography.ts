import { Medium } from "./medium"

export type Psychography = {
    id: number;
    title: string;
    text: string;
    fullName: string;
    date: string;
    medium: Medium;
    status: boolean;
}