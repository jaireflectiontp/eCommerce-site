import Carousel from 'react-bootstrap/Carousel';
import '../../assets/styles/carousel.scss';
import banner1 from "../../assets/images/banner1.webp";
import banner1_5 from "../../assets/images/banner1_5.webp";
import banner2 from "../../assets/images/banner_.jpg";
import banner3 from "../../assets/images/banner3.webp";
function CarouselLayout() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className='d-flex'>
                    <img style={{ width: '50%', height: '400px' }}
                        src={banner1}
                        alt="First slide"
                    />
                    <img style={{ width: '50%', height: '400px' }}
                        src={banner1_5}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: '100%', height: '400px' }}
                    className="d-block"
                    src={banner2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: '100%', height: '400px' }}
                    className="d-block"
                    src={banner3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselLayout;