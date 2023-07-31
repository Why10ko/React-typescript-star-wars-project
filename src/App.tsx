import React, {useEffect, useState} from 'react';
import { Layout } from 'antd'
import { Sidebar } from './components/index'
import { sideBarIformation } from './helpers/index'
import { Peoples, People, Home } from './pages';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	Redirect
} from "react-router-dom";

function App() {	
  return (
		<Router>
			<Layout>
				<Sidebar information={sideBarIformation}/>
					<Layout>
						<Layout.Header></Layout.Header>
						<Layout.Content className='main-container'>	
							<Switch>
								<Route path={'/'} exact>
									<Home/>
								</Route>
								<Route path='/peoples' exact>
									<Peoples/>
								</Route>
								<Route path='/peoples/:id'>
									<People/>
								</Route>
								<Redirect to={'/'} />
							</Switch>
						</Layout.Content>
					</Layout>
			</Layout>
		</Router>
	);
}

export default App;