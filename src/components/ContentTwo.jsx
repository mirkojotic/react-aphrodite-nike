import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    contentTwo: {
        '@media(max-width: 450px)': {
            backgroundColor: '#27282a',
            minHeight: '300px',
            color: 'white',
            textAlign: 'left',
            padding: '20px',
            paddingTop: '100px'
        },
        '@media(min-width: 900px)': {
            backgroundColor: '#27282a',
            height: '300px',
            color: 'white',
            textAlign: 'left',
            padding: '20px',
            paddingTop: '100px',
            paddingLeft: '200px',
            paddingRight: '200px'
        }
    },
    contentTwoText: {
        '@media(max-width: 450px)': {
        },
        '@media(min-width: 900px)': {
            display: 'flex'
        }
    },
    contentTwoParagraph: {
        '@media(max-width: 450px)': {
        },
        '@media(min-width: 900px)': {
            margin: 'auto',
            width: '32%'
        }
    }
});

class ContentTwo extends Component {
  render() {
    return (
        <div className={ css(styles.contentTwo) }>
          <div className={ css(styles.contentTwoText) }>
            <div className={ css(styles.contentTwoParagraph) }>
                <h2>What is Lorem Ipsum?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className={ css(styles.contentTwoParagraph) }>
                <h2>What is Lorem Ipsum?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className={ css(styles.contentTwoParagraph) }>
                <h2>What is Lorem Ipsum?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </div>
    );
  }
}

export default ContentTwo;
