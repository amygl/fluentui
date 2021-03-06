import * as React from 'react';
import { Callout, Link, getTheme, FontWeights, mergeStyleSets, getId } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';

export interface ICalloutBasicExampleState {
  isCalloutVisible?: boolean;
}

// Themed styles for the example.
const theme = getTheme();
const styles = mergeStyleSets({
  buttonArea: {
    verticalAlign: 'top',
    display: 'inline-block',
    textAlign: 'center',
    margin: '0 100px',
    minWidth: 130,
    height: 32,
  },
  callout: {
    maxWidth: 300,
  },
  header: {
    padding: '18px 24px 12px',
  },
  title: [
    theme.fonts.xLarge,
    {
      margin: 0,
      fontWeight: FontWeights.semilight,
    },
  ],
  inner: {
    height: '100%',
    padding: '0 24px 20px',
  },
  actions: {
    position: 'relative',
    marginTop: 20,
    width: '100%',
    whiteSpace: 'nowrap',
  },
  subtext: [
    theme.fonts.small,
    {
      margin: 0,
      fontWeight: FontWeights.semilight,
    },
  ],
  link: [
    theme.fonts.medium,
    {
      color: theme.palette.neutralPrimary,
    },
  ],
});

// Example code
export class CalloutBasicExample extends React.Component<{}, ICalloutBasicExampleState> {
  public state: ICalloutBasicExampleState = {
    isCalloutVisible: false,
  };

  private _menuButtonElement = React.createRef<HTMLDivElement>();
  // Use getId() to ensure that the callout label and description IDs are unique on the page.
  // (It's also okay to use plain strings without getId() and manually ensure their uniqueness.)
  private _labelId: string = getId('callout-label');
  private _descriptionId: string = getId('callout-description');

  public render(): JSX.Element {
    const { isCalloutVisible } = this.state;

    return (
      <>
        <div className={styles.buttonArea} ref={this._menuButtonElement}>
          <DefaultButton onClick={this._onShowMenuClicked} text={isCalloutVisible ? 'Hide Callout' : 'Show Callout'} />
        </div>
        {this.state.isCalloutVisible && (
          <Callout
            className={styles.callout}
            ariaLabelledBy={this._labelId}
            ariaDescribedBy={this._descriptionId}
            role="alertdialog"
            gapSpace={0}
            target={this._menuButtonElement.current}
            onDismiss={this._onCalloutDismiss}
            setInitialFocus={true}
          >
            <div className={styles.header}>
              <p className={styles.title} id={this._labelId}>
                All of your favorite people
              </p>
            </div>
            <div className={styles.inner}>
              <p className={styles.subtext} id={this._descriptionId}>
                Message body is optional. If help documentation is available, consider adding a link to learn more at
                the bottom.
              </p>
              <div className={styles.actions}>
                <Link className={styles.link} href="http://microsoft.com" target="_blank">
                  Go to microsoft
                </Link>
              </div>
            </div>
          </Callout>
        )}
      </>
    );
  }

  private _onShowMenuClicked = (): void => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible,
    });
  };

  private _onCalloutDismiss = (): void => {
    this.setState({
      isCalloutVisible: false,
    });
  };
}
