import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { Typography, Avatar, LinearProgress, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

import RoomIcon from '@material-ui/icons/Room';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';

import UserInformation from "../../apollo/queries/UserInformation";
import RepositoryInformation from "./repositoriesInformation";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  large: {
    width: 250,
    height: 250,
  },
}));

const GlobalInformation = (props: any) => {
  const classes = useStyles();
  const getUserInfo = UserInformation(props.name)
  const { loading, error, data } = useQuery(getUserInfo);

  if (loading) return <LinearProgress />;
  if (error) return <h1>{error}</h1>
  return (
    <>
      <div className={classes.root}>
        <div className={classes.row}>
          <Avatar className={classes.large} alt={data.user.login} src={data.user.avatarUrl} />
          <div className={classes.column}>
            <Typography gutterBottom variant="h5" component="h2">
              {data.user.name}
            </Typography>

            <Typography gutterBottom variant="h6" component="h2">
              {data.user.login}
            </Typography>

            <div className={classes.row}>
              <RoomIcon />
              <Typography gutterBottom variant="body1" component="h2">
                {data.user.location ? data.user.location : "🤫"}
              </Typography>
            </div>

            <div className={classes.row}>
              <AlternateEmailIcon />
              <Typography gutterBottom variant="body1" component="h2">
                {data.user.email ? data.user.email : "🤫"}
              </Typography>
            </div>

            <Typography gutterBottom variant="body1" component="h2">
              {data.user.bio ? data.user.bio : "💤💤💤💤"}
            </Typography>
          </div>
        </div>

        <div className={classes.info}>
          <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
              Commits
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              0
            </Typography>
          </div>

          <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
              Following
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {data.user.following.totalCount}
            </Typography>
          </div>

          <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
              Followers
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {data.user.followers.totalCount}
            </Typography>
          </div>

          <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
              Repositories
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {data.user.repositories.totalCount}
            </Typography>
          </div>

          <a href={data.user.url}>
            <GitHubIcon />
          </a>
        </div>
      </div>
      <RepositoryInformation name={props.name} number={data.user.repositories.totalCount} avatarUrl={data.user.avatarUrl} />
    </>
  );
};

export default GlobalInformation;