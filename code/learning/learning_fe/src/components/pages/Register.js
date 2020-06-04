import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authLogin, register } from "../../actions/auth";
import MainLayout from '../blocks/layouts/MainLayout';

import {
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

export class Register extends Component {
    register = (e) => {
        e.preventDefault();
        let form = e.target
        let username = form.elements.username.value;
        let pass = form.elements.pass.value;
        let pass2 = form.elements.pass2.value;

        if(pass !== pass2){
            alert('passwords do not match')
        }
        else{
          this.props.register({username: username, password: pass});
          this.props.history.push('/login');
        }
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        return (
            <>
                <MainLayout {...this.props}>
                    <Form onSubmit={this.register} className='login-form'>
                      <Form.Group controlId="username">
                        <Form.Label>Потребителско име</Form.Label>
                        <Form.Control required placeholder="Избере Потребителско име" />
                      </Form.Group>
                      <Form.Group controlId="pass">
                        <Form.Label>Парола</Form.Label>
                        <Form.Control required type="password" placeholder="парола" />
                      </Form.Group>
                      <Form.Group controlId="pass2">
                        <Form.Label>Потвърдете парола</Form.Label>
                        <Form.Control required type="password" placeholder="парола" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Регистрирай се
                      </Button>
                    </Form>
                </MainLayout>
            </>
        );

    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null
});

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password) => dispatch(authLogin(email, password)),
        register: (credentials) => dispatch(register(credentials)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
