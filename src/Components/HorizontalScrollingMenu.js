import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

//Components
import ItemCard from './ProductCard';

//Casecading Stylesheet
import '../CasecadingStylesheets/HorizontalScrollingMenu.css';

class App extends Component {
    state = {
        selected: 0
    };

    onSelect = key => {
        this.setState({ selected: key });
    }

    render() {
        const { selected } = this.state;
        const { data } = this.props;



        // Create menu from items
        const menu = data.map((prod, index) => {
            return (
                <div
                    key={index}
                    className="menu-item">
                    <ItemCard data={prod} />
                    {/* Talha */}
                </div>
            );
        });;

        return (
            <div className="App">
                <ScrollMenu
                    data={menu}
                    arrowLeft={
                        <div className='arrow-prev'>
                            {'<'}
                        </div>
                    }
                    arrowRight={<div className='arrow-next'>
                        {'>'}
                    </div>}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}

export default App;
