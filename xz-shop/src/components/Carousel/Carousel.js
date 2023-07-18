import Carousel from 'react-bootstrap/Carousel';
import '../../assets/styles/carousel.scss'
function CarouselLayout() {
    return (
        <Carousel>
            <Carousel.Item>
                <img style={{ width: '100%', height: '400px' }}
                    className="d-block"
                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1dIgGp.img?w=700&h=472&m=6"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: '100%', height: '400px' }}
                    className="d-block"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: '100%', height: '400px' }}
                    className="d-block"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselLayout;