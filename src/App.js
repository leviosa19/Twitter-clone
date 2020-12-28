import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets'
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useState } from 'react';

function App() {

	const [{user}, dispatch] = useStateValue()

	// const [user, setuser] = useState(null)

	return (
		<div className="app">

			{!user ? (
				<Login />
			)
			: 
				(
					<>
						{/* Sidebar */}
						<Sidebar />

						{/* Feed */}
						<Feed />

						{/* Widgets */}
						<Widgets />
					</>
				)
			}
		</div>
	);
}

export default App;
