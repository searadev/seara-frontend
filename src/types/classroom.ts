import { Medium } from "./medium";
import { Module } from "./module";

 export type ClassRoom = {
    id: number;
    title: string;
    url: string;
    date: string;
    module: Module;  
    medium: Medium
}