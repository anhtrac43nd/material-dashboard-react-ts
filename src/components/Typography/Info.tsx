import { withStyles, WithStyles } from '@material-ui/core';
import typographyStyle from 'assets/jss/material-dashboard-react/typographyStyle';
import * as React from 'react';

interface Props extends WithStyles<typeof typographyStyle> {}

const Info: React.SFC<Props> = props => {
  const { classes, children } = props;

  return (
    <div className={classes.defaultFontStyle + ' ' + classes.infoText}>
      {children}
    </div>
  );
};

export default withStyles(typographyStyle)(Info);
