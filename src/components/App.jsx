import React from 'react'
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import Header from "./Header";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";
import base from "../Base";

class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    };

    componentDidMount() {
        this.ref = base.syncState(`${this.props.match.params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers'
        })
    }

    addBurger = (burger) => {
        const burgers = {...this.state.burgers}
        burgers[`burger${Date.now()}`] = burger
        this.setState({burgers})
    }

    loadSampleBurgers = () => {
        // const burgers = {...this.state.burgers, ...sampleBurgers};
        // this.setState({burgers})??

        this.setState({burgers: sampleBurgers})

    }

    addToOrder = (key) => {
        const order = {...this.state.order}
        order[key] = ++order[key] || 1
        this.setState({order})

    }

    render() {
        return (
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title='very hot burgers'/>
                    <ul className='burgers'>
                        {Object.keys(this.state.burgers).map(key =>
                            <Burger
                                key={key}
                                index={key}
                                details={this.state.burgers[key]}
                                addToOrder={this.addToOrder}
                            />)}
                    </ul>
                </div>
                <Order burgers={this.state.burgers}
                       order={this.state.order}
                />
                <MenuAdmin addBurger={this.addBurger}
                           loadSampleBurgers={this.loadSampleBurgers}/>
            </div>
        )
    }
}

export default App