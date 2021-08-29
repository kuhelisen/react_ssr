import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="page-footer grey darken-2">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                <h5 className="white-text">Fitso</h5>
                <p className="grey-text text-lighten-4">Enrich your health by having best sports experience !!</p>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                © 2020 Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">Fitso</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer