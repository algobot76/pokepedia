// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchBar from './SearchBar';

type Props = {
  title?: string,
  classes: Object
};

const styles = {
  root: {
    flexGrow: 1
  }
};

const FixedBar = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {props.title}
          </Typography>
          <SearchBar placeholder="Search pokemon..." />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(FixedBar);
