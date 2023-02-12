import logo from './logo.svg';
import './styles/bootstrap.min.css';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <div className="header video-background">
                <img src='./source/background.jpg'/>
                <video autoPlay muted loop>
                    <source src="../source/background.MP4" type="video/mp4"></source>
                </video>
                <h2>Онлайн-курс</h2>
                <h1>Профессия <b>3D artist</b></h1>
                <h4>Получи дистанционную работу в кино и видеоиграх</h4>
            </div>
            <div className="block1 container">
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> 6 месяцев и новая дистанционная профессия.</p>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> 7 профильных программ от maya до Unreal Engine.</p>
                    </div>
                </div>
                <div className="row">
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
                            создания блокчейн itemов и воплощения виртуальных миров в мета вселенных.</h4>
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-6 m-auto">
                        <h2 className='quest'>Кем ты станешь после курса:</h2>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col col-lg-3 col-md-6 col-sm-12 professions mt-3">
                        <div className="image-block">
                            <img src='./source/professions1.jpg' title='Image professions1.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D-джениралист</h2>
                        <p className='descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consequatur dolore, magnam nam odit omnis quibusdam ratione similique soluta totam vero!
                            Animi dignissimos eius eum, illum ipsam iusto quaerat ullam ut?</p>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 professions mt-3">
                        <div className="image-block">
                            <img src='./source/professions2.jpg' title='Image professions2.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D-художник</h2>
                        <p className='descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            aliquam, amet, at consectetur eos exercitationem facere harum impedit libero, magni maxime
                            nihil nostrum officia optio sapiente sit tempore ut voluptates.</p>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 professions mt-3">
                        <div className="image-block">
                            <img src='./source/professions3.jpg' title='Image professions3.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D-художник по оружию</h2>
                        <p className='descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                            adipisci asperiores commodi consequatur eaque, expedita facilis fugiat in, ipsa iure maiores
                            minima nihil perferendis repellendus reprehenderit, sed soluta velit veniam.</p>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 professions mt-3">
                        <div className="image-block">
                            <img src='./source/professions4.jpg' title='Image professions4.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D-аниматор</h2>
                        <p className='descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, esse,
                            quos. Atque culpa dolorem eaque earum in labore, nobis, perspiciatis qui quis quod rem
                            repellat unde, vel. Aliquam, dolorum recusandae!</p>
                    </div>
                </div>
            </div>
            <div className="block2 container">


            </div>
            <div className="block3">


            </div>

            <div className="block7 uk-container">
                <div className="col-12 mt-3">
                    <h2 className="mb-5">Работы учеников: </h2>
                    <div className="uk-child-width-1-2" uk-grid="" uk-lightbox="animation: slide">
                        <div className="uk-first-column">
                            <div className="uk-child-width-1-3" uk-grid="" >
                                <div className="uk-first-column">
                                    <div className="uk-child-width-1-1" uk-grid >
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
                                    <div className="uk-child-width-1-1" uk-grid >
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
                                    <div className="uk-child-width-1-1" uk-grid >
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
                            <div className="uk-child-width-1-1" uk-grid="" >
                                <div className="uk-width-1-1 uk-height-small">
                                    <a className="uk-inline" href="./source/slider/21.jpg"
                                       data-caption="Caption 1">
                                        <img src="./source/slider/21.jpg" width="1800" height="1200" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-1" uk-grid="" >
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
