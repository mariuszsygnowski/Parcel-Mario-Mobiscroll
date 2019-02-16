import React from 'react';
import cx from 'classnames';
import '../styles/components/container.scss';
import '../styles/components/header.scss';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {isOpen: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const navListClasses = cx('navigation__main__list', {
            'navigation__main__list--open': this.state.isOpen
        });

        return (
            <nav className="navigation ">
                <div className="navigation__main container">
                    <h3>parcel <span></span> mario</h3>
                    <div className="navigation__main__toggle" >
                        <div className='tgg'></div>
                        <div className='tgg'></div>
                        <div className='tgg'></div>
                        <p>MENU</p>
                    </div>
                    <ul className={navListClasses}>
                        <li>
                            <a className="sendAParcel" href="#1">Send a Parcel</a>
                        </li>
                        <li>
                            <a className="" href="#2">Tracking</a>
                        </li>
                        <li>
                            <a className="" href="#3">Service</a>
                        </li>
                        <li>
                            <a className="" href="#4">About Us</a>
                        </li>
                        <li>
                            <a className="" href="#5">Contact Us</a>
                        </li>
                        <li>
                            <a className="" href="#6">Items in cart: 0</a>
                        </li>
                        <li>
                            <a className="" href="#7">Sing up</a>
                        </li>
                        <li>
                            <a className="" href="#8">Log in</a>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Header;
