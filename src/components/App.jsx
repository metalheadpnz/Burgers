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
        const localStorageRef = localStorage.getItem(this.props.match.params.restaurantId);
        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)})
        }

        this.ref = base.syncState(`${this.props.match.params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem(this.props.match.params.restaurantId, JSON.stringify(this.state.order))
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

    updateBurger = (key, updatedBurger) => {
        const burgers = {...this.state.burger};
        burgers[key] = updatedBurger;
        this.setState({burgers})
    }

    deleteBurger = (key) => {
        const burgers = {...this.state.burgers}
        burgers[key] = null
        this.setState({burgers})
    }

    deleteFromOrder = (key)=> {
        console.log(key)
        const order = {...this.state.order}
        delete order[key]
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
                       deleteFromOrder={this.deleteFromOrder}
                />
                <MenuAdmin burgers={this.state.burgers}
                           addBurger={this.addBurger}
                           updateBurger={this.updateBurger}
                           loadSampleBurgers={this.loadSampleBurgers}
                           deleteBurger = {this.deleteBurger}
                />
            </div>
        )
    }
}

export default App