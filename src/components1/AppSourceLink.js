import React from 'react';

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const AppSourceLink = () => (
    <IconButton className="AppSourceLink" target="_blank" href="https://github.com/fkosh/fancy-messenger-ui">
        <GitHubIcon />
    </IconButton>
);

export default AppSourceLink;