
export default function Projects() {
    return (
        <div className="min-h-screen pt-24">
            <h1 className="font-bold font-sans text-green-950 text-2xl lg:text-3xl mb-16 lg:ml-10">Nossa Galeria</h1>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2 pt-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/nos-1.jpeg" alt="foto-projeto" className="p-5 border-2 w-1/2 border-green-950 rounded-md shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-emerald-600">Nossa Primeira Foto Postada</h2>
                    <p className="text-md lg:text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit laudantium consectetur reprehenderit, corporis voluptatibus deleniti voluptatem natus, nam quas mollitia aspernatur quam, delectus maxime assumenda numquam? Minus, tempora quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fuga exercitationem assumenda voluptatibus magni itaque voluptas ipsa accusantium. Illum nisi nobis sit a minima enim reprehenderit libero ab unde quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed nulla nisi tempora quod tenetur iusto hic illum doloribus architecto aut neque quaerat aspernatur delectus quas, odio provident officia repudiandae?</p>
                    <h3 className="text-md font-sans font-semibold italic">28/01/2023</h3>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

        </div>
    )
}