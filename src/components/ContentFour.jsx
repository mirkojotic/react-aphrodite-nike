import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    contentFour: {
        '@media(max-width: 450px)': {
            backgroundColor: '#92bd50',
            color: 'white',
            padding: '10px',
            paddingLeft: '30px',
            paddingBottom: '50px',
            textAlign: 'left'

        },
        '@media(min-width: 900px)': {
            backgroundColor: '#92bd50',
            color: 'white',
            padding: '10px',
            paddingLeft: '200px',
            paddingRight: '200px',
            paddingBottom: '50px',
            textAlign: 'left'
        }
    },
    contentFourText: {
        '@media(max-width: 450px)': {
            paddingBottom: '20px'
        },
        '@media(min-width: 900px)': {
            paddingBottom: '20px'
        }
    },
    btnJoin: {
        '@media(max-width: 450px)': {
            padding: '5px',
            paddingLeft: '40px',
            paddingRight: '40px',
            color: '#92bd50',
            backgroundColor: 'white',
            textDecoration: 'none',
            borderRadius: '3px'
        },
        '@media(min-width: 900px)': {
            padding: '5px',
            paddingLeft: '40px',
            paddingRight: '40px',
            color: '#92bd50',
            backgroundColor: 'white',
            textDecoration: 'none',
            borderRadius: '3px'
        }
    }
});

class ContentFour extends Component {
  render() {
    return (
        <div className={ css(styles.contentFour) }>
            <h3 className={ css(styles.contentFourH3) }><b>DOWNLOAD & WATCH ALL TUTORIALS ON YOUR DEVICE</b></h3>
            <h3 className={ css(styles.contentFourH3) }><b>DESKTOP COMPUTER, IPHONE, IPAD OR APPLE DEVICE</b></h3>
            <div className={ css(styles.contentFourText) }>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className={ css(styles.contentFourText) }>It has survived not only five centuries, but also the leap into electronic typesetting.</div>
            <a className={ css(styles.btnJoin) } href={`/#join`}>JOIN</a>
        </div>
    );
  }
}

export default ContentFour;
