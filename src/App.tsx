import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import Button from './componets/Button';
import viteLogo from '/vite.svg';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<br />
				<Button size="small">small</Button>
				<Button>mediu</Button>
				<Button size="large">large</Button>

				<br />
				<br />
				<Button>default</Button>
				<Button color="secondary">secondary</Button>
				<Button color="error">error</Button>
				<Button color="gray">gray</Button>
				<Button color="success">success</Button>
				<Button color="warning">warning</Button>
				<br />
				<br />
				<Button disabled> default</Button>
				<Button disabled color="secondary">
					secondary
				</Button>
				<Button disabled color="error">
					error
				</Button>
				<Button disabled color="gray">
					gray
				</Button>
				<Button disabled color="success">
					success
				</Button>
				<Button disabled color="warning">
					warning
				</Button>
				<br />
				<br />
				<br />

				<Button position="secondary" color="primary">
					secondary primary
				</Button>
				<Button position="secondary" color="secondary">
					secondary secondary
				</Button>
				<Button position="secondary" color="error">
					secondary error
				</Button>
				<Button position="secondary" color="gray">
					secondary gray
				</Button>
				<Button position="secondary" color="success">
					secondary success
				</Button>
				<Button position="secondary" color="warning">
					secondary warning
				</Button>
				<br />
				<br />

				<Button disabled position="secondary" color="primary">
					secondary primary
				</Button>
				<Button disabled position="secondary" color="secondary">
					secondary secondary
				</Button>
				<Button disabled position="secondary" color="error">
					secondary error
				</Button>
				<Button disabled position="secondary" color="gray">
					secondary gray
				</Button>
				<Button disabled position="secondary" color="success">
					secondary success
				</Button>
				<Button disabled position="secondary" color="warning">
					secondary warning
				</Button>

				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
