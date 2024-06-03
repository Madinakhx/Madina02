import React,{ useContext } from 'react';
import Winner from "../../assets/awards/2024-05-27 14.25.39.jpg"
import Winner2 from "../../assets/awards/2024-06-03 14.18.28.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Index(props) {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
         
            <div className="awards-container" id='awards'>
        <div data-aos="fade-up-right" className="text-side">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Osiyo va Jahon chempionimiz bilan tanishing.
          </h2>
          <p>
            2022-yilning 2 martidan 24 martiga qadar Iordaniyaning Amman shahrida bo‘lib o‘tgan o‘smirlar o‘rtasidagi Osiyo chempionati viloyatimiz uchun barakali bo‘ldi, desak mubolag‘a bo‘lmaydi.
          </p>
          <p>
            Sababi ushbu musobaqalar doirasida Angren shahar 2-bolalar va o‘smirlar sport maktabi tarbiyalanuvchisi, ikki karra O‘zbekiston Chempioni, ko‘plab Xalqaro chempionatlar sovrindori Sunnatillo O‘ktamaliyev final janglarigacha kurashib, faxrli ikkinchi o‘rinni egalladi va chin ma’noda ustozlari ishonchini oqladi.
          </p>
          <p>
            Shu munosabat bilan Angren shahar hokimligi boshchiligida Angren shahar Yoshlar ishlari agentligi, "Sport bo‘limi, shuningdek, Sunnatilloning murabbiylari chempionning xonadoniga tashrif buyurib, uni va oila a’zolarini g‘oliblik bilan qutladi.
          </p>
                </div>
                <div data-aos="fade-up-left" className="image-side">
                  <img src={Winner} alt="" />
                </div>
              </div>
        
          </SwiperSlide>
              <SwiperSlide>
       
            <div className="winner-container" id='awards'>
        <div data-aos="fade-up-right" className="text-s">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Boks 
          </h2>
          <p>
                  2024 yil 24-fevraldan 1-martagacha Andijon shahrida
Boks bo‘yicha O‘zbekiston chempionati bo‘lib o‘tdi. Unda Angren shahri 2-son sport maktabi o‘quvchisi Usubaliyev Asliddin 1- o‘rinni qo‘lga kiritib oltin medal sohibiga aylandi. Fursatdan foydalanib ustozi va otasi Muzaffar Sultonovni tabriklaymiz.          </p>
          <p>
Yoshlar o'rtasidagi bo'lib o'tgan musobaqaga puxta tayyorgarlik ko'rganligi hamda tirishqoqligi,chidamliligi  sababli   ushbu natijani qo'lga kiritdi.        </p>
                <p>
                  Sport maktabi sharafini munosib himoya qildi. Kelajakda O'z nomini jahonga tanitish maqsadida yana o'z ustida yana ham qattiqroq ishlamoqda.
          </p>
        </div>
        <div data-aos="fade-up-left" className="image-s">
          <img src={Winner2} alt="" />
        </div>
            </div>
      
       
        

            

    
       
         
   
          </SwiperSlide>

        </Swiper>
      </>
        
     );
}

export default Index;

      