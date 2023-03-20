import React from 'react';
import { Card } from '../classes/Card';
import { GitHubUser } from '../models/GitHubUser';

interface Props {
    profiles: GitHubUser[]
}

const CardList = (props: Props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile} key={profile.name} />)}
    </div>
)

export default CardList;