import React from 'react';
import { GitHubUser } from '../models/GitHubUser';

export class Card extends React.Component {
    props: GitHubUser

    constructor(props: GitHubUser) {
        super(props);
        this.props = props;
    }

    render() {
        const profile = this.props

        return (
            <div className='github-profile'>
                <img src={profile.avatar_url} alt="User" />
                <div className='info'>
                    <div className='name'>{profile.name}</div>
                    <div className='company'>{profile.company}</div>
                </div>
            </div>
        );
    }
}