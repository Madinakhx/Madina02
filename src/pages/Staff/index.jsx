import React,{ useRef, useState } from 'react';
import D from '../../assets/staff/2024-05-27 18.42.05.jpg'
import F from '../../assets/staff/Снимок экрана 2024-05-27 в 18.43.16.png'
import Sh from '../../assets/staff/Снимок экрана 2024-05-30 в 13.40.55.png'
import N from '../../assets/staff/2024-06-03 13.09.03.jpg'
import Y from '../../assets/staff/Снимок экрана 2024-05-30 в 13.37.11.png'
import B from '../../assets/staff//Снимок экрана 2024-05-31 в 12.30.55.png'
import dilshat from '../../assets/staff//Снимок экрана 2024-05-31 в 15.32.23.png'
import djumabayev from '../../assets/staff//Снимок экрана 2024-05-31 в 15.32.46.png'
import yuldashev from '../../assets/staff//Снимок экрана 2024-05-31 в 15.40.23.png'
import esanbayev from '../../assets/staff//Снимок экрана 2024-05-31 в 15.46.48.png'
import rakov from '../../assets/staff//Снимок экрана 2024-05-31 в 15.53.34.png'
import umirov from '../../assets/staff//Снимок экрана 2024-05-31 в 16.02.50.png'
import sobirov from '../../assets/staff//Снимок экрана 2024-05-31 в 16.16.56.png'
import melikulov from '../../assets/staff//Снимок экрана 2024-05-31 в 16.20.59.png'
import anarbayev from '../../assets/staff//Снимок экрана 2024-05-31 в 16.29.13.png'
import arzikulova from '../../assets/staff//Снимок экрана 2024-05-31 в 16.34.13.png'
import qalandarov from '../../assets/staff//Снимок экрана 2024-05-31 в 16.40.43.png'
import usmonov from '../../assets/staff//Снимок экрана 2024-06-02 в 00.23.25.png'
import axmedov from '../../assets/staff//Снимок экрана 2024-06-02 в 00.28.41.png'
import sultonov from '../../assets/staff//Снимок экрана 2024-06-02 в 00.33.29.png'
import yusupov from '../../assets/staff//Снимок экрана 2024-06-02 в 00.42.12.png'
import Raxmankulova from '../../assets/staff//Снимок экрана 2024-06-02 в 00.48.59.png'
import tillayev from '../../assets/staff//Снимок экрана 2024-06-02 в 15.23.09.png'
import turgunov from '../../assets/staff//Снимок экрана 2024-06-02 в 15.26.09.png'
import zulfiqarova from '../../assets/staff/Снимок экрана 2024-06-02 в 15.29.16.png'
import Mamatkulov from '../../assets/staff/Снимок экрана 2024-06-03 в 13.55.08.png'
import Nabiyev from '../../assets/staff/Снимок экрана 2024-06-03 в 14.00.20.png'
import Ismailov from '../../assets/staff/Снимок экрана 2024-06-03 в 14.09.05.png'

import Ablayeva from '../../assets/staff/Снимок экрана 2024-06-03 в 14.05.25.png'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

 function Index() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                  
                    <div className='cursor-pointer'>
                     
                        <div className=" flex items-center justify-center py-4 " id='staff'>
                            <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className="flex justify-center">
                                    <img
                                        alt=""
                                        src={D} className="h-56 w-40 object-contain" />
                                </div>

                                <div className="bg-white p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-gray-500">  2020 </time>

                                    <a href="#">
                                        <h3 className=" text-lg text-gray-900">   Yusupov Bekjon Uktamaliyevich <br />Angren shahar 2-son sport maktabi direktori.</h3>
                                    </a>

                                    <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                        O'zbekiston Boks Federatsiyasi hakamlar hayati raisi. <br/> Uch yulduzli Xalqaro toifadagi hakam.
                                       <br/> 2020y-h.v .Angren shahar 2-son sport maktabi direktori.

                                    </p>
                                </div>

                            </article>
                        </div>
                        <div class="  grid    sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 px-4 pb-4 " id='staff'>
                            <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className="flex justify-center">
                                    <img
                                        alt=""
                                        src={Raxmankulova} className="h-56 w-40 object-contain"
                                    />
                                </div>

                                <div className="bg-white p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-gray-500">  2020 </time>

                                    <a href="#">
                                        <h3 className=" text-lg text-gray-900">   Raxmankulova Barno Saxibjanovna <br />Badiiy gimnastika bo’limi o’rindosh trener.</h3>
                                    </a>

                                    <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                        2020-2024  Angren shahar 2-son sport maktabida O’quv ishlari buyicha direktor o’rinbosar va Badiiy gimnastika bo’limi trener.

                                    </p>
                                </div>
                            </article>
                            <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className="flex justify-center">
                                    <img
                                        alt=""
                                        src={Sh} className="h-56 w-40 object-contain"
                                    />
                                </div>

                                <div className="bg-white p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-gray-500">  2021 </time>

                                    <a href="#">
                                        <h3 className=" text-lg text-gray-900">         Sultonov Shahriyor Islambekovich <br />Angren shahar 2-son sport maktabi instruktor-metodisti, trener.</h3>
                                    </a>

                                    <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">

                                        2021 y-h.v. Angren shahar 2-son sport maktabi Taekvondo bo’limi trener-o’qituvchisi.

                                    </p>
                                </div>
                            </article>
                            <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className="flex justify-center">
                                    <img
                                        alt=""
                                        src={F} className="h-56 w-40 object-contain"
                                    />
                                </div>

                                <div className="bg-white p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                    <a href="#">
                                        <h3 className=" text-lg text-gray-900">  Mavlyanov Furqat Abduxalikovich <br />Taekvando WTF bo’limida trener.</h3>
                                    </a>

                                    <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                        2022-2024 Angren shahar 2-son Sport maktabi OSR va SIB direktor o’rinbosari lavozimida va Taekvando bo’limida trener-o’qituvchi vazifasida ishlamoqda.



                                    </p>
                                </div>
                            </article>
                            <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={N} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2021 </time>

                                <a href="#">
                                        <h3 className=" text-lg text-gray-900">              Abdukarimova Nigora Baxodir qizi  <br />Angren shahar 2-son sport maktabi instruktor-metodisti, trener .</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2021y-h.v.      Angren shahar 2-son sport maktabi  Taekvondo bo’limi trener-o’qituvchi.                                </p>
                            </div>
                        </article>
                        </div>
                    </div>
                   
                </SwiperSlide>
                <SwiperSlide>
                    <div class="  grid    sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 px-4 py-4" id='staff'>
                    <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <div className="flex justify-center">
                            <img
                                alt=""
                                src={dilshat} className="h-56 w-40 object-contain"
                            />
                        </div>

                        <div className="bg-white p-4 sm:p-6">
                            <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                            <a href="#">
                                    <h3 className=" text-lg text-gray-900"> Turakulov Dilshat Abubakirovich <br />Taekvando WTF bo’limi o’rindosh trener.</h3>
                            </a>

                            <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y-h.v      –Angren shahar 2-son sport maktabi Taekvando WTF bo’limi o’rindosh trener-o’qituvchisi.
                            </p>
                        </div>
                    </article>
                    <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <div className="flex justify-center">
                            <img
                                alt=""
                                src={djumabayev} className="h-56 w-40 object-contain"
                            />
                        </div>

                        <div className="bg-white p-4 sm:p-6">
                            <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                            <a href="#">
                                    <h3 className=" text-lg text-gray-900"> Djumabayev Alisher Umarjanovich<br />Boks bo’limida trener.</h3>
                            </a>

                            <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022yy  Angren shahar 2-son sport maktabida Boks bo’limi trener-o’qituvchisi.


                            </p>
                        </div>
                    </article>
                    <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <div className="flex justify-center">
                            <img
                                alt=""
                                src={yuldashev} className="h-56 w-40 object-contain"
                            />
                        </div>

                        <div className="bg-white p-4 sm:p-6">
                            <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                            <a href="#">
                                    <h3 className=" text-lg text-gray-900">           Yuldashev Xiloldin Raimovich  <br />  Ashixara Karate bo’limida  trener.   </h3>
                            </a>

                            <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y-h.v  Angren shahar 2-son sport maktabida Ashixara-karate bo’limi o’rindosh rener-o’qituvchisi.


                            </p>
                        </div>
                    </article>
                   
                    <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <div className="flex justify-center">
                            <img
                                alt=""
                                    src={esanbayev} className="h-56 w-40 object-contain"
                            />
                        </div>

                        <div className="bg-white p-4 sm:p-6">
                            <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                            <a href="#">
                                    <h3 className=" text-lg text-gray-900"> Esanbayev Batir Baxtiyarovich <br />Boks bo’limida trener.</h3>
                            </a>

                            <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y- h.v   Angren shahar 2-son sport maktabida Boks bo’limi trener-o’qituvchisi.

                            </p>
                        </div>
                    </article>
                    <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <div className="flex justify-center">
                            <img
                                alt=""
                                    src={rakov} className="h-56 w-40 object-contain"
                            />
                        </div>

                        <div className="bg-white p-4 sm:p-6">
                            <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                            <a href="#">
                                    <h3 className=" text-lg text-gray-900">  Rakov Murod Saparovich <br />Kurash bo’limi treneri. </h3>
                            </a>

                            <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    o’qituvchi
                                    2022y-h.v    Angren shahar 2-son sport maktabi Kurash bo’limi trener-o’qituvchi.
                            </p>
                        </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={tillayev} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">           Tillyaev Shukurxon Saidovich  <br />  Boks bo’limida trener.   </h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y-.h.v.     Angren shahar 2-son Bolalar-o’smirlar sport maktabida Boks bo’limi trener-o’qituvchi.

                                </p>
                            </div>
                        </article>
                    <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <div className="flex justify-center">
                            <img
                                alt=""
                                    src={umirov} className="h-56 w-40 object-contain"
                            />
                        </div>

                        <div className="bg-white p-4 sm:p-6">
                            <time datetime="2022-10-10" className="block text-xs text-gray-500"> 2021- 2022 </time>

                            <a href="#">
                                    <h3 className=" text-lg text-gray-900">Umirov Olimjon Xamidovich <br />Kamondan otish bo’limida trener.</h3>
                            </a>

                            <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2021-2022 y-h. Angren shahar  2-son sport maktabida Kamondanotishbo’limi trener-o’qituvchi. 

                            </p>
                        </div>
                    </article>
                   
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={melikulov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">	Melikulov Xurshid O’rinboyevich <br />Ashixara karate bo’limida trener.</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y-h.v    Angren shahar 2-son sport maktabida Ashixara karate bo’limida trener-o’qituvchi.
                                </p>
                            </div>
                        </article>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="  grid    sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 px-4 py-4" id='staff'>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={anarbayev} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">    Anarbayev Alisher Axmataliyevich <br />Boks bo’limida trener.</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
2022y-h.v.  Angren shahar 2-son sport maktabida Boks bo’limi trener-o’qituvchisi.                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={yusupov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">   Yusupov Baxtiyar Uktamaliyevich <br />Boks bo’limida  o’rindosh trener.</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y-h.v   Angren shahar 2-son sport maktabida Boks bo’limi o’rindosh trener-o’qituvchisi.

                                </p>
                            </div>
                        </article>
                      
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={arzikulova} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">             Arzikulova Maftuna O’ktamjanovna  <br />   Voleybol bo’limida   trener.   </h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y-h.v.      Angren shahar 2-sonli sport maktabida Voleybol bo’limi trener-o’qituvchisi.

                                </p>
                            </div>
                        </article>

                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={usmonov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900"> Usmonov Abdulatif Raxmonberdiyevich <br /> Kurash bo’limida trener.</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022 y-h.v  Angren shahar 2-sonsport maktabi Kurash bo’limi   trener-o’qituvchisi.
                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={axmedov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900"> Axmedov Farrux Abduvosilovich <br />Parapuelifting bo’limida o’rindosh trener. </h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022 y-h.vAngren shahar 2-son sport maktabi Parapuelifting bo’limi o’rindosh trener-o’qituvchisi.
                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={sultonov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">Sultonov Muzaffar Usubaliyevich  <br /> Boks bo’limida trener-o’qituvchi .</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y-.h.v   Angren shahar 2-sonli sport maktabida Boks bo’limi trener-o’qituvchisi.
                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={Y} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">Daliyev Yodgorbek Ravshanbekovich <br /> Taekvando WTF bo’limida trener.    </h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">

                                    2022y -h.v.Angren shahar 2-son sport maktabi  WTF bo’limi trener-o’qituvchisi.


                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={qalandarov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">      Qalandarov Temurbek G’ayrat o’g’li<br /> Futbol bo’limida o’qituvchi.</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022 y h.v  Angren shahar 2-son sport maktabida futbol bo’limi trener-o’qituvchisi.

                                </p>
                            </div>
                        </article>
                        
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div class="  grid    sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 px-4 py-4" id='staff'>
                        
                        
                       

                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={turgunov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900"> Turg’unov  Samandar Nematullo o’g’li <br /> Sambo bo’limi  trener.</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y- h.v         Angren shahar 2-son sport maktabi Sambo bo’limi o’qituvchi-treneri.

                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={sobirov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">Sobirov Murod Hakimjon o’g’li <br />Milliy Kurash bo’limida trener.</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022 y-h.v  Angren shahar  2-son sport maktabida Milliy kurash bo’limi trener-o’qituvchi.

                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={B} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">Umrzakulov Bekzod Ikromjono’g’li <br />Sambo bo’limida trener.</h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022 y-h.v.  Angren shahar 2-son sport maktabi Sambo bo’limi trener-o’qituvchisi hamda Sport
                                    psixologi.

                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={zulfiqarova} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">    Zulfiqarova Dilafruz Sharofiddin qizi <br />Taekvondo bo’limida   trener-o’qituvchi. </h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
2022y-h.v.       Angren shahar 2-son sport maktabida Taekvondo bo’limi trener-o’qituvchi.                                 </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={Mamatkulov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2021 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">    		Mamatkulov Davron Omanovich <br />Dzyudo bo’limida trener. </h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y-.h.v         Angren shahar 2-son sport maktabida Dzyudo bo’limida o’rindosh trener-o’qituvchi.
                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={Nabiyev} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2021 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">    		       Nabiyev Furqat Anvarovich <br />Taekvondo VTF bo’limida trener. </h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022 y- h.v  Angren shahar  2-son sport maktabida Taekvando VTF bo’limi trener-o’qituvchisi.

                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={Ablayeva} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2022 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">    		     Ablayeva Anefe Delyaverovna <br />Stol-tennis bo’limida Trener. </h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y-h.v        Angren shahar 2-son sport maktabi stol-tennis bo’imi trener-o’qituvchi.
                                </p>
                            </div>
                        </article>
                        <article className=" max-w-sm overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={Ismailov} className="h-56 w-40 object-contain"
                                />
                            </div>

                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500">  2021 </time>

                                <a href="#">
                                    <h3 className=" text-lg text-gray-900">    		          Ismailov Salmon Abduraimzoda <br />O’zbek jang sa’nati bo’limida trener. </h3>
                                </a>

                                <p className="py-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    2022y.h.v      –Toshkent viloyati Angren shahar  2-son sport maktabida O’zbek jang sa’nati bo’limi trener-o’qituvchi. 
                                </p>
                            </div>
                        </article>
                       
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
export default Index;