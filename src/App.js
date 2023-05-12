import logo from './logo.svg';
import './styles/bootstrap.min.css';
import './styles/App.css';

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {EffectCoverflow, Pagination, Navigation} from "swiper";

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

    return (
        <div className="App">
            <div className="header video-background">
                <img src='./source/background.jpg'/>
                <video autoPlay muted loop>
                    <source src="../source/background.MP4" type="video/mp4"></source>
                </video>
                <h2>Дистанционное обучение</h2>
                <h1>Профессия <b>3D artist</b></h1>
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
                                <img src='./source/professions1.jpg' title='Image professions1.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Environment Artist</h2>
                            <p className='descriptions'>Моделирование локаций для игр и фильмов.
                                Будешь создавать миры начиная с небольших детализированных предметов и доходя до масштабных локаций с окружающей средой и освещением в них.
                                Это профессия особенно крутая, потому что сейчас многие идут в персонажку, а у 3D environment artist меньше конкуренции и выше оплата!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions2.jpg)"}}>
                                <img src='./source/professions2.jpg' title='Image professions2.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Modeler</h2>
                            <p className='descriptions'>Идеальная профессия для начала карьеры. Ты будешь моделить многое! От объектов до персонажей, тебе не всегда надо будет прорабатывать модели детально.
                                Идеально если любишь мыслить масштабно и структурно, но не фанат долгой кропотливой работы над одним объектом.
                                Также часто эта профессия совмещается с другими 3D профессиями.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions3.png)"}}>
                                <img src='./source/professions3.png' title='Image professions3.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Interior Artist</h2>
                            <p className='descriptions'>Будешь моделить интерьеры домов, квартир, окружения и ассетов, представляющих различные части интерьеров зданий.
                                Создавать полный интерьер начиная с конструкций (стен, окон, комнат) и заканчивая предметами интерьера (мебель, аксессуары, декор) и других элементов декора.
                                Архитектурные бюро ждут тебя, а может ты мечтал сделать свой идеальный дом?</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions4.jpg)"}}>
                                <img src='./source/professions4.jpg' title='Image professions4.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Vehicle Artist</h2>
                            <p className='descriptions'>Сильная тема! Создание техники, автомобилей, танков и прочей инженерии.
                                Если ты фанат стимпанка это твое. Все детализировано и красиво. Крутая и необходимая профессия в сфере кино и игр.</p>
                        </div>
                    </div>
                </div>

                <div className="row second-row">
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions5.jpg)"}}>
                                <img src='./source/professions5.jpg' title='Image professions5.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Printing Specialist</h2>
                            <p className='descriptions'>3D модели для 3D печати! Очень развивающееся направление.
                                Если ты выбираешь эту профессию, то ты нужен будешь практически везде от архитектуры до медицины, от крупных производств до сферы развлечений.
                                Если хочешь двигаться с опережением развития технологий, то тебе точно сюда.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions6.jpg)"}}>
                                <img src='./source/professions6.jpg' title='Image professions6.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Props Artist</h2>
                            <p className='descriptions'>Любишь кропотливо работать над одним объектом, от и до, доводя его до идеала?
                                Изготовление реквизита, украшений, оружия, инструментов, мебели и пр!
                                Ты часто будешь работать с материалами и текстурами, включая металл, латекс, стекловолокно, дерево и текстиль.
                                Такой специалист необходим в играх, кино, и различных производствах.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions7.jpg)"}}>
                                <img src='./source/professions7.jpg' title='Image professions7.jpg'/>
                            </div>
                            <h2 className='title pt-2'>3D Generalist</h2>
                            <p className='descriptions'>Очень хорошая профессия для начала карьеры если ты хочешь вырасти, и поискать что тебе может подходить в 3D.
                                Роль 3D Generalist варьируется от студии к студии.  Однако чаще всего ты будешь заниматься моделированием, оснасткой, анимацией, захватом движения, рисованием и скульптурой.
                                От 3D Generalist не ожидается, что он будет экспертом во всех областях, но ожидается, что он обладает базовыми знаниями в 3D.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 blockProfessions">
                        <div className="professions" onClick={showProfession}>
                            <div className="image-block" style={{backgroundImage: "url(./source/professions8.png)"}}>
                                <img src='./source/professions8.png' title='Image professions8.png'/>
                            </div>
                            <h2 className='title pt-2'>3D Conсept Artist</h2>
                            <p className='descriptions'>Очень творческое направление. Ты будешь использовать моделирование для визуализации идей и создания изображений для цифровой среды, персонажей, существ и многих других ресурсов.
                                Часто ты будешь собирать сцены из готовых моделей.
                                В этой профессии важна скорость и творческое умение придумывать идеи! Если ты любишь работать с креативами, то это то, что нужно!</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-12 m-auto paywork">
                        <h2 className='pay'><p>Средняя заработная плата: в России 125 000р </p>
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
                                    <p>Опыт преподавания 3D - 5 лет</p>
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
                        <img src='./source/sl2.JPG' title='Дракула'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='./source/sl3.JPG' title='Villain'/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='./source/sl1.JPG' title='Игра престолов'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='./source/sl2.JPG' title='Дракула'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='./source/sl3.JPG' title='Villain'/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='./source/sl1.JPG' title='Игра престолов'/>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="block4 mt-5">
                <div className="container destroy-bg">
                    <div className="row justify-content-md-center mt-5">
                        <div className="col col-6 m-auto mt-5">
                            <h2 className="module">Модули обучения :</h2>
                        </div>
                    </div>
                    <div className="row mt-5" onClick={showAllText}>
                        <div className="col col-8 m-auto mt-5 module-item ">
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
                                    <img src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-8 m-auto mt-5 module-item ">
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
                                    <img src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-8 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>3</b></h2>
                            </div>
                            <div className="border_vertical">
                            </div>
                            <div className="module-text">
                                <p>Полный цикл создания моделей высокобюджетных игр в реалистичном стиле.</p>
                                <p className="hide">МОДУЛЬ 3
                                    Здесь ты познакомишься с особенностями быстрого моделирования реалистичного предмета.
                                    Научишься высокодетализированной обработке.
                                    Сможешь делать сколы, царапины, средние повреждения и шероховатости и пр.
                                    В общем создавать очень реалистичную и качественную картинку.
                                    И научишься все это рендерить.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-8 m-auto mt-5 module-item ">
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
                                    <img src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-8 m-auto mt-5 module-item ">
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
                                    <img src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-8 m-auto mt-5 module-item ">
                            <div className="module-num">
                                <h2>Модуль <b>6</b></h2>
                            </div>
                            <div className="border_vertical">
                            </div>
                            <div className="module-text">
                                <p>Создание одежды и для персонажей. Выкройки</p>
                                <p className="hide">МОДУЛЬ 6
                                    В этом модуле ты будешь создавать различные виды растительностей в различной стилях (как
                                    реализм, так и стилизация).
                                    Познакомишься с пайплайнами, которые сейчас используются в играх и фильмах.
                                    И сделаешь оптимизированную модель растительности.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-8 m-auto mt-5 module-item ">
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
                                    <img src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3" onClick={showAllText}>
                        <div className="col col-8 m-auto mt-5 module-item ">
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
                                    <img src='./source/module/module1.jpg' title='Модуль 1'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 mb-3" onClick={showAllText}>
                        <div className="col col-8 m-auto mt-5 module-item ">
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
                                    Конкретно под эти компании составишь правильное рабочее резюме, и оформишь свой рабочий
                                    кейс.
                                    Узнаешь, как лучше всего себя подавать на собеседовании.
                                    Так же узнаешь, как выходить на иностранный рынок, и как составлять карьерный план на 5
                                    лет.
                                    Получишь необходимую информацию про финансовую грамотность, чтобы не переживать что
                                    останешься без работы и денег.
                                    Сходишь на собеседование под курированием карьерного консультанта.</p>
                            </div>
                            <div className="hide">
                                <div className="image-block">
                                    <img src='./source/module/module1.jpg' title='Модуль 1'/>
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
                            <p className='text-left'>Наш педагог работает индивидуально, вы будете с ним всегда на связи и будете получать подробную обратную связь как вам лучше двигаться и расти в 3D</p>
                            <p className='text-left'>Каждому ученику помогаем оформить кейс под желаемую работу, составить резюме и дать пути возможной монетизации без наемной работы.</p>
                            <p className='text-left'>Лучший учений курса получает полное сопровождение с карьерным консультантом чтобы прийти к своей цели!</p>
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
                                <p>- Приятные эмоции от прохождения курса</p>
                                <p>- Доступ к материалам после окончания курса</p>
                                <p>- Скидки на дальнейшие курсы</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-3 example">
                    <h2 className="col-8 mt-5 mb-5">Работы учеников: </h2>
                    <div className="uk-child-width-1-2" uk-grid="" uk-lightbox="animation: slide">
                        <div className="uk-first-column">
                            <div className="uk-child-width-1-3" uk-grid="">
                                <div className="uk-first-column">
                                    <div className="uk-child-width-1-1" uk-grid>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/11.jpg"
                                               data-caption="Caption 1">
                                                <img src="./source/slider/11.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/12.jpg"
                                               data-caption="Caption 2">
                                                <img src="./source/slider/12.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/13.jpg"
                                               data-caption="Caption 3">
                                                <img src="./source/slider/13.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/14.jpg"
                                               data-caption="Caption 4">
                                                <img src="./source/slider/14.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-child-width-1-1" uk-grid>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/11.jpg"
                                               data-caption="Caption 1">
                                                <img src="./source/slider/11.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/12.jpg"
                                               data-caption="Caption 2">
                                                <img src="./source/slider/12.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/13.jpg"
                                               data-caption="Caption 3">
                                                <img src="./source/slider/13.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/14.jpg"
                                               data-caption="Caption 4">
                                                <img src="./source/slider/14.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-child-width-1-1" uk-grid>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/11.jpg"
                                               data-caption="Caption 1">
                                                <img src="./source/slider/11.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/12.jpg"
                                               data-caption="Caption 2">
                                                <img src="./source/slider/12.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/13.jpg"
                                               data-caption="Caption 3">
                                                <img src="./source/slider/13.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/14.jpg"
                                               data-caption="Caption 4">
                                                <img src="./source/slider/14.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-small">
                                    <a className="uk-inline" href="./source/slider/22.jpg"
                                       data-caption="Caption 1">
                                        <img src="./source/slider/22.jpg" width="1800" height="1200" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-small">
                                    <a className="uk-inline" href="./source/slider/23.jpg"
                                       data-caption="Caption 1">
                                        <img src="./source/slider/23.jpg" width="1800" height="1200" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-2" uk-grid="">
                                <div className="uk-first-column">
                                    <div className="uk-width-1-1 uk-height-small">
                                        <a className="uk-inline" href="./source/slider/31.jpg"
                                           data-caption="Caption 1">
                                            <img src="./source/slider/31.jpg" width="1800" height="1200" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-width-1-1 uk-height-small">
                                        <a className="uk-inline" href="./source/slider/32.jpg"
                                           data-caption="Caption 1">
                                            <img src="./source/slider/32.jpg" width="1800" height="1200" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="col-8 mt-5 mb-5"><a href="https://www.w3schools.com">Ещё больше работ:</a></h2>
                </div>

                <div className="row mt-5">
                    <div className="discount m-auto col-lg-8 col-md-12 col-sm-12">
                        <div className="border-around">
                            <div className="text">
                                <p>После прохождения  курса ты получишь 50% скидку  на прохождение  курсов Персонажка  созданиебазоваое  создание  персонажей и одежы
                                    Нейросети+ No Д  моделинг как использовать нейросети чтобы увеличивать скорость и качество  своей работы  в 3 можжделировании.</p>
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
                                <p>Даты следующих наборов<b>: 03.02.23</b>                      <b>03.04.23</b></p>



                                <p>Созвонись и проконсультируйся подходит ли твоя техника для занятий.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
