'use client'

import { Button } from "@/Components/Button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function AboutMe() {
    const router = useRouter()

    return (
        <div className="pt-24">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-8 lg:ml-10">Sobre Ela</h1>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start min-h-screen p-5">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/iaia.jpeg" alt="foto-perfil" className="rounded-full w-48 h-48 lg:w-72 lg:h-72 border-2 border-green-700 shadow-xl" />
                    <div className="flex w-full justify-center items-center gap-1 mt-5">
                        <Link href={'https://www.instagram.com/mariahlemos_/'} passHref={true} target="_blanck">
                            <Button variant="ghost" className="w-13 h-13 cursor-pointer rounded-full">
                                <Instagram />
                            </Button>
                        </Link>

                    </div>
                </div>
                <div className="flex flex-col item-center justify-center">
                    <div className="flex flex-col gap-5 border-l-2 border-gray-950">

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Mariah</h2>
                                <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, porro! Illum eos aut id aliquam neque ducimus aperiam minus nostrum culpa earum, aspernatur vero beatae? Sed, repudiandae repellendus. Soluta, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, rerum eius itaque praesentium corporis, aliquam iste cum similique est labore tenetur veritatis voluptatum nesciunt veniam inventore perspiciatis voluptas, quaerat dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil explicabo minima provident facere facilis velit autem aperiam expedita in eveniet officia voluptatum sed repellat ea quia rem, quidem sit?</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Lorem</h2>
                                <p className="text-sm text-justify">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo labore hic necessitatibus unde itaque porro rerum animi, quibusdam cumque quisquam ipsa, placeat reiciendis ratione aspernatur quod nostrum dolorem praesentium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt reiciendis perspiciatis saepe dolor nemo nam impedit dolores soluta quae. Aliquid accusamus quo totam, ducimus deserunt similique ex explicabo libero repudiandae.</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Lorem</h2>
                                <p className="text-sm text-justify">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo labore hic necessitatibus unde itaque porro rerum animi, quibusdam cumque quisquam ipsa, placeat reiciendis ratione aspernatur quod nostrum dolorem praesentium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt reiciendis perspiciatis saepe dolor nemo nam impedit dolores soluta quae. Aliquid accusamus quo totam, ducimus deserunt similique ex explicabo libero repudiandae.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}