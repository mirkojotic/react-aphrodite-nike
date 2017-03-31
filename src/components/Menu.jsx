import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../../images/logo.svg'

const styles = StyleSheet.create({
    atag: {
        textDecoration: 'none',
        color: 'white'
    },
    nav: {
        backgroundColor: '#27282a',
        height: '60px'
    },
    logo: {
        '@media(max-width: 450px)': {
            display: 'inline-block',
            textIndent: '-9999px',
            width: '160px',
            height: '60px',
            background: `url(${logo}) no-repeat center`,
            backgroundSize: '120px 50px',
            backgroundColor: '#a3d359'
        },
        '@media(min-width: 900px)': {
            display: 'inline-block',
            textIndent: '-9999px',
            width: '300px',
            height: '60px',
            background: `url(${logo}) no-repeat center`,
            backgroundSize: '120px 50px',
            backgroundColor: '#a3d359',
            marginRight: '120px'
        }
    },
    navList: {
        listStyleType: 'none',
        margin: '0',
        padding: '0'
    },
    navListItems: {
        '@media(max-width: 450px)': {
            float: 'left',
            height: '60px',
            lineHeight: '60px',
            textTransform: 'uppercase',
            marginRight: '20px'
        },
        '@media(min-width: 900px)': {
            display: 'inline-block',
            height: '60px',
            lineHeight: '60px',
            textTransform: 'uppercase',
            fontSize: '12px',
            fontWeight: 'bold',
            paddingRight: '40px',
            float: 'left'
        }
    },
    navLinks: {
        '@media(max-width: 450px)': {
            display: 'none'
        }
    },
    responsiveNavClosed: {
        '@media(max-width: 450px)': {
            display: 'none'
        },
        '@media(min-width: 900px)': {
            display: 'none'
        }
    },
    responsiveNavOpen: {
        '@media(max-width: 450px)': {
            color: 'white',
            textAlign: 'right',
            right: '15px',
            top: '60px',
            listStyleType: 'none',
            position: 'fixed',
            backgroundColor: '#27282a',
            padding: '4%'
        }
    },
    resNavLinks: {
        '@media(max-width: 450px)': {
            paddingBottom: '4px',
            fontSize: '12px',
            textTransform: 'uppercase',
        },
        '@media(min-width: 900px)': {
            display: 'none'
        }
    },
    openResponsiveMenu: {
        '@media(max-width: 450px)': {
            height: '60px',
            lineHeight: '60px',
            color: 'white',
            float: 'right',
            paddingRight: '20px',
            ':hover': {
                cursor: 'pointer',
                color: '#a3d359'
            }
        },
        '@media(min-width: 900px)': {
            display: 'none'
        }
    }
});

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }
    toggleMenu(e) {
        let change = !this.state.open
        this.setState({open: change})
    }
    render() {
        const open = this.state.open
        return (
        <div className={css(styles.nav)}>
                <ul className={css(styles.navList)}>
                    <li>
                        <a href={'/#homepage'} className={css(styles.logo, styles.navListItems)}>LOGO</a>
                    </li>
                    <li className={css(styles.navLinks, styles.navListItems)}>
                        <a href={'/#about'} className={css(styles.atag)}>about</a>
                    </li>
                    <li className={css(styles.navLinks, styles.navListItems)}>
                        <a href={'/#services'} className={css(styles.atag)}>services</a>
                    </li>
                    <li className={css(styles.navLinks, styles.navListItems)}>
                        <a href={'/#involvement'} className={css(styles.atag)}>involvement</a>
                    </li>
                </ul>
                <ul className={css(open ? styles.responsiveNavOpen : styles.responsiveNavClosed)}>
                    <li className={css(styles.resNavLinks)}><a className={ css(styles.atag) } href={'/#about'}>about</a></li>
                    <li className={css(styles.resNavLinks)}><a className={ css(styles.atag) } href={'/#services'}>services</a></li>
                    <li className={css(styles.resNavLinks)}><a className={ css(styles.atag) } href={'/#involvement'}>involvement</a></li>
                </ul>
                <span onClick={this.toggleMenu} className={css(styles.openResponsiveMenu)}>Menu</span>
        </div>
    );
  }
}

export default Menu;
