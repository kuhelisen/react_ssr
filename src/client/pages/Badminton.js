import React, { Component } from 'react'
import Header from '../components/Header'

// centers field should be appended to Sports model and this should be called via new api
const centers = [
    {
        "name":"Fitso Centre 119 Smashtress",
        "desc":"3 synthetic courts",
        "imageURL":"https://c1.wallpaperflare.com/preview/264/260/34/badminton-shuttle-sport-bat.jpg"
    },
    {
        "name":"Fitso Centre 119 Smashtress",
        "desc":"3 synthetic courts",
        "imageURL":"https://c1.wallpaperflare.com/preview/264/260/34/badminton-shuttle-sport-bat.jpg"
    },
    {
        "name":"Fitso Centre 119 Smashtress",
        "desc":"3 synthetic courts",
        "imageURL":"https://c1.wallpaperflare.com/preview/264/260/34/badminton-shuttle-sport-bat.jpg"
    },
    {
        "name":"Fitso Centre 119 Smashtress",
        "desc":"3 synthetic courts",
        "imageURL":"https://c1.wallpaperflare.com/preview/264/260/34/badminton-shuttle-sport-bat.jpg"
    }
]

class Badminton extends Component {
    renderCentres() {
        return centers.map(center => {
            return (
                <div className="grid-example col s12 m6">
                    <div className="card small">
                        <div className="card-image">
                            <img src={center.imageURL} />
                            <span className="card-title">{center.name}</span>
                        </div>
                        <div className="card-content">
                            <p>{center.desc}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div style={{ backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZxbNYTvbFQsEJMK3mctvSaoo_5ayzRmo2w&usqp=CAU" + ")", opacity: 0.8 }}>
                    <Header />
                    <div className="center-align" style={{ paddingBottom: 200 }}>
                        <h1 style={{ color: "white", fontWeight: "bold" }}>Badminton</h1>
                        <h5 style={{ color: "white" }}>We put the bad in baddy</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="grid-example col s12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Available at all centres</span>
                                <ul>
                                    <li style={{ color: "grey", paddingBottom: 20 }}><i className="tiny material-icons" style={{ paddingRight: 20 }}>grid_on</i>Indoor International-standard Courts</li>
                                    <li style={{ color: "grey", paddingBottom: 20 }}><i className="tiny material-icons" style={{ paddingRight: 20 }}>sports_tennis</i>Equiment Available on Rent</li>
                                    <li style={{ color: "grey", paddingBottom: 20 }}><i className="tiny material-icons" style={{ paddingRight: 20 }}>group</i>Playing Partner Guaranteed</li>
                                    <li style={{ color: "grey" }}><i className="tiny material-icons" style={{ paddingRight: 20 }}>sports</i>Certified Coaches for Guidance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {this.renderCentres()}
                </div>
            </div>
        )
}   }

export default {
	component: Badminton
}
