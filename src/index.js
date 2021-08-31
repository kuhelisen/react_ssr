import 'babel-polyfill'
import express from 'express'
// import cors from 'cors'
import { matchRoutes } from 'react-router-config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
const keys = require('./helpers/config/keys')

const sports = require('./helpers/routes/api/sports');


const app = express()

//body-parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'))

// app.use(cors())

//use route
app.use('/api/sports', sports);

// server side rendering of react app
app.get('*', (req, res) => {
	const store = createStore()

	// logic to initialise and load data into the store
	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store) : null
	})

	Promise.all(promises).then(() => {
		const context = {}
		const content = renderer(req, store, context)

		if(context.notFound)
			res.status(404)

		res.send(content)
	})
})

//DB config
const db = keys.mongoURI;

// connect to MongoDB through Mongoose
mongoose
	.connect(db)
	.then(() => console.log('mongodb connected'))
	.catch(err => console.log(err));


const port = process.env.PORT || 3006

app.listen(port, () => {
	console.log('app is listeinig on port 3006')
})
