'use client'

import { Button } from "@/Components/Button";
import { useRouter } from "next/navigation";

export function LandingPage() {
    const router = useRouter()

    return (
        <div className="flex flex-col gap-6 pt-20 lg:grid lg:grid-cols-2 justify-center items-center h-screen">
            <div className="hidden lg:flex justify-center">
                <img src="/iaia.jpeg" alt="" className="w-3/5 mb-4 rounded-full border-2 border-green-800" />
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="font-sans font-extrabold text-3xl self-start">Olá, essa é uma homenagem feita para <span className="text-emerald-600">Mariah Lemos Silva Faleiros</span></h1>
                <h2 className="font-sans font-extrabold text-2xl self-start text-emerald-600">A menina mais incrível desse mundo!</h2>
                <p className="text-sm text-justify">
                    Estou aqui para contar um pouquinho sobre a iaiá. Ela é uma pessoa extremamente especial para mim e que merece todo o amor e carinho do mundo. Espero que essa homenagem encha um pouco seu coração de amor, para você saber o que sinto sempre que estou com ela, aproveite!
                </p>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <Button variant="outline" onClick={() => router.push('/#about-her')}>Sobre Ela</Button>
                    <Button variant="primary" onClick={() => router.push('/galery')}>Nossa Galeria</Button>
                </div>
            </div>
        </div>
    )
}