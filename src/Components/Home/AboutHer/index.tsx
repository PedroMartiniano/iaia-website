'use client'

import { Button } from "@/Components/Button";
import { Instagram } from "lucide-react";
import Link from "next/link";

export function AboutHer() {
    return (
        <div className="pt-24">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-8 lg:ml-10">Sobre Ela</h1>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start min-h-screen p-5">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/iaia-2.jpeg" alt="foto" className="rounded-full w-48 h-48 lg:w-72 lg:h-72 border-2 border-green-800 shadow-xl" />
                    <div className="flex w-full justify-center items-center gap-1 mt-5">
                        <Link href={'https://www.instagram.com/mariahlemos_/'} passHref={true} target="_blanck">
                            <Button variant="ghost" className="w-13 h-13 cursor-pointer rounded-full">
                                <Instagram />
                            </Button>
                        </Link>

                    </div>
                </div>
                <div className="flex flex-col item-center justify-center">
                    <div className="flex flex-col gap-5 border-l-2 border-green-950">

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-green-100 border-2 border-green-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Mariah</h2>
                                <p className="text-sm text-justify">Tenho pensado bastante no que posso dizer aqui, ao mesmo tempo que tenho um zilhão de coisas para falar, não sei por onde começar. Mas enfim, para descrever a Mariah{'('}ou iaiá para os mais intímos{')'}, não posso começar de outra maneira sem ser dizendo que ela é uma das pessoas que emanam a energia mais gostosa que já senti, aquela energia que faz você ter uma paz que não encontra em muitos lugares. A Mariah é uma menina dos cabelos e olhos escuros, com a pele clarinha, e com sorriso mais lindo que existe, ela é também uma garota que tem muito a ensinar para os outros sem precisar dizer 1 palavra se quer, pois por mais que sua beleza seja de outro mundo, não é o que mais impressiona, acredite em mim. </p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-green-100 border-2 border-green-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Mais um pouquinho sobre ela</h2>
                                <p className="text-sm text-justify">Muitas pessoas não sabem, mas ela é a garota mais esforçada que eu já vi, quando ela quer algo, ela corre atrás de verdade, e não desanima tão fácil. Desde que a conheci, pude ver de perto também o quanto ela faz tudo com amor, é uma menina que ama fazer presentes a mão, pois é uma das maneiras que mais sabe demonstrar seu sentimento para as pessoas, desde cartinhas das mais variadas formas, até artes em papel, mas enfim, quem nunca ganhou um presentinho desses dela né? Ela é também uma garota que ama flores, que sonha em morar na Itália e ter sua floricultura, ou somente um jardim para cuidar em sua casa. A Mariah é uma garota com milhares de detalhes incríveis, detalhes esses que eu talvez nunca consiga descrever nem 1% aqui, não importa o quanto eu escreva, porém espero ter conseguido dar um {'"'}gostinho{'"'} do quanto sou sortudo por ter ela e do quanto ela é realmente maravilhosa.</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-green-100 border-2 border-green-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Nós</h2>
                                <p className="text-sm text-justify">Gostaria de tirar um paragrafa para falar um pouco sobre nós. Eu a conheci no dia 15 de outubro de 2022, desde então passamos por muita coisa, muitos altos e baixos que por incrível que pareça, no final sempre nos fizeram ficarmos cada vez mais juntos. Desde o momento que a conheci, eu sabia que ela era diferente, só não sabia que significaria tanto para mim quanto ela significa, nunca fui muito de demonstrar sentimentos, mas com ela sempre foi uma coisa tão natural que nem percebia, na verdade, com ela sempre foi tudo natural, desde o início, acho que é porque as energias combinaram sabe? Só tenho a agradecer por esse 1 ano e meio que eu vivi até o momento ao lado dela, pois também tenho certeza que sou uma pessoa muito melhor desde que a conheci.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}