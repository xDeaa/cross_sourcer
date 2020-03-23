import React from "react";
import { CardActions, Card, CardContent, CardHeader, Grid, LinearProgress, makeStyles, createStyles, Theme, Typography } from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useQuery } from '@apollo/react-hooks';

import RepositoriesDetails from "../../apollo/queries/RepositoriesDetails"
import RepositoryResponse from "../../models/RepositoriesResponse";
import UserResponse from "../../models/UserResponse";
import Languages from "../../models/Languages";
import ListCollaborators from "./listCollaborators";
import ListLanguages from "./listLanguage";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        lang: {
            display: "flex",
            flexFlow: "row wrap"
        },
        control: {
            padding: theme.spacing(2),
        },
        card: {
            width: 310,
            height: 300
        },
        column: {
            display: "flex",
            flexDirection: "column",
            paddingTop: 0
        }
    }),
);

const RepositoryInformation = (props: any) => {
    const { name, number, avatarUrl } = props
    const classes = useStyles();

    const getUserRepositories = RepositoriesDetails(name, number)
    const { loading, error, data } = useQuery(getUserRepositories, { errorPolicy: "ignore" });


    if (loading) return <LinearProgress />;

    return (
        <Grid container className={classes.root} spacing={5} justify="center">
            {
                data.user.repositories.nodes.map((repos: RepositoryResponse) => {
                    return (
                        <Grid item>
                            <Card className={classes.card}
                                title={repos.name}>
                                <CardHeader
                                    title={repos.name}
                                    subheader={repos.nameWithOwner}
                                    avatar={<a href={`https://github.com/${repos.nameWithOwner}`}> <GitHubIcon /></a>}
                                />
                                <CardContent className={classes.column}>
                                    <Typography gutterBottom variant="body1" component="h2">
                                        Primary language :  {repos.primaryLanguage === null ? "none" : <ListLanguages {...repos.primaryLanguage} />}
                                    </Typography>
                                    <div className={classes.lang}>
                                        {repos.languages.nodes.map((language: Languages) => <ListLanguages {...language} />)}
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <AvatarGroup max={5} >
                                        {
                                            repos.collaborators === null ? <ListCollaborators {...props} /> :
                                                repos.collaborators.nodes.map(
                                                    (collaborator: UserResponse) => <ListCollaborators {...collaborator} />)
                                        }
                                    </AvatarGroup>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};

export default RepositoryInformation;