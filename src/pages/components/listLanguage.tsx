import React from "react";
import { Theme, createStyles, makeStyles, Chip } from '@material-ui/core';

import Languages from "../../models/Languages";

const ListLanguages = ({ name, color }: Languages) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            shape: {
                backgroundColor: color,
                marginRight: theme.spacing(2),
                marginTop: theme.spacing(1)
            },
        }),
    );
    const classes = useStyles();

    return (
        <Chip className={classes.shape} label={name} />
    );
}

export default ListLanguages;
