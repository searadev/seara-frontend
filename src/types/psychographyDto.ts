import { Medium } from "./medium"

export type PsychographyDto = {
    id: number;
    title: string;
    fullName: string;
    date: string;
    medium: Medium;
    status: true;
}