import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CarouselItem from './CarouselItem';

import { Nav, Atag, Button, Span, Div, ULOL, LI, Htag, Image } from '../../../elements/index';

class Carousel extends Component {
    slideInterval;
    state = {
        currItem: 0,
        items: this.props.items,
        ifSliding: false
    }
    componentDidMount(){
        if(this.state.items.length > 0){
            this.slideInterval = setInterval(this.slideCarousel, 5000);
        }
    }
    slideCarousel = () =>{
        if(!this.state.ifSliding){
            let currItem = this.state.currItem;
            currItem ++;
            if(currItem === this.state.items.length){
                currItem = 0;
            }
            this.slideTo(currItem);
        }
    }
    slideTo = (ind) =>{
        this.setState({
            currItem: ind,
            ifSliding: true
        });
        if(this.state.ifSliding){
            setTimeout(()=>{
                this.setState({
                    ifSliding: false
                });
            }, 5000);
        }
    }
    handleMouseDown = () =>{
        clearInterval(this.slideInterval);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            currItem: 0,
            ifSliding: false
        })
    }
    render() {
        const {items} = this.props;
        const carouselItems = items.map((item,ind) =>{
            return <CarouselItem 
                item={item} 
                key={item.id} 
                active={ind === this.state.currItem}
                positionX={(ind - this.state.currItem) * 100}
                onMouseDown={this.handleMouseDown}/>
        });
        const carouselIndicators = items.map((item, ind)=>{
            return <LI 
                className={`${ind === this.state.currItem?'active':''}`} 
                key={`indicator-${item.id}`}
                onClick={this.slideTo.bind(this, item.id)}
                ></LI>
        })
        return (
            <Div className="carousel">
                <Div className="carousel-inner">
                    {carouselItems}
                </Div>
                <ULOL type="ol" className="carousel-indicators">{carouselIndicators}</ULOL>
            </Div>
        )
    }
}

Carousel.propTypes = {
    items: PropTypes.array
}
export default Carousel;