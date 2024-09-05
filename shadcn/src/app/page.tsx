'use client'
import Link from "next/link"
import { Bell, CircleUser, Home, LineChart, Menu,  Package, Package2, Search, ShoppingCart, Users,} from "lucide-react"
import { Sun, Moon } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Textarea } from "@/components/ui/textarea";
import { AlertDialogAction, AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { DashboardBlock2 } from "./dashboard2"

export default function DashboardBlock() {
  return <DashboardBlock2 />
}
