import React from 'react';
import PropTypes from 'prop-types';

import { Nav, Atag, Button, Span, Div, ULOL, LI, Htag, Image, Ptag } from '../../../elements/index';

const CarouselItem = (props) => {
    const {id, title, image} = props.item;
    const {active, positionX} = props;
    const images = require.context('../../../assets/images/carousel/', true);
    return (
        <Div className={`carousel-item${active?' active': ''}`} style={{transform: `translateX(${positionX}%)`}}>
            <Div className="row">
                <Div className="col col-7">
                    <Image src={images(`./${image}`)} alt="carousel image" className="img-fluid item-img"/>
                </Div>
                <Div className="col col-5">
                    <Div className="item-desc">
                        <Ptag>{(id+1).toFixed(1)}</Ptag>
                        <Div>
                            <Ptag>Limited Edition</Ptag>
                            <Htag htype={2}>{title}</Htag>
                        </Div>
                        <Div className="text-right w-100">
                            <Button className="btn btn-outline-dark">Shop Now</Button>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}
CarouselItem.propTypes = {
    item: PropTypes.object
}
export default CarouselItem;