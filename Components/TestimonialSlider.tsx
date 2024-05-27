import React from 'react'
import Carousel from "react-multi-carousel";
import ClientReview from './ClientReview';
import "react-multi-carousel/lib/styles.css";

const CLIENT_REVIEWS = [
    {
        image: "/images/c1.jpg",
        name: "John Doe",
        role: "CEO",
        stars: 5,
        text: "Loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum"
    },
    {
        image: "/images/c2.jpg",
        name: "Silence Doe",
        role: "Test Manager",
        stars: 5,
        text: "Loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum"
    },
    {
        image: "/images/c1.jpg",
        name: "Kreks More",
        role: "It Manager",
        stars: 5,
        text: "Loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum"
    }
]

const TestimonialSlider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

    return ( 
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
        >
            {
                CLIENT_REVIEWS.map((item, index) => {
                    return (
                        <ClientReview 
                            key={index}
                            image={item.image}
                            name={item.name}
                            role={item.role}
                            text={item.text}
                            stars={item.stars}
                        />
                    )
                })
            }
      </Carousel>
    );
}

export default TestimonialSlider;