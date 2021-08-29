import React from 'react'
import Header from '../components/Header'
import Sports from '../components/Sports'

const Home = () => {
  return (
	  <div>
	  <div style={{ backgroundImage: "url(" + "https://wallpapercave.com/wp/cAO5uXj.jpg" + ")", opacity: 0.8 }}>
		<Header />
		<div className="center-align" style={{ paddingBottom: 200 }}>
			<h1 style={{ color: "white", fontWeight: "bold" }}>fitso <br/><h6>by Zomato</h6></h1>
			<h5 style={{ color: "white" }}>Best Sports Experience</h5>
		</div>
		</div>
		<Sports />
	</div>
	)
}

export default {
	component: Home
}