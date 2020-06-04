import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';


export class Home extends Component {

    render() {
//        if (!this.props.isAuthenticated) {
//            return <Redirect to="/login" />;
//        }

        return (
            <>
                <MainLayout {...this.props}>
                    <div className="home">
                        <div className="home-left">
                            <img src="/static/images/home1.jpg" className='home-left-img'/>
                            <img src="/static/images/home2.jpg" className='home-left-img2'/>
                        </div>
                        <div className="home-text">
                            УЧЕНИК.БГ  е сайт за образователни материали,в помощт на ученици от начален
                             етап на образование,учители и родители.
                        </div>
                        <div className="home-right">
                            <img src="/static/images/home3.jpg" className='home-right-img'/>
                            <img src="/static/images/home4.jpg" className='home-right-img2'/>
                        </div>
                    </div>
                </MainLayout>
            </>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
});

function mapDispatchToProps(dispatch) {
    return {
//        login: (email, password) => dispatch(authLogin(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
