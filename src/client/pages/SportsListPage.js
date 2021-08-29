import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSports } from '../actions'

class SportsList extends Component {
    componentDidMount() {
        this.props.fetchSports()
    }

    renderSports() {
        return this.props.sports.map(sport => {
            return <li>{sport.name}</li>
        })
    }

    render() {
        return (
            <div>
                here is a list of sports
                <ul>{this.renderSports()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { sports: state.sports }
}

function loadData(store) {
    return store.dispatch(fetchSports())
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchSports })(SportsList)
}