import React from "react";
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import UserResponse from "../../models/UserResponse";

const ListCollaborators = ({ login, avatarUrl }: UserResponse) => {

    const history = useHistory();

    const profile = (name: string) => {
        history.push(`/${name}`)
    }

    return (
        <Button onClick={() => { profile(login) }}>
            <Avatar alt={login} src={avatarUrl} />
        </Button>
    );
}

export default ListCollaborators;