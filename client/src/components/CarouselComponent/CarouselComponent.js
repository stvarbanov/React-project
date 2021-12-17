import { Carousel, Button } from 'react-bootstrap';

const CarouselComponent = () => {

    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://d57439wlqx3vo.cloudfront.net/iblock/fc8/fc82437089559312a666656c7654ef4e/aaad6542315d596027ddc0bea5cb11db.jpg"
                    alt="First slide"
                    height='450'
                    width='70%'
                />
                <Carousel.Caption>
                    <h3 >What is Kanban and how to use it</h3>
                    <Button href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bitrix24.com%2Farticles%2Fwhat-you-need-to-know-about-a-kanban-board.php&psig=AOvVaw3sCG_7BKIFi606N2xmlFFP&ust=1637399626891000&source=images&cd=vfe&ved=0CAwQjhxqFwoTCJiJr4yLpPQCFQAAAAAdAAAAABAD"
                        variant="secondary">Read here</Button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://netmind.net/en/wp-content/uploads/2020/07/Kanban-Method-Best-Practice_FB.jpg"
                    alt="Second slide"
                    height='450'
                    width='70%'
                />
                <Carousel.Caption>
                    <h3 >
                        Best practice Kanban method</h3>
                    <Button href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnetmind.net%2Fen%2Fkanban-method-best-practice%2F&psig=AOvVaw1R1UklJjIyEPZktTIQhaky&ust=1637400040664000&source=images&cd=vfe&ved=0CA0Q3YkBahcKEwiIq-3XjKT0AhUAAAAAHQAAAAAQIQ"

                        variant="secondary">Read here</Button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://study.com/cimages/videopreview/fvjfat0gym.jpg"
                    alt="Second slide"
                    height='450'
                    width='70%'
                />
                <Carousel.Caption>
                    <h3 >
                        Kanban part 2</h3>
                    <Button href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.business2community.com%2Fstrategy%2Fkanban-part-2-how-to-get-started-with-kanban-02344069&psig=AOvVaw1R1UklJjIyEPZktTIQhaky&ust=1637400040664000&source=images&cd=vfe&ved=0CA0Q3YkBahcKEwiIq-3XjKT0AhUAAAAAHQAAAAAQJw"

                        variant="secondary">Read here</Button>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}

export default CarouselComponent;