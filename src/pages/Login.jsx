import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert, Snackbar } from '@mui/material';

export default function Login() {
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const users = [
		{
			'email' : 'john',
			'password' : '123'
		}
	]

	const handleClick = async (e) => {
		e.preventDefault();

		const matchingUser = users.find(user => 
			user.email === email && 
			user.password === password
		);

		if(matchingUser){
			setSuccess(true);
			setError(false);
		}
		else{
			setError(true);
			setSuccess(false);
		}
	};

	const styles = {
		box: {
			marginTop: 30,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		form: {
			width: '300px',
			padding: '1em',
			display: 'flex', 
			flexDirection: 'column',
			gap: '1em',
		},
		input: {
			height: '50px',
			fontSize: '20px',
			paddingLeft: '10px',
		},
	}

	return (
		<Container component="main" maxWidth="xs">
			<Box sx={styles.box}>
				<Typography component="h1" variant="h5">Sign in</Typography>
				<form style={styles.form}>
					<input
						style={styles.input}
						type="text"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						style={styles.input}
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						onClick={handleClick}
					>
          	{"Sign In"}
					</Button>
				</form>
			</Box>
			<Snackbar data-testid="error" open={error}>
				<Alert variant="filled" severity="error">Error</Alert>
			</Snackbar>
			<Snackbar data-testid="success" open={success}>
				<Alert variant="filled" severity="success">Success!</Alert>			
			</Snackbar>
		</Container>
	);
}