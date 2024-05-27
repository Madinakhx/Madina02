import React from 'react';
import About from '../../assets/about/2024-05-15 15.24.50 4.jpg'
import About2 from '../../assets/about/YuQH4bqoym8.jpg'

function Index(props) {
    return (
       
        <div className="about-container" id='about'>
            <div className="text-container">
                <h1>Biz haqimizda</h1>
                <p>Boks saroyi 1986-yil qurib bitirilib foydalanishga topshirirlgan. Ushbu saroyda O‘zbekistonda xizmat ko‘rsatgan murabbiu A.D.Soy, oliy toifali trenerlar Ye.P.Soy, I.Gifrimov, A.Bakirovlar faoliyat olib borgan.
                    1987-yil Z.Abduqodirov sobiq ittifoq chempioni, 1989-yil T,Siroilov xarbiylar o‘rtasida sobiq ittifoq chempioni, o‘smirlar o‘rtasida Ilxom Parpiyev, Isomiddin Parpiyevlar sobiq ittifoq sovrindorlari bo‘lishgan. Shu kunga qadar 30 dan ziyod sport ustalari yetishib chiqqan.
                    2022-yil mart oyida Sunnatilla Uktamaliyev Iordaniyaning Amman shaxrida o‘tkazilgan Osiyo chempionatining kumush medalini qo‘lga kirtdi.
                    2024-yil fevral oyida Andijon shahrida o‘smirlar o‘rtasida o‘tkazilgan O‘zbekiston chempionatida Asliddin Usubaliyev O‘zbekiston chempioni bo‘ldi.
                    Xozirgi kunda Boks saroyida 200 dan ortiq yosh bokschilar taxsil olishmoqda.
                    Angren shahar sport qo‘mitasi tarkibida 4 ta sport maktabi faoliyat olib borgan (futbolga ixtisoslashtirilgan sport maktabi, o‘yin va yengil atletika sport maktabi, boks sport maktabi, yakka turlar sport maktabi).</p>
            </div>
            <div className="image-container">
                <img src={About2} alt="" />
            </div>
        </div>
     
            
      
    );
}

export default Index;
        //  <section id='about' className=" m overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        //                    <div className=" md:p-12 lg:px-16 lg:py-24">
        //                        <div className="  max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        //                            <h2 className="text-3xl font-Times New Roman text-gray-900 md:text-3xl">
        //                               Angren shahar Boks saroyi tarihi
        //                            </h2>
           
        //                            <p className="text-xl text-black  md:mt-4 md:block">
        //                                Boks saroyi 1986-yil qurib bitirilib foydalanishga topshirirlgan. Ushbu saroyda O‘zbekistonda xizmat ko‘rsatgan murabbiu A.D.Soy, oliy toifali trenerlar Ye.P.Soy, I.Gifrimov, A.Bakirovlar faoliyat olib borgan.
        //                                1987-yil Z.Abduqodirov sobiq ittifoq chempioni, 1989-yil T,Siroilov xarbiylar o‘rtasida sobiq ittifoq chempioni, o‘smirlar o‘rtasida Ilxom Parpiyev, Isomiddin Parpiyevlar sobiq ittifoq sovrindorlari bo‘lishgan. Shu kunga qadar 30 dan ziyod sport ustalari yetishib chiqqan.
        //                                2022-yil mart oyida Sunnatilla Uktamaliyev Iordaniyaning Amman shaxrida o‘tkazilgan Osiyo chempionatining kumush medalini qo‘lga kirtdi.
        //                                2024-yil fevral oyida Andijon shahrida o‘smirlar o‘rtasida o‘tkazilgan O‘zbekiston chempionatida Asliddin Usubaliyev O‘zbekiston chempioni bo‘ldi.
        //                                Xozirgi kunda Boks saroyida 200 dan ortiq yosh bokschilar taxsil olishmoqda.
        //                            </p>
           
                                   
        //                        </div>
        //                    </div>
           
        //                    <img
        //                        alt=""
        //                        src={About}
        //                        className="h-64 w-100  sm:h-[calc(100%_-_2rem)] sm:self-end   "
        //                    />
        //                </section>  
