import { Component } from 'react';

import * as PetsService from '../../services/PetsService'

import Pet from '../Pet';
import CategoryNavigation from './CategoryNavigation';

class Categories extends Component {
    constructor(props){
        super(props);

        this.state = {
            pets: [],
            currCategory: 'all',
        }
    }

    componentDidMount() {
        PetsService.getAll()
        .then(res => this.setState({ pets: res }))
    }

    componentDidUpdate(prevProps, prevState) {
        const category = this.props.match.params.category;

        if (prevProps.match.params.category == category) {
            return;
        }
        
        PetsService.getAll(category)
        .then(res => {

            this.setState({ pets: res, currCategory: category })
        })
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x => 
                        <Pet 
                        key={x.id} 
                        {...x}
                         />
                    )}
                </ul>
            </section>
        );
    };
}

export default Categories;