    import React            from 'react';
    import ReactDOM         from 'react-dom';
    import { Provider }     from 'react-redux';
    import { createStore,
        applyMiddleware
    }                       from 'redux';
    import { composeWithDevTools
    }                       from 'redux-devtools-extension';
    import thunk            from 'redux-thunk';
    import createHistory    from 'history/createBrowserHistory';
    import { Route }        from 'react-router';
    import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
    import reducers         from './reducers';

    import './custom.css';
    import 'bootstrap/dist/css/bootstrap.css';

    import Home             from './containers/Home';
    import Food             from './components/Food';
    import FoodItem         from './containers/FoodItem';

    const history       = createHistory();
    const middleware    = routerMiddleware(history);
    const store         = createStore(reducers, composeWithDevTools(applyMiddleware(thunk,middleware)));


    ReactDOM.render(
        <Provider store={store} >
            { /* ConnectedRouter will use the store from Provider automatically */ }
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path   ="/"                component={Home}/>
                    <Route path         ="/:cityId/food/"   component={Food}/>
                    <Route path         ="/:city/food/:id"  component={FoodItem}/>
                </div>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );

