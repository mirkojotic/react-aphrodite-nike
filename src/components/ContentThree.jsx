import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import img from '../../images/content-2-bg.png';
import imgCircle from '../../images/circle-bg.png';
import imgBigLeft from '../../images/big-left.png';
import imgBigRight from '../../images/big-right.png';
import imgBigBottom from '../../images/big-bottom.png';

const styles = StyleSheet.create({
    contentThree: {
        '@media(max-width: 450px)': {
            height: '500px',
            background: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '75% 10%'
        },
        '@media(min-width: 900px)': {
            height: '600px',
            background: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '0% 0%',
        }
    },
    backgroundCircle: {
        '@media(max-width: 450px)': {
            background: `url(${imgCircle})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '250px 250px',
            backgroundPosition: '50% 50%',
            width: '100%',
            height: '80%'
        },
        '@media(min-width: 900px)': {
            background: `url(${imgCircle})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '400px 400px',
            backgroundPosition: '30% 50%',
            width: '80%',
            height: '80%',
            float: 'right'
        }
    },
    largePicture: {
        '@media(max-width: 450px)': {
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70%',
            width: '100%',
            height: '100%'
        },
        '@media(min-width: 900px)': {
            backgroundRepeat: 'no-repeat',
            backgroundSize: '40%',
            width: '100%',
            height: '100%'
        }
    },
    largePictureBigLeft: {
        '@media(max-width: 450px)': {
            background: `url(${imgBigLeft})`,
            backgroundPosition: '30% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70%',
            width: '100%',
            height: '100%'
        },
        '@media(min-width: 900px)': {
            background: `url(${imgBigLeft})`,
            backgroundPosition: '20% 70%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '40%',
            width: '100%',
            height: '100%'
        }
    },
    largePictureBigRight: {
        '@media(max-width: 450px)': {
            background: `url(${imgBigRight})`,
            backgroundPosition: '30% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70%',
            width: '100%',
            height: '100%'
        },
        '@media(min-width: 900px)': {
            background: `url(${imgBigRight})`,
            backgroundPosition: '20% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '40%',
            width: '100%',
            height: '100%'
        }
    },
    largePictureBigBottom: {
        '@media(max-width: 450px)': {
            background: `url(${imgBigBottom})`,
            backgroundPosition: '30% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70%',
            width: '100%',
            height: '100%'
        },
        '@media(min-width: 900px)': {
            background: `url(${imgBigBottom})`,
            backgroundPosition: '20% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '40%',
            width: '100%',
            height: '100%'
        }
    },
    smallPicturesContainer: {
        '@media(max-width: 450px)': {
            display: 'flex',
            height: '20%',
            width: '100%',
            paddingLeft: '0px',
            paddingTop: '0px'
        },
        '@media(min-width: 900px)': {
            height: '20%',
            width: '20%',
            paddingLeft: '200px',
            paddingTop: '70px'
        }
    },
    smallPicture: {
        '@media(max-width: 450px)': {
            margin: 'auto',
            height: '50%',
            width: '20%',
            boxSizing: 'border-box'
        },
        '@media(min-width: 900px)': {
            height: '100px',
            width: '150px',
            boxSizing: 'border-box'
        },
        ':hover': {
            border: '1px solid #92bd50'
        }
    },
    smPic1: {
        '@media(max-width: 450px)': {
            background: `url(${imgBigLeft})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70px 50px',
            backgroundPosition: '50% 50%',
        },
        '@media(min-width: 900px)': {
            background: `url(${imgBigLeft})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '80px 60px',
            backgroundPosition: '50% 50%',
        }
    },
    smPic2: {
        '@media(max-width: 450px)': {
            background: `url(${imgBigRight})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70px 50px',
            backgroundPosition: '50% 50%',
        },
        '@media(min-width: 900px)': {
            background: `url(${imgBigRight})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '80px 60px',
            backgroundPosition: '50% 50%',
        }
    },
    smPic3: {
        '@media(max-width: 450px)': {
            background: `url(${imgBigBottom})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70px 30px',
            backgroundPosition: '50% 50%',
        },
        '@media(min-width: 900px)': {
            background: `url(${imgBigBottom})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '80px 40px',
            backgroundPosition: '50% 50%',
        }
    }
});

class ContentThree extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            imageToShow: 'bigRight'
        }
        this.handleThumbnailClick = this.handleThumbnailClick.bind(this)
    }
    handleThumbnailClick(event) {
        const {id} = event.target
        this.setState({imageToShow: id})
    }
    render() {
        let imgToShow = this.state.imageToShow;
        let bigImage = <div className={ css(styles.largePictureBigLeft) }></div>
        if (imgToShow === 'bigRight')
            bigImage = <div className={ css(styles.largePictureBigRight) }></div>
        if (imgToShow === 'bigBottom')
            bigImage = <div className={ css(styles.largePictureBigBottom) }></div>
        return (
            <div className={ css(styles.contentThree) }>
                <div className={css(styles.backgroundCircle)}>
                    { bigImage }
                </div>
                <div className={css(styles.smallPicturesContainer)}>
                    <div id={'bigLeft'} onClick={this.handleThumbnailClick} className={css(styles.smallPicture, styles.smPic1)}></div>
                    <div id={'bigRight'} onClick={this.handleThumbnailClick} className={css(styles.smallPicture, styles.smPic2)}></div>
                    <div id={'bigBottom'} onClick={this.handleThumbnailClick} className={css(styles.smallPicture, styles.smPic3)}></div>
                </div>
            </div>
        );
    }
}

export default ContentThree;
