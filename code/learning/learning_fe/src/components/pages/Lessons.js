import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';
import { getLessons } from "../../actions/lessons";
import {
    CardDeck,
    Card,
    Accordion,
    Button
} from 'react-bootstrap';

export class Lessons extends Component {

    componentDidMount(){
        this.props.getLessons(this.props.match.params.id);
    }

    renderLessons(){
        var that = this;
        return this.props.lessons.map(function (l, index){
            var pictures = []
            l.pictures.map(function(p, i){
                pictures.push(<img key={i} src={p.picture_url} className=''/>)
            })
            return(
              <Card key={index}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                    {index+1}-{l.title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>{pictures}</Card.Body>
                </Accordion.Collapse>
              </Card>
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
                    <Accordion defaultActiveKey="0">
                      {this.renderLessons()}
                    </Accordion>
                </MainLayout>
            </>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
    lessons: state.lessons.lessons,
});

function mapDispatchToProps(dispatch) {
    return {
        getLessons: (id) => dispatch(getLessons(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);
