import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSports } from '../actions'

class Sports extends Component {
	componentDidMount() {
		this.props.fetchSports()
	}

	renderSports() {
		return this.props.sports.map(sport => {
			return (
				<div className="grid-example col s12 m6">
					<div className="card small" style={{ backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZxbNYTvbFQsEJMK3mctvSaoo_5ayzRmo2w&usqp=CAU" + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.8, borderRadius: 45 }}>
						<div className="card-content">
							<span className="card-title"><Link to="/sports" style={{ color: "white", fontWeight: "bold" }}>{sport.name}</Link></span>
							{/* <p><a href="#">Badminton</a></p> */}
						</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div style={{ marginTop: 30 }}>
				<div className="row">
					{this.renderSports()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return { sports: state.sports }
}

export function loadData(store) {
    return store.dispatch(fetchSports())
}

export default connect(mapStateToProps, { fetchSports })(Sports)

// export default {
//     loadData,
//     component: connect(mapStateToProps, { fetchSports })(Sports)
// }