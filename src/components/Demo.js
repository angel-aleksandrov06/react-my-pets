import React, { Component } from 'react';

import './Demo.css' 

const options = [
    {label: 'IT', value: 'it'},
    {label: 'Engineer', value: 'engineer'},
    {label: 'Unemployed', value: 'unemployed'},
]

class DemoPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: 'pesho',
            age: 18,
            bio: 'Lorem Ipsum',
            occupation: 'unemployed',
            errors: {
                email: false,
            }
        };

        this.emailInput = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();
        // console.log(e.target.username.value);
        // console.log(e.target.age.value);

        const { username, age } = this.state;

        console.log(username);
        console.log(age);

        if (!this.emailInput.current.value.includes('@')) {
            console.log('Error');

            this.setState({errors: {email: true}})
            this.emailInput.current.focus();
        }
    };

    // onUsernameChangeHandler(e) {
    //     console.log(e.target.value);
    //     this.setState({username: e.target.value});
    // };

    // onAgeChangeHandler(e) {
    //     console.log(e.target.value);
    //     this.setState({age: e.target.value});
    // };

    onChangeHandler(e) {
        // console.log(e.target.name);
        
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div>
                <h1>Demo Form</h1>
                
                <form>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        ref={this.emailInput}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@email.com"
                    />
                    <div className={`input-validation ${this.state.errors.email && 'show'}`}>Invalid Email!</div>

                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeHandler}
                    />

                    <label htmlFor="bio">Bio</label>
                    <textarea
                        name="bio"
                        value={this.state.bio}
                        onChange={this.onChangeHandler}
                    />

                    <label htmlFor="occupation">Occupation</label>
                    <select
                        name="occupation"
                        id="occupation"
                        value={this.state.occupation}
                        onChange={this.onChangeHandler}
                    >
                        {options.map(x => <option key={x.value} value={x.value}> {x.label} </option>)}
                    </select>

                    <input type="file" id="upload-picture" name="upload-picture" />
                    <input type="submit" value="Send" onClick={this.onSubmitHandler}/>
                </form>
            </div>
        );
    };
};

export default DemoPage;