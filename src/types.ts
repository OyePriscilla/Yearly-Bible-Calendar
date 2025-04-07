import { JSX } from "react";

export interface NavbarItem {
    path: string;
    element: JSX.Element;
}

export interface BibleReading {
    month: string;
    date: number;
    "Old Testament I": string;
    "Old Testament II": string;
    "New Testament": string;
  }