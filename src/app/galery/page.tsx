
export default function Projects() {
    return (
        <div className="min-h-screen pt-24">
            <h1 className="font-bold font-sans text-green-950 text-2xl lg:text-3xl mb-10 lg:ml-10">Nossa Galeria</h1>

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
                    <img src="/nos-1.jpeg" alt="foto" className="p-5 border-2 sm:w-[45%] border-green-950 rounded-md shadow-inner hover:brightness-90" />
                    <div className="flex flex-col sm:px-14 pt-8 gap-5 lg:gap-5">
                        <h2 className="text-xl font-sans font-bold text-emerald-600 text-center">Nossa Primeira Foto Postada</h2>
                        <p className="text-md lg:text-md text-justify">Nossa primeira foto que postamos no instagram, você tinha acabado de voltar de uma viagem de mais de um mês e era o dia do aniversário da sua mãe, foi também o dia que conheci grande parte da sua família, amei muito estar presente com você nesse momento.</p>
                        <h3 className="text-md text-emerald-950 font-sans font-semibold italic text-right">28/01/2023</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}