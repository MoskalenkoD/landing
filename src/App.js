import './styles/bootstrap.min.css';
import './styles/App.css';

import {Swiper, SwiperSlide} from "swiper/react";
import emailjs from '@emailjs/browser';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {EffectCoverflow, Pagination} from "swiper";

// "homepage": "https://moskalenkod.github.io/landing",
function App() {

    function showProfession(e) {
        e.preventDefault();
        let clone = e.currentTarget.cloneNode(true);
        clone.classList.add('modal');
        clone.classList.add('col');
        clone.classList.remove('col-lg-3');
        clone.classList.remove('col-md-6');
        clone.classList.remove('col-sm-12');
        clone.classList.remove('mt-5');
        let shadow = document.createElement('div');
        shadow.classList.add('shadow');
        document.querySelector('.App').append(clone);
        document.querySelector('.App').append(shadow);

        document.querySelector('.shadow').addEventListener('click', () => {
            let appBlock = document.querySelector('.App');
            appBlock.querySelector('.modal').remove();
            appBlock.querySelector('.shadow').remove();
        });
    }

    function showAllText(e) {
        e.preventDefault();
        let clone = e.currentTarget.cloneNode(true);
        let text = clone.querySelector('.module-text .hide')
        text.classList.add('modal');
        text.classList.add('col');
        text.classList.remove('hide');
        let shadow = document.createElement('div');
        shadow.classList.add('shadow');
        document.querySelector('.App').append(text);
        document.querySelector('.App').append(shadow);

        document.querySelector('.shadow').addEventListener('click', () => {
            let appBlock = document.querySelector('.App');
            appBlock.querySelector('.modal').remove();
            appBlock.querySelector('.shadow').remove();
        });
    }

    function openForm(e) {
        console.log(1);
        e.preventDefault();
        let modalForm = document.querySelector('.return-form');
        modalForm.classList.remove('hide');
        document.querySelector('.form-shadow').classList.remove('hide');

        document.querySelector('.form-shadow').addEventListener('click', () => {
            let modalForm = document.querySelector('.return-form');
            modalForm.classList.add('hide');
            document.querySelector('.form-shadow').classList.add('hide');
        });

    }

    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('service_0wwnd9r', 'template_2dar9wk', e.target, 'nDG6n7rdLG4kbsG8H').then((res) => {
            console.log(res);
            document.querySelector('.return-form').classList.add('hide');
            document.querySelector('.form-shadow').classList.add('hide');
        }).catch(err => {
            console.log(err);
            alert(err)
        });
    }

    return (
        <div className="App">
            <div className="header video-background">
                <img alt='' src='./source/background.jpg'/>
                <video autoPlay muted loop>
                    <source src="../source/background.MP4" type="video/mp4"></source>
                </video>
                <h2>Профессия <b>3D artist</b></h2>
                <h1>Дистанционное обучение</h1>
                <h4>Получи работу <br/> в кино и видеоиграх</h4>
            </div>
            <div className="block1 container">
                <div className="row short-text">
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> 6 месяцев и новая дистанционная профессия.</p>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> 7 профильных программ от MAYA до UNREAL ENGINE.</p>
                    </div>
                </div>
                <div className="row short-text">
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> Нескучные курсы для тех кто хочет освоить 3D. </p>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> Индивидуальное курирование от старта до поиска работы.</p>
                    </div>
                </div>

                <div className="row mt-5 ">
                    <div className="col col-12">
                        <h4>Добро пожаловать в 3D вселенную!) От 3D визуализации в играх, кино и архитектуре, до
                            создания блокчейн ITEMов и воплощения виртуальных миров в мета вселенных.</h4>
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-6 m-auto">
                        <h2 className='quest'>Кем ты станешь после курса:</h2>
                    </div>
                </div>

                <div className="row slash-border">
                    <div className="slash-background"></div>

                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions1.jpg)"}}>
                                <img alt='' src='./source/professions1.jpg' title='Image professions1.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Environment Artist</h2>
                            <p className='descriptions'>Моделирование локаций для игр и фильмов.
                                Будешь создавать миры начиная с небольших детализированных предметов и доходя до
                                масштабных локаций с окружающей средой и освещением в них.
                                Это профессия особенно крутая, потому что сейчас многие идут в персонажку, а у 3D
                                environment artist меньше конкуренции и выше оплата!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions2.jpg)"}}>
                                <img alt='' src='./source/professions2.jpg' title='Image professions2.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Modeler</h2>
                            <p className='descriptions'>Идеальная профессия для начала карьеры. Ты будешь моделить
                                многое! От объектов до персонажей, тебе не всегда надо будет прорабатывать модели
                                детально.
                                Идеально если любишь мыслить масштабно и структурно, но не фанат долгой кропотливой
                                работы над одним объектом.
                                Также часто эта профессия совмещается с другими 3D профессиями.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions3.png)"}}>
                                <img alt='' src='./source/professions3.png' title='Image professions3.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Interior Artist</h2>
                            <p className='descriptions'>Будешь моделить интерьеры домов, квартир, окружения и ассетов,
                                представляющих различные части интерьеров зданий.
                                Создавать полный интерьер начиная с конструкций (стен, окон, комнат) и заканчивая
                                предметами интерьера (мебель, аксессуары, декор) и других элементов декора.
                                Архитектурные бюро ждут тебя, а может ты мечтал сделать свой идеальный дом?</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions4.jpg)"}}>
                                <img alt='' src='./source/professions4.jpg' title='Image professions4.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Vehicle Artist</h2>
                            <p className='descriptions'>Сильная тема! Создание техники, автомобилей, танков и прочей
                                инженерии.
                                Если ты фанат стимпанка это твое. Все детализировано и красиво. Крутая и необходимая
                                профессия в сфере кино и игр.</p>
                        </div>
                    </div>
                </div>

                <div className="row second-row">
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions5.jpg)"}}>
                                <img alt='' src='./source/professions5.jpg' title='Image professions5.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Printing Specialist</h2>
                            <p className='descriptions'>3D модели для 3D печати! Очень развивающееся направление.
                                Если ты выбираешь эту профессию, то ты нужен будешь практически везде от архитектуры до
                                медицины, от крупных производств до сферы развлечений.
                                Если хочешь двигаться с опережением развития технологий, то тебе точно сюда.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions6.jpg)"}}>
                                <img alt='' src='./source/professions6.jpg' title='Image professions6.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Props Artist</h2>
                            <p className='descriptions'>Любишь кропотливо работать над одним объектом, от и до, доводя
                                его до идеала?
                                Изготовление реквизита, украшений, оружия, инструментов, мебели и пр!
                                Ты часто будешь работать с материалами и текстурами, включая металл, латекс,
                                стекловолокно, дерево и текстиль.
                                Такой специалист необходим в играх, кино, и различных производствах.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions7.jpg)"}}>
                                <img alt='' src='./source/professions7.jpg' title='Image professions7.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Generalist</h2>
                            <p className='descriptions'>Очень хорошая профессия для начала карьеры если ты хочешь
                                вырасти, и поискать что тебе может подходить в 3D.
                                Роль 3D Generalist варьируется от студии к студии. Однако чаще всего ты будешь
                                заниматься моделированием, оснасткой, анимацией, захватом движения, рисованием и
                                скульптурой.
                                От 3D Generalist не ожидается, что он будет экспертом во всех областях, но ожидается,
                                что он обладает базовыми знаниями в 3D.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions8.png)"}}>
                                <img alt='' src='./source/professions8.png' title='Image professions8.png'/>
                            </div>
                            <h2 className='title pt-2'>3D Conсept Artist</h2>
                            <p className='descriptions'>Очень творческое направление. Ты будешь использовать
                                моделирование для визуализации идей и создания изображений для цифровой среды,
                                персонажей, существ и многих других ресурсов.
                                Часто ты будешь собирать сцены из готовых моделей.
                                В этой профессии важна скорость и творческое умение придумывать идеи! Если ты любишь
                                работать с креативами, то это то, что нужно!</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-12 m-auto paywork">
                        <h2 className='pay'>
                            <p>Средняя заработная плата: в России <p>125 000р,</p></p>
                            <p>по Миру 7 000$</p>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="block2">
                <div className="spider-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="person m-auto col-lg-8 col-md-12 col-sm-12">
                            <div className="border-around">
                                <div className="image-block">
                                </div>
                                <div className="text">
                                    <p><b>Ваш педагог:</b></p>
                                    <p>Павел Иваненко.</p>
                                    <p>Со стажем в 3D - 12 лет.</p>
                                    <p>Преподает 3D - 5 лет</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block3 container">
                <div className="row justify-content-md-center">
                    <div className="col col-12 m-auto">
                        <h2 className="example">Работал с такими проектами как :</h2>
                    </div>
                </div>

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: -10,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper">

                    <SwiperSlide>
                        <img alt='' src='./source/sl2.JPG' title='Дракула'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt='' src='./source/sl3.JPG' title='Villain'/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img alt='' src='./source/sl1.JPG' title='Игра престолов'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt='' src='./source/sl2.JPG' title='Дракула'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt='' src='./source/sl3.JPG' title='Villain'/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img alt='' src='./source/sl1.JPG' title='Игра престолов'/>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="block4 mt-5">
                <div className="container destroy-bg">
                    <div className="row justify-content-md-center mt-5">
                        <div className="col-sm-8 col-md-6 col-lg-6 m-auto mt-5">
                            <h2 className="module">Модули обучения :</h2>
                        </div>
                    </div>
                    <div className="row mt-5" onClick={showAllText}>
                        <div className="col col-12 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>1</b></h2>
                            </div>
                            <div className="border_vertical">
                                <p></p>
                            </div>
                            <div className="module-text">
                                <p>Работа в Maya. В конце этого модуля ты будешь уметь делать базовые фигуры и
                                    высокополигональные модели.</p>
                                <p className="hide">
                                    МОДУЛЬ 1
                                    В этом модуле ты познакомишься с базовым 3D пакетом (программой) для моделирования,
                                    научишься создавать и редактировать примитивы и создавать сложные объекты с учетом
                                    мельчайших особенностей.
                                    Также научишься работать с базовой анимацией.
                                    И познакомишься с рендерингом (получением финального изображения)</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img alt='' src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-12 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>2</b></h2>
                            </div>
                            <div className="border_vertical">
                            </div>
                            <div className="module-text">
                                <p>Полный цикл создания моделей для высокобюджетных игр в мультяшном стиле.</p>
                                <p className="hide">МОДУЛЬ 2
                                    Тут ты узнаешь, как создать очень высоко-детализированную модель в мультяшном стиле.
                                    Познакомишься с Photoshop и скульптингом в 3D.
                                    И научишься базово прокрашивать модель.
                                    А также рендерить ее уже в другой программе по-другому пайплайну.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img alt='' src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-12 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>3</b></h2>
                            </div>
                            <div className="border_vertical">
                            </div>
                            <div className="module-text">
                                <p>Полный цикл создания моделей высокобюджетных игр в реалистичном стиле.</p>
                                <p className="hide">МОДУЛЬ 3
                                    Здесь ты познакомишься с особенностями быстрого моделирования реалистичного
                                    предмета.
                                    Научишься высокодетализированной обработке.
                                    Сможешь делать сколы, царапины, средние повреждения и шероховатости и пр.
                                    В общем создавать очень реалистичную и качественную картинку.
                                    И научишься все это рендерить.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img alt='' src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-12 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>4</b></h2>
                            </div>
                            <div className="border_vertical">
                            </div>
                            <div className="module-text">
                                <p>Оптимизация моделей для дальнейшего текстурирования.</p>
                                <p className="hide">МОДУЛЬ 4
                                    Тут ты учишься оптимизировать модели, что очень важно в профессии.
                                    А также подготовишь ее к текстурированию.
                                    Будешь очень плотно работать с сеткой, заниматься тестированием модели.
                                    Будет проходить полный QA.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img alt='' src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-12 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>5</b></h2>
                            </div>
                            <div className="border_vertical">
                            </div>
                            <div className="module-text">
                                <p>Полное текстурирование и высокодеталезированная покраска</p>
                                <p className="hide">МОДУЛЬ 5
                                    Тут ты научишься круто и детализировано красить свою модель.
                                    Познакомишься с пайплайнами от стилизованного до реализма!
                                    Будешь уверенно работать в Photoshop.
                                    А также делать свои собственные текстуры для реалистичных моделей.
                                    Сделаешь рендеры модели в Painter.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img alt='' src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-12 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>6</b></h2>
                            </div>
                            <div className="border_vertical">
                            </div>
                            <div className="module-text">
                                <p>Создание одежды и для персонажей. Выкройки</p>
                                <p className="hide">МОДУЛЬ 6
                                    В этом модуле ты будешь создавать различные виды растительностей в различной стилях
                                    (как
                                    реализм, так и стилизация).
                                    Познакомишься с пайплайнами, которые сейчас используются в играх и фильмах.
                                    И сделаешь оптимизированную модель растительности.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img alt='' src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-12 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>7</b></h2>
                            </div>
                            <div className="border_vertical">
                            </div>
                            <div className=" module-text">
                                <p>Растительность в играх.</p>
                                <p className="hide">МОДУЛЬ 7
                                    Тут познакомишься с одним из самых новейших и используемых игровых движков для ПК и
                                    консолей!
                                    Научишься создавать игровые уровни, работать с материалами и создавать блюпринты для
                                    нашего окружения.
                                    И немного программирования чтобы ты был круче других на рынке!</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img alt='' src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-12 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>8</b></h2>
                            </div>
                            <div className="border_vertical">
                            </div>
                            <div className="module-text">
                                <p>Создание локаций.</p>
                                <p className="hide">МОДУЛЬ 8
                                    Великий рендер! Все про получение финального изображения или видео.
                                    А также дальнейшая обработка в Photoshop или программах для обработки видео.
                                    И все что нужно про свет!
                                    Ты научишься создавать и выставлять свет внутри виртуальной сцены и редактировать
                                    его.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img alt='' src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 mb-3" onClick={showAllText}>
                        <div className="col col-12 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>9</b></h2>
                            </div>

                            <div className="border_vertical">
                            </div>

                            <div className="module-text">
                                <p>Полный рендер всего.</p>
                                <p className="hide">МОДУЛЬ 9
                                    Карьерный модуль.
                                    Сейчас ты умеешь делать все что нужно. У тебя хорошее портфолио. Осталось только его
                                    оформить, хорошо подать и получить желаемую работу.
                                    Тут ты узнаешь, как и где нужно искать работу в сфере 3D.
                                    Совместно с карьерным консультантом составишь план старта своей карьеры.
                                    Отберешь компании, которые интересуют тебя больше всего.
                                    Конкретно под эти компании составишь правильное рабочее резюме, и оформишь свой
                                    рабочий
                                    кейс.
                                    Узнаешь, как лучше всего себя подавать на собеседовании.
                                    Так же узнаешь, как выходить на иностранный рынок, и как составлять карьерный план
                                    на 5
                                    лет.
                                    Получишь необходимую информацию про финансовую грамотность, чтобы не переживать что
                                    останешься без работы и денег.
                                    Сходишь на собеседование под курированием карьерного консультанта.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img alt='' src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block5 uk-container container">
                <div className="row justify-content-md-center">
                    <div className="col col-12 m-auto paywork">
                        <h2 className='pay'>
                            <p className='text-left'>Наш педагог работает индивидуально, вы будете с ним всегда на связи
                                и будете получать подробную обратную связь как вам лучше двигаться и расти в 3D</p>
                            <p className='text-left'>Каждому ученику помогаем оформить кейс под желаемую работу,
                                составить резюме и дать пути возможной монетизации без наемной работы.</p>
                            <p className='text-left'>Лучший учений курса получает полное сопровождение с карьерным
                                консультантом чтобы прийти к своей цели!</p>
                            <p className='text-left'>Мы верим в наших учеников!</p>
                        </h2>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="result m-auto col-lg-8 col-md-12 col-sm-12">
                        <div className="border-around">
                            <div className="text">
                                <p><b>Что получишь :</b></p>
                                <p>- Дистанционную профессию</p>
                                <p>- Портфолио из 4 профессиональных работ</p>
                                <p>- Полное индивидуальное курирование</p>
                                <p>- Карьерное курирование по окончанию курса</p>
                                <p>- Доступ к материалам после окончания курса</p>
                                <p>- Скидки на дальнейшие курсы</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-3 example">
                    <h2 className="col-md-8 col-lg-8 col-sm-12">Работы учеников: </h2>
                    <div className="uk-child-width-1-2" uk-grid="" uk-lightbox="animation: slide">
                        <div className="uk-first-column">
                            <div className="uk-child-width-1-2" uk-grid="">
                                <div className="uk-first-column">
                                    <div className="uk-width-1-1 uk-height-medium p-3">
                                        <a className="uk-inline" href="./source/slider/111.jpg" style={{height: '100%'}}
                                           data-caption="Example 1">
                                            <img src="./source/slider/111.jpg" width="1800" height="1200" alt=""
                                                 style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-width-1-1 uk-height-medium p-3">
                                        <a className="uk-inline" href="./source/slider/222.jpg" style={{height: '100%'}}
                                           data-caption="Example 2">
                                            <img src="./source/slider/222.jpg" width="1800" height="1200" alt=""
                                                 style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-medium p-3">
                                    <a className="uk-inline" href="./source/slider/333.jpg" style={{height: '100%'}}
                                       data-caption="Example 3">
                                        <img src="./source/slider/333.jpg" width="1800" height="1200" alt=""
                                             style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-small p-3">
                                    <a className="uk-inline" href="./source/slider/444.jpg"
                                       style={{height: '100%', overflow: 'hidden'}}
                                       data-caption="Example 4">
                                        <img src="./source/slider/444.jpg" width="1800" height="1200" alt=""
                                             style={{marginTop: '-18%'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-child-width-1-2" uk-grid="">
                                <div className="uk-first-column">
                                    <div className="uk-width-1-1 uk-height-small p-3">
                                        <a className="uk-inline" href="./source/slider/550.jpg"
                                           style={{width: '100%', height: '100%'}}
                                           data-caption="Example 5">
                                            <img src="./source/slider/550.jpg" width="1800" height="1200" alt=""
                                                 style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-width-1-1 uk-height-small p-3">
                                        <a className="uk-inline" href="./source/slider/551.jpg" style={{width: '100%'}}
                                           data-caption="Example 6">
                                            <img src="./source/slider/551.jpg" width="1800" height="1200" alt=""
                                                 style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-small p-3">
                                    <a className="uk-inline" href="./source/slider/660.jpg" style={{overflow: 'hidden'}}
                                       data-caption="Example 7">
                                        <img src="./source/slider/660.jpg" width="1800" height="1200" alt=""
                                             style={{marginTop: '-10%'}}/>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-2" uk-grid="">
                                <div className="uk-first-column">
                                    <div className="uk-width-1-1 uk-height-medium p-3">
                                        <a className="uk-inline" href="./source/slider/221.jpg" style={{height: '100%'}}
                                           data-caption="Example 8">
                                            <img src="./source/slider/221.jpg" width="1800" height="1200" alt=""
                                                 style={{
                                                     width: '133%',
                                                     height: '100%',
                                                     objectFit: 'cover',
                                                     maxWidth: 'none'
                                                 }}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-width-1-1 uk-height-medium p-3">
                                        <a className="uk-inline" href="./source/slider/220.jpg"
                                           style={{height: '100%', overflow: 'hidden'}}
                                           data-caption="Example 9">
                                            <img src="./source/slider/220.jpg" width="1800" height="1200" alt=""
                                                 style={{
                                                     width: '220%',
                                                     height: '100%',
                                                     objectFit: 'cover',
                                                     maxWidth: 'none',
                                                     marginLeft: '-120%'
                                                 }}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-small p-3">
                                    <a className="uk-inline" href="./source/slider/440.jpg"
                                       style={{height: '100%', overflow: 'hidden'}}
                                       data-caption="Example 10">
                                        <img src="./source/slider/440.jpg" width="1800" height="1200" alt=""
                                             style={{marginTop: '-8%'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12 work-students uk-child-width-1-1" uk-grid="" uk-lightbox="animation: slide">
                        <div className="uk-first-column uk-width-1-1 uk-height-small">
                            <a className="uk-inline" href="./source/slider/aleksandr_grishanovich-1-006.jpg"
                               style={{height: '100%', width: '100%'}}
                               data-caption="Example 11">Ещё
                                больше работ:
                                <img className='hide' src="./source/slider/aleksandr_grishanovich-1-006.jpg" width="1800" height="1200" alt=""
                                     style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                            </a>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/anatoliy-zakharov-final-renders-1.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 12">
                                    <img src="./source/slider/anatoliy-zakharov-final-renders-1.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>

                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/anatoliy-zakharov-gas-stove-01-camera-1-001.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 13">
                                    <img src="./source/slider/anatoliy-zakharov-gas-stove-01-camera-1-001.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/anatoliy-zakharov-gas-stove-01-camera-2-001.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 14">
                                    <img src="./source/slider/anatoliy-zakharov-gas-stove-01-camera-2-001.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/anton-usov-screenshot004.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 15">
                                    <img src="./source/slider/anton-usov-screenshot004.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/artsiom-paltaratski-ewwwe-main-camera-01.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 16">
                                    <img src="./source/slider/artsiom-paltaratski-ewwwe-main-camera-01.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/artsiom-paltaratski-hause-foto-main-camera-02.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 17">
                                    <img src="./source/slider/artsiom-paltaratski-hause-foto-main-camera-02.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>

                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/artsiom-paltaratski-rty003.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 18">
                                    <img src="./source/slider/artsiom-paltaratski-rty003.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/elena-pogrebnaya-6rr.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 19">
                                    <img src="./source/slider/elena-pogrebnaya-6rr.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>

                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/elena-pogrebnaya-10rr.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 20">
                                    <img src="./source/slider/elena-pogrebnaya-10rr.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/elena-pogrebnaya-24rr.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 21">
                                    <img src="./source/slider/elena-pogrebnaya-24rr.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/evgeny-gapeev-3.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 22">
                                    <img src="./source/slider/evgeny-gapeev-3.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/evgeny-gapeev-11.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 23">
                                    <img src="./source/slider/evgeny-gapeev-11.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/evgeny-gapeev-testnight-screen7.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 24">
                                    <img src="./source/slider/evgeny-gapeev-testnight-screen7.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/-gifius-ru-1.gif" style={{overflow: 'hidden'}}
                                   data-caption="Example 25">
                                    <img src="./source/slider/-gifius-ru-1.gif" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>

                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/-highresscreenshot00000-min.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 26">
                                    <img src="./source/slider/-highresscreenshot00000-min.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/-highresscreenshot00002.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 27">
                                    <img src="./source/slider/-highresscreenshot00002.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/-highresscreenshot00004-min.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 28">
                                    <img src="./source/slider/-highresscreenshot00004-min.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/-highresscreenshot00009.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 29">
                                    <img src="./source/slider/-highresscreenshot00009.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/ilya-michajlov-highresscreenshot00006.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 30">
                                    <img src="./source/slider/ilya-michajlov-highresscreenshot00006.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>

                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/ilya-michajlov-screen.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 31">
                                    <img src="./source/slider/ilya-michajlov-screen.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/ivan-mankevich-banner-low-lambert1-basecolor1.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 32">
                                    <img src="./source/slider/ivan-mankevich-banner-low-lambert1-basecolor1.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/ivan-mankevich-highresscreenshot00002.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 33">
                                    <img src="./source/slider/ivan-mankevich-highresscreenshot00002.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>

                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/julia-golikova-b12-main-camera-0-002.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 34">
                                    <img src="./source/slider/julia-golikova-b12-main-camera-0-002.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/marat-02.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 35">
                                    <img src="./source/slider/marat-02.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/marat-renders4.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 36">
                                    <img src="./source/slider/marat-renders4.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/marina-bich-screenshot005.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 37">
                                    <img src="./source/slider/marina-bich-screenshot005.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/-nerminator-2.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 38">
                                    <img src="./source/slider/-nerminator-2.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>
                        <div className="uk-child-width-1-1 hide" uk-grid="">
                            <div className="uk-width-1-1 uk-height-small">
                                <a className="uk-inline" href="./source/slider/-screenshot004.jpg" style={{overflow: 'hidden'}}
                                   data-caption="Example 39">
                                    <img src="./source/slider/-screenshot004.jpg" width="1800" height="1200" alt=""
                                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="discount m-auto col-lg-8 col-md-12 col-sm-12">
                        <div className="border-around">
                            <div className="text">
                                <p>После прохождения курса ты получишь 50% скидку на прохождение курсов:</p>
                                <p>«Персонажка»- 3 месяца по базовому созданию персонажей и одежды для них. </p>
                                <p>«Нейросети+ 3D»- как использовать нейросети в своей работе, чтобы увеличивать
                                    скорость и качество работы в 3D моделировании. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="discount m-auto col-lg-10 col-md-12 col-sm-12">
                        <div className="border-around">
                            <div className="text">
                                <p>Цена курса<b>:</b></p>
                                <p className="mb-2"><b>6</b> месяцев <b>600$</b></p>
                                <p className="mb-5">Есть рассрочки</p>
                                <p>Понравилась программа<b>?</b></p>
                                <p>Пообщайтесь с нашим педагогом чтобы он ответил на все ваши вопросы<b>.</b></p>
                                <p className="mb-5">Определил ваши цели уровень и определил в группу<b>;)</b></p>
                                <p>Даты следующих наборов<b>: 03.02.23</b> <b>03.04.23</b></p>

                                <div className="order-contacts">
                                    <button className="open-form" onClick={openForm}>Оставить заявку на звонок</button>

                                    <p>Или просто пиши нам по телефону:</p>
                                    <div className="social">
                                        <a href="tel:+79779925425" target="_blank"
                                           rel="nofollow noopener">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-telephone-inbound"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                            </svg>
                                            +79779925425</a>
                                        <a href="https://wa.me/79779925425" target="_blank" rel="nofollow noopener">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path
                                                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                            </svg>
                                            WhatsApp
                                        </a>
                                        <a href="https://t.me/Education_3D_ART" target="_blank" rel="nofollow noopener">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                            </svg>
                                            Telegram
                                        </a>
                                    </div>
                                </div>

                                <p>Созвонись и проконсультируйся подходит ли твоя техника для занятий.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="return-form hide">
                <div className="form-header m-auto p-3 bg-primary  border  text-white">
                    <h1>Оставить заявку</h1>
                    <h4>Напишите нам, мы с вами свяжемся и все раскажем подробно :)</h4>
                </div>
                <form className="form-data  border  m-auto p-3" onSubmit={sendEmail}>
                    <h1>Контакты для связи</h1>
                    <div className="form-group">
                        <h5>Имя *:</h5>
                        <input type='text' className='form-control' name='name' placeholder='Ваше имя'/>
                    </div>
                    <div className="form-group">
                        <h5>E-mail *:</h5>
                        <input type='email' className='form-control' name='email' placeholder='Ваше E-mail'/>
                    </div>
                    <div className="form-group">
                        <h5>Телефон *:</h5>
                        <input type='tel' className='form-control' name='phone' placeholder='Ваше телефон'/>
                    </div>
                    <div className="form-group">
                        <h5>Сообщение:</h5>
                        <textarea className='form-control' rows='4' name='message'/>
                    </div>
                    <button className='btn btn-primary'>Отправить</button>
                </form>
            </div>

            <div className="form-shadow hide"></div>

        </div>
    );
}

export default App;
