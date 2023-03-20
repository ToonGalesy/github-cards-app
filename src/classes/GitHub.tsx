import React from 'react';
import CardList from '../components/CardList';
import { GitHubUser } from '../models/GitHubUser';
import { Form } from './Form';

type GitHubProps = {
    title: string
}

type GitHubState = {
    profiles: GitHubUser[];
}

export class GitHub extends React.Component<GitHubProps, GitHubState> {
    state: GitHubState = {
        profiles: []
    }

    // constructor(props: GitHubProps) {
    //     super(props);
    //     this.props = props;
    //     this.state = {
    //      profiles: testData 
    //     }
    // }

    addNewProfile = (profileData: any) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData] // Similar to a concat operation on the state
        }));
    }

    render() {
        return(
            <div>
                <div className='header'>{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles} />
            </div>
        ) 
    }
}