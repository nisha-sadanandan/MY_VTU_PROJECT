import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import { Carousel} from "react-bootstrap";


const HomeScreen = () =>{
    return(
        <>
           <div>
            <marquee>VTU Results 2024 Out -
                 Check Exam Results here!!!
                 <a href="#">Click here...</a>Best of Luck!!!
                 </marquee>
           </div>

           <div>
            <Carousel className="home">
            <Carousel.Item>
                <img height="350px"
                className="d-block w-100"
                src="images/img1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img height="350px"
                className="d-block w-100"
                src="images/img2.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img height="350px"
                className="d-block w-100"
                src="images/img3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img height="350px"
                className="d-block w-100"
                src="images/img.jpeg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img height="350px"
                className="d-block w-100"
                src="images/img2.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            <div>
                <Row>
                    <Col
                    style={{height:"500px"}}>
                        <h3>
                            <a href="#">Vision</a>

                        </h3>
                            <p className="p-style">To become an outstanding Technological University at 
                               the cutting edge of Science and Technology that produces world 
                               class Knowledge-delivery, Research, Extension and Leadership in 
                               Technology innovation for Industry and Society.</p>

                               <p  className="p-style">To become an outstanding Technological University at 
                               the cutting edge of Science and Technology that produces world 
                               class Knowledge-delivery, Research, Extension and Leadership in 
                               Technology innovation for Industry and Society.</p>
                        <Button variant="warning">Read more.....</Button>
                        
                    </Col>
                    <Col
                    style={{height:"500px"}}>
                         <h3>
                            <a href="#">Vision</a>
                        </h3>
                            <p className="p-style">To plan the development of technical education, 
                               to establish value-based and need-based education 
                               and training in engineering and technology, with 
                               a view to generate qualified and competent manpower, 
                               responsive to technological and societal needs.</p>

                               <p className="p-style">To plan the development of technical education, 
                               to establish value-based and need-based education 
                               and training in engineering and technology, with 
                               a view to generate qualified and competent manpower, 
                               responsive to technological and societal needs.</p>
                            <Button variant="warning">Read more.....</Button>
                    </Col>
                    <Col
                    style={{height:"500px"}}>
                         <h3>
                            <a href="#">Mandate</a>
                        </h3>
                            <p className="p-style">The Visvesvaraya Technological University has
                               been established by the Government of the Karnataka
                              in order to Promote planned and sustainable development
                               of technical education consistent with state and national policies.</p>

                               <p className="p-style">The Visvesvaraya Technological University has
                               been established by the Government of the Karnataka
                              in order to Promote planned and sustainable development
                               of technical education consistent with state and national policies.</p>
                            <Button variant="warning">Read more.....</Button>
                    </Col>
                </Row>
            </div>
           </div>
        </>
    )
}

export default HomeScreen