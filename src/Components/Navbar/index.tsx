'use client'

import { Tabs } from "./Tabs";
import { useRouter } from "next/navigation";
import * as Collapsible from '@radix-ui/react-collapsible'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
    const router = useRouter()

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    return (
        <div className="fixed w-full bg-green-50 z-50 flex h-20 px-12 py-2 border-b shadow-lg mb-4 sm:mb-0">
            <img src="/logo.png" alt="logo" className="cursor-pointer border rounded border-emerald-600" onClick={() => router.push('/')} />
            <div className="flex lg:hidden ml-auto items-center">
                <Collapsible.Root className="z-20" onOpenChange={setIsNavbarOpen}>
                    <Collapsible.Trigger asChild>
                        <button className="rounded-full px-2 w-10 h-10 hover:bg-emerald-500 shadow-none hover:brightness-90 z-50">
                            {(!isNavbarOpen) ? <Menu /> : <X />}
                        </button>
                    </Collapsible.Trigger>
                    <Collapsible.Content forceMount asChild className="absolute top-16 right-1 shadow-lg border border-green-100 px-10 data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade">
                        <div className="flex flex-1 flex-col gap-6 bg-green-100 h-screen w-80">
                            <Tabs />
                        </div>
                    </Collapsible.Content>
                </Collapsible.Root>
            </div>
            <div className="hidden lg:flex ml-auto">
                <Tabs />
            </div>
        </div>
    )
}