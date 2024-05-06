
export default function Projects() {
    return (
        <div className="min-h-screen pt-24">
            <h1 className="font-bold font-sans text-green-950 text-2xl lg:text-3xl mb-10 lg:ml-10">Nossa Galeria</h1>

            {/*Primeira coluna */}
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5">
                <div className="flex flex-col w-full justify-center items-center pb-20">
                    <img src="/nos-1.jpeg" alt="foto" className="p-5 border-2 sm:w-[45%] border-green-950 rounded-md shadow-inner hover:brightness-90" />
                    <div className="flex flex-col sm:px-14 pt-8 gap-5 lg:gap-5">
                        <h2 className="text-xl font-sans font-bold text-emerald-600 text-center">Nossa Primeira Foto Postada</h2>
                        <p className="text-md lg:text-md text-justify">Nossa primeira foto que postamos no instagram, você tinha acabado de voltar de uma viagem de mais de um mês e era o dia do aniversário da sua mãe, foi também o dia que conheci grande parte da sua família, amei muito estar presente com você nesse momento.</p>
                        <h3 className="text-md text-emerald-950 font-sans font-semibold italic text-right">28/01/2023</h3>
                    </div>
                </div>

                <div className="flex flex-col w-full justify-center items-center pb-20">
                    <img src="/nos-2.jpeg" alt="foto" className="p-5 border-2 sm:w-[45%] border-green-950 rounded-md shadow-inner hover:brightness-90" />
                    <div className="flex flex-col sm:px-14 pt-8 gap-5 lg:gap-5">
                        <h2 className="text-xl font-sans font-bold text-emerald-600 text-center">Dia que conheci seus avós</h2>
                        <p className="text-md lg:text-md text-justify">Primeira vez que fui na chacara dos seus avós e conheci eles, gostei muito deles, ficamos a tarde toda juntos, nadamos e tudo mais. Sou uma pessoa extremamente timida, mas com você sempre fiquei confortável.</p>
                        <h3 className="text-md text-emerald-950 font-sans font-semibold italic text-right">06/02/2023</h3>
                    </div>
                </div>

            </div>

            {/*Segunda coluna */}
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5">
                <div className="flex flex-col w-full justify-center items-center pb-20">
                    <img src="/nos-7.jpeg" alt="foto" className="p-5 border-2 sm:w-[45%] border-green-950 rounded-md shadow-inner hover:brightness-90" />
                    <div className="flex flex-col sm:px-14 pt-8 gap-5 lg:gap-5">
                        <h2 className="text-xl font-sans font-bold text-emerald-600 text-center">Nosso primeiro retratinho</h2>
                        <p className="text-md lg:text-md text-justify">Dia do aniversário da sua tia, onde estava toda sua família. Tiraram esse nosso retratinho, e que você deixou na sua capinha do celular por muito tempo, e até hoje temos guardado.</p>
                        <h3 className="text-md text-emerald-950 font-sans font-semibold italic text-right">18/02/2023</h3>
                    </div>
                </div>

                <div className="flex flex-col w-full justify-center items-center pb-20">
                    <img src="/nos-5.jpeg" alt="foto" className="p-5 border-2 sm:w-[45%] border-green-950 rounded-md shadow-inner hover:brightness-90" />
                    <div className="flex flex-col sm:px-14 pt-8 gap-5 lg:gap-5">
                        <h2 className="text-xl font-sans font-bold text-emerald-600 text-center">Somos lindos né?</h2>
                        <p className="text-md lg:text-md text-justify">Dia que fomos da casa do Luca comer com ele e a Jullia, e tiramos diversas fotos lindas como essa, e que você está maravilhosa, como sempre.</p>
                        <h3 className="text-md text-emerald-950 font-sans font-semibold italic text-right">05/03/2023</h3>
                    </div>
                </div>
            </div>

            {/*Terceira coluna */}
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5">
                <div className="flex flex-col w-full justify-center items-center pb-20">
                    <img src="/nos-3.jpeg" alt="foto" className="p-5 border-2 sm:w-[45%] border-green-950 rounded-md shadow-inner hover:brightness-90" />
                    <div className="flex flex-col sm:px-14 pt-8 gap-5 lg:gap-5">
                        <h2 className="text-xl font-sans font-bold text-emerald-600 text-center">Viagem do seu aniversário para o rancho</h2>
                        <p className="text-md lg:text-md text-justify">Essa foto é de um fim de semana que viajamos para o rancho com seu pai para comemorar seu aniversário de 16 anos, e a primeira vez que ficamos juntos por muito tempo. Seu aniversário é uma data extremamente especial para você, e eu amei fazer parte dela pela primeira vez.</p>
                        <h3 className="text-md text-emerald-950 font-sans font-semibold italic text-right">01/05/2023</h3>
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center pb-20">
                    <img src="/nos-4.jpeg" alt="foto" className="p-5 border-2 sm:w-[45%] border-green-950 rounded-md shadow-inner hover:brightness-90" />
                    <div className="flex flex-col sm:px-14 pt-8 gap-5 lg:gap-5">
                        <h2 className="text-xl font-sans font-bold text-emerald-600 text-center">Seu primeiro aniversário com você</h2>
                        <p className="text-md lg:text-md text-justify">Essa foto é de um dia antes do seu aniversário, estávamos no casamento dos seus tios, e eu pude passar a virada do seu aniversário com você dormindo em meus braços, pois já estava cansada da festa, afinal, você tem a bateria viciada kkkk, foi também um dos dias mais especiais para nós.</p>
                        <h3 className="text-md text-emerald-950 font-sans font-semibold italic text-right">06/05/2023</h3>
                    </div>
                </div>


            </div>

            {/*Quarta coluna */}
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5">
                <div className="flex flex-col w-full justify-center items-center pb-20">
                    <img src="/nos-8.jpeg" alt="foto" className="p-5 border-2 sm:w-[45%] border-green-950 rounded-md shadow-inner hover:brightness-90" />
                    <div className="flex flex-col sm:px-14 pt-8 gap-5 lg:gap-5">
                        <h2 className="text-xl font-sans font-bold text-emerald-600 text-center">Festa Junina</h2>
                        <p className="text-md lg:text-md text-justify">Essa não é uma foto nossa, porém uma foto que tirei de você, pois eu estava te achando extremamente fofa e linda. Esse foi o dia da festa junina da Vila Hípica, seu condomínio, e você me fez até dançar foró com você, algo que eu nunca imaginaria fazer kkkk.</p>
                        <h3 className="text-md text-emerald-950 font-sans font-semibold italic text-right">30/06/2023</h3>
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center pb-20">
                    <img src="/nos-6.jpeg" alt="foto" className="p-5 border-2 sm:w-[45%] border-green-950 rounded-md shadow-inner hover:brightness-90" />
                    <div className="flex flex-col sm:px-14 pt-8 gap-5 lg:gap-5">
                        <h2 className="text-xl font-sans font-bold text-emerald-600 text-center">Dia que fomos comer no duzé</h2>
                        <p className="text-md lg:text-md text-justify">Nem toda foto precisa ter um grande significado para ser especial, esse dia por exemplo, fomos apenas comer no duzé, porém nós estavamos bem felizes, e foi um dia que marcou, apenas pelo fato de estarmos felizes por estamos juntos.</p>
                        <h3 className="text-md text-emerald-950 font-sans font-semibold italic text-right">04/07/2023</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}