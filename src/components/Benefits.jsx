function Benefits() {

    const benefits = [

        {
            title:"Garantía Oficial",
            icon:"🛡️",
            text:"Todos nuestros productos cuentan con garantía."
        },

        {
            title:"Envíos Rápidos",
            icon:"🚚",
            text:"Envíos a todo el país."
        },

        {
            title:"Soporte Técnico",
            icon:"💻",
            text:"Asesoría especializada antes y después de tu compra."
        }

    ];

    return(

        <section className="bg-slate-100 py-16">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-10">

                    ¿Por qué elegir TechStore?

                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {

                        benefits.map((benefit,index)=>(

                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-8 text-center"
                            >

                                <div className="text-6xl">

                                    {benefit.icon}

                                </div>

                                <h3 className="text-2xl font-bold mt-4">

                                    {benefit.title}

                                </h3>

                                <p className="mt-4 text-gray-600">

                                    {benefit.text}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Benefits;