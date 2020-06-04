import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';
import { getClasses } from "../../actions/classes";
import {
    Tabs,
    Tab,
    Button
} from 'react-bootstrap';

export class Classes extends Component {

    componentDidMount(){
        this.props.getClasses();
    }

    goToLessons(id){
        console.log('id')
        console.log(id)
        this.props.history.push(`/lessons/${id}`);
    }

    renderClasses(){
        var that = this;
        var btn_types = ['primary', 'secondary', 'success' , 'warning', 'danger', 'info', 'dark']
        var variant;
        return this.props.classes.map(function (e, index){
            var subjects = []
            e.subjects.map(function(s, i){
                variant = btn_types[Math.floor(Math.random() * btn_types.length)];
                subjects.push(<div className='subject-btn' key={i}><Button onClick={() => that.goToLessons(s.id)}
                 variant={variant}>{s.title}</Button></div>)
            })
            return(
              <Tab key={index} eventKey={e.number} title={`${e.number} клас`}>
                {subjects}
              </Tab>
            )
        })
    }

    render() {

        if (!this.props.isAuthenticated) {
            return <Redirect to="/login" />;
        }

        return (
            <>
                <MainLayout {...this.props}>
                    <div className="classes">
                        <div className='classes-tabs'>
                            <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
                                {this.renderClasses()}
                            </Tabs>
                        </div>
                    </div>
                </MainLayout>
            </>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
    classes: state.classes.classes,
});

function mapDispatchToProps(dispatch) {
    return {
        getClasses: () => dispatch(getClasses()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
