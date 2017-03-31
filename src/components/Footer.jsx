import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    footer: {
        '@media(max-width: 450px)': {
            textAlign: 'left'
        },
        '@media(min-width: 900px)': {
           paddingLeft: '200px',
           paddingRight: '200px',
           paddingTop: '50px',
           paddingBottom: '150px',
           textAlign: 'left',
           display: 'flex'
        }
    },
    column3: {
        '@media(min-width: 900px)': {
            marginLeft: '100px',
            marginRight: '50px'
        }
    },
    footerUl: {
        listStyle: 'none',
        padding: '10px',
        color: 'grey'
    },
    footerLi: {
        paddingBottom: '10px'
    },
});

class Footer extends Component {
  render() {
    return (
        <div className={ css(styles.footer) }>
            <div className={ css(styles.column1) }>
                <ul className={ css(styles.footerUl) }>
                    <li className={ css(styles.footerLi) }><b>WEB DESIGN STUDIO TUTORIALS</b></li>
                    <li className={ css(styles.footerLi) }>Design a creative Blog</li>
                    <li className={ css(styles.footerLi) }>Design a iPad Website</li>
                    <li className={ css(styles.footerLi) }>Single Page sales portfolio</li>
                    <li className={ css(styles.footerLi) }>Flat product website in Photoshop</li>
                    <li className={ css(styles.footerLi) }>Design a creative Blog</li>
                    <li className={ css(styles.footerLi) }>Design a iPad Website</li>
                    <li className={ css(styles.footerLi) }>Single Page sales portfolio</li>
                </ul>
            </div>
            <div className={ css(styles.column2) }>
                <ul className={ css(styles.footerUl) }>
                    <li className={ css(styles.footerLi) }><b>STEP BY STEP WEB DESIGN TUTORIALS</b></li>
                    <li className={ css(styles.footerLi) }>Design a creative Blog</li>
                    <li className={ css(styles.footerLi) }>Design a iPad Website</li>
                    <li className={ css(styles.footerLi) }>Single Page sales portfolio</li>
                    <li className={ css(styles.footerLi) }>Flat product website in Photoshop</li>
                    <li className={ css(styles.footerLi) }>Design a creative Blog</li>
                </ul>
            </div>
            <div className={ css(styles.column3) }>
                <ul className={ css(styles.footerUl) }>
                    <li className={ css(styles.footerLi) }><b>DESIGNERS</b></li>
                    <li className={ css(styles.footerLi) }>Blaz Robar</li>
                    <li className={ css(styles.footerLi) }>Nick Toranto</li>
                    <li className={ css(styles.footerLi) }>Joisp Kelava</li>
                </ul>
            </div>
            <div className={ css(styles.column4) }>
                <ul className={ css(styles.footerUl) }>
                    <li className={ css(styles.footerLi)}><b>BLAZROBAR.COM</b></li>
                    <li className={ css(styles.footerLi)}>About</li>
                    <li className={ css(styles.footerLi)}>Web Design Video Tutorials</li>
                    <li className={ css(styles.footerLi)}>Sign up</li>
                    <li className={ css(styles.footerLi)}>Sign in</li>
                    <li className={ css(styles.footerLi)}>Contact</li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Footer;
