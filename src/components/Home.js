import React, { Component } from 'react'
import Carousel from './widgets/carousel/Carousel';

import { Nav, Atag, Button, Span, Div, ULOL, LI, Htag, Image } from '../elements/index';

import furnitureData from './json/furniture.json';
import accessoriesData from './json/accessories.json';

export default class Home extends Component {
    allData = {
        furniture: {
            tabName: 'Home Furnishing',
            data: furnitureData
        },
        accessories: {
            tabName: 'Accessories',
            data: accessoriesData
        },
        sports: {
            tabName: 'Sports',
            data: accessoriesData
        },
        clothing: {
            tabName: 'Clothing Wear',
            data: furnitureData
        }
    }
    state = {
        currentCarouselData: 'furniture',
        carouselItems: furnitureData
    }
    changeTab = (tabName) =>{
        this.setState({
            currentCarouselData: tabName,
            carouselItems: this.allData[tabName].data
        }, ()=>{
            console.log(this.state.carouselItems, this.state.currentCarouselData, tabName);
        });
    }
    render() {
        const tabs = Object.keys(this.allData).map(k=>{
            return <LI key={k}
            className={`list-group-item${k === this.state.currentCarouselData?' active':''}`} 
            onClick={this.changeTab.bind(this, k)}>
                <Atag>{this.allData[k].tabName}</Atag>
            </LI>
        });

        return (
            <Div className="jumbotron home-jumbotron">
                <Div className="wip-tag">WIP</Div>
                <Div className="container">
                    <Div className="row">
                        <Div className="col col-md-3 col-sm-12 col-xs-12">
                            <ULOL type="ul" className="list-group">
                                <Htag>Shop</Htag>
                                <Div className="v-hr"></Div>
                                {tabs}
                            </ULOL>
                        </Div>
                        <Div className="col col-md-9 col-sm-12 col-xs-12">
                            <Carousel items={this.state.carouselItems}/>
                        </Div>
                    </Div>
                </Div>
            </Div>
        )
    }
}
