"use client"
import React from "react"
import ThemeToggle from "./ui/mode"
export default function Navbar() {
    return <div className="flex flex-row w-full h-16 bg-slate-100 dark:bg-black items-center justify-between">
        <div className="flex flex-row ml-20">
            <div className="font-bold text-xl">Molecule Properties Predictor</div>
        </div>
        <div className="mr-2">
            <ThemeToggle />
        </div>

    </div>
}