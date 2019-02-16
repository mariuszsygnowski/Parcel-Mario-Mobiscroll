import React from 'react';
import '../styles/components/intro.scss';
import '../styles/components/container.scss';

class Intro extends React.Component {

    render() {
        return (
            <div className='intro'>
                <div className="intro__main container">
                    <h1>Compare and book cheap parcel delivery services with Parcel Mario</h1>
                    <p>Wherever in the world you want to send your parcel we compare the best couriers to get you the best
                        services and delivery rates.</p>
                    <a className={'intro__main__video'} href="#"><img src="https://cdn3.iconfinder.com/data/icons/social-media-2129/512/Social_Media-04-512.png" alt=""/>Watch our video </a>
                </div>
            </div>
        );
    }
}

export default Intro;