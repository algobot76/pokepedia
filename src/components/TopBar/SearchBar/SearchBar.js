// @flow
import React from 'react';
import { IconButton, Input, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

type Props = {
  placeholder?: string,
  classes: Object
};

type State = {
  value: string
};

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  searchContainer: {
    margin: 'auto 16px',
    width: '100%'
  },
  input: {
    width: '100%'
  },
  icon: {
    opacity: 0.54,
    transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  iconButton: {
    opacity: 0.54,
    transform: 'scale(1, 1)',
    transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  searchIconButton: {
    marginRight: -48
  },
  iconButtonHidden: {
    transform: 'scale(0, 0)',
    '& > $icon': {
      opacity: 0
    }
  }
};

class SearchBar extends React.Component<Props, State> {
  static defaultProps = {
    placeholder: ''
  };

  state = {
    value: ''
  };

  handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <div className={classes.searchContainer}>
          <Input
            className={classes.input}
            placeholder={this.props.placeholder}
            value={this.state.value}
            onChange={this.handleInputChange}
            fullWidth
            disableUnderline
          />
        </div>
        <IconButton
          classes={{
            root: classNames(classes.iconButton, classes.searchIconButton, {
              [classes.iconButtonHidden]: this.state.value !== ''
            })
          }}
        >
          <SearchIcon classes={classes.icon} />
        </IconButton>
      </Paper>
    );
  }
}

export default withStyles(styles)(SearchBar);
