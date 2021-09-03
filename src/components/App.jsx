import React from 'react'
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import Header from "./Header";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";

class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    }

    addBurger = (burger) => {
        const burgers = {...this.state.burgers}
        burgers[`burger${Date.now()}`] = burger
        this.setState({burgers})
    }

    loadSampleBurgers = () => {
        // const burgers = {...this.state.burgers, ...sampleBurgers};
        // this.setState({burgers})

        this.setState({burgers: sampleBurgers})

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
                            />)}
                    </ul>
                </div>
                <Order/>
                <MenuAdmin addBurger={this.addBurger}
                           loadSampleBurgers={this.loadSampleBurgers}/>
            </div>
        )
    }
}

export default App