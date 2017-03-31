import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import img from '../../images/content-1-bg.png'

const styles = StyleSheet.create({
    contentOne: {
        '@media(max-width: 450px)': {
            background: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '75% 10%',
            textAlign: 'center',
            paddingTop: '100px',
            width: '100%',
            height: '600px'
        },
        '@media(min-width: 900px)': {
            background: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '75% 10%',
            textAlign: 'center',
            paddingTop: '200px',
            width: '100%',
            height: '600px'
        }
    },
    contentOneHeading: {
        '@media(max-width: 450px)': {
            marginTop: '0',
            color: '#92bd50',
            fontSize: '35px'
        },
        '@media(min-width: 900px)': {
            marginTop: '0',
            color: '#92bd50',
            fontSize: '50px'
        }
    },
    contentOneText: {
        '@media(max-width: 450px)': {
            marginTop: '330px',
            color: 'white',
            fontSize: '20px'
        },
        '@media(min-width: 900px)': {
            marginTop: '0',
            color: 'white',
            fontSize: '30px'
        }
    }
});

class ContentOne extends Component {
  render() {
    return (
        <div className={ css(styles.contentOne) }>
            <p className={ css(styles.contentOneHeading) }><b>MERCURIAL SUPERFLY</b></p>
            <p className={ css(styles.contentOneText) }><b>It's time to destroy defenses.</b></p>
        </div>
    );
  }
}

export default ContentOne;
