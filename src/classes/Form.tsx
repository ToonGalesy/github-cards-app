import React from 'react';
import axios from 'axios';

type FormProps = {
    onSubmit: any
}

export class Form extends React.Component {
    props: FormProps;
    state = { userName: '' };

    constructor(props: FormProps) {
        super(props);
        this.props = props;
    }

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    placeholder='GitHub username' 
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    required 
                />
                <button> Add card</button>
            </form>
        )
    }
}