import React from 'react';
import Winner from "../../assets/awards/2024-05-27 14.25.39.jpg"

function Index(props) {
    return (

       
      <div>
        < section id='awards' className = "overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center" >
  <div className="p-8 px-4  md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p className="hidden text-gray-500 md:mt-8 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
        sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
        quisque ut interdum tincidunt duis.
              </p>
              <p className="hidden text-gray-500 md:mt-6 md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>
              <p className="hidden text-gray-500 md:mt-8 md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>


     
    </div>
  </div>

  <img
    alt=""
    src={Winner}
    className="h-full w-full object-contain sm:h-[calc(100%_-_5rem)] sm:self-end sm:rounded-ss-[50px] md:h-[calc(100%_-_5rem)] md:rounded-ss-[60px]"
  />
            </section >
        </div >
//         <div className="awards-container" id='awards'>
//             <div className="text-containerr">
//                 <h1>Osiyo va Jaxon chempionlarimiz bilan tanishing</h1>
//                 <p>Joriy yilning 2 martidan 24 martiga qadar Iordaniyaning Amman shahrida bo‘lib o‘tgan o‘smirlar o‘rtasidagi Osiyo chempionati viloyatimiz uchun barakali bo‘ldi, desak mubolag‘a bo‘lmaydi.

//                      Sababi ushbu musobaqalar doirasida Angren shahar 20-bolalar va o‘smirlar sport maktabi tarbiyalanuvchisi, ikki karra O‘zbekiston Chempioni, ko‘plab Xalqaro chempionatlar sovrindori Sunnatillo O‘ktamaliyev final janglarigacha kurashib, faxrli ikkinchi o‘rinni egalladi va chin ma’noda ustozlari ishonchini oqladi.

//  Shu munosabat bilan Angren shahar hokimi Nuritdin Abdurahimov boshchiligida Angren shahar Yoshlar ishlari agentligi, "Turizm va sport bo‘limi, shuningdek, Sunnatilloning murabbiylari chempionning xonadoniga tashrif buyurib, uni va oila a’zolarini g‘oliblik bilan qutladi..</p>
//             </div>
//             <div className="image-containerr">
//                 <img src={Winner} alt="" />
//             </div>
//         </div>
        





        
     );
}

export default Index;

        