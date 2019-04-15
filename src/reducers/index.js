import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import users from './users'
import grid from './grid'
import flowers from './flowers'
import veggies from './veggies'
import trees from './trees'
import shrubs from './shrubs'

export default history => 
    combineReducers({
        router: connectRouter(history),
        auth,
        users,
        grid, 
        flowers,
        veggies,
        trees,
        shrubs
    })