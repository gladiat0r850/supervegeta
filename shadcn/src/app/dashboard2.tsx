import React, { useEffect, useState } from "react";
import { HeroSection } from "./hero";
import Navbar from "./navbar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import Code from "./Code";
import Footer from "./footer";

export function DashboardBlock2() {
    return <>
        <Navbar />
        <HeroSection />
        <div className="mt-40">
            <Code />
        </div>
        <div className="flex justify-center mt-20">
            <Footer />
        </div>
    </>
}
