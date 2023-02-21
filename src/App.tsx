import React, { HtmlHTMLAttributes, useState } from 'react';
import './App.css';
import HomePage2 from './features/HomePage/HomePage2';
import HomePage from './features/HomePage/HomePage2';
import Button from '@mui/material/Button'
import { FormControl, Typography, Box, TextField, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, Divider, CircularProgress, Link } from '@mui/material';
import firebase from 'firebase/compat';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import { useDispatch } from 'react-redux';


/**
 * Given a string, return true if it is a valid email.
 * @param {potentialEmail} string
 * @returns true if string is a valid email
 */
const validateEmail = (potentialEmail:string) => {
  // regex from https://www.w3resource.com/javascript/form/email-validation.php
 return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(potentialEmail))
}





// const SignInComponent = () => {
//   const firebase = useFirebase()
//   const dispatch = useDispatch()
  
//   useFirebaseConnect({
//     path: "user" // user
//   })
  
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const validEmail = validateEmail(email)

//   const INTERESTS: String[] = ["tennis","children"]
//   const ACCESSIBILITY: String[] = ["vision-impaired", "one-handed"]

//   const cred = {email, password}

//   const MIN_PASSWORD_LENGTH = 5

//   const validPassword = password.length >= MIN_PASSWORD_LENGTH


  
//   const errors = {
//     email: !validEmail,
//     password: !validPassword
//   }
  
//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // update name
//     setName(event.target.value)
//   }

//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value)
//   }
  
//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value)
//   }



//   const handleSubmit = () => {
//     const profile = {
//       username: name,
//       email: email,
//       interests: INTERESTS,
//       accessibility: ACCESSIBILITY
//     }
//     return firebase
//       .createUser(cred, profile)
//       .then(async (userInfo) => {
//         let uid = userInfo.uid
//       })
//       .catch((error) => {
//         console.log("Error: " + error)
//       })
//   }

//   return (
//   <>
//     <FormControl
//       sx={{
//         m: 3,
//         maxWidth: '800px'
//       }}
//       component='fieldset'
//       variant='standard'
//     >
//       <Typography variant='h3'>Create your Code Replayer account</Typography>
//       <Box>
//         <TextField
//           autoComplete='given-name'
//           name='name'
//           fullWidth
//           id='name'
//           label='Name'
//           value={name}
//           onChange={handleNameChange}
//           autoFocus
//           sx={{ m: 1 }}
//         />
//         <TextField
//           required
//           fullWidth
//           id='email'
//           label='Email Address'
//           name='email'
//           value={email}
//           onChange={handleEmailChange}
//           error={errors.email}
//           autoComplete='email'
//           helperText={errors.email && 'input a valid email'}
//           sx={{ m: 1 }}
//         />
//         <TextField
//           required
//           fullWidth
//           value={password}
//           error={errors.password}
//           onChange={handlePasswordChange}
//           name='password'
//           label='Password'
//           type='password'
//           id='password'
//           autoComplete='new-password'
//           helperText={errors.password && 'input a password of at least 8 characters'}
//           sx={{ m: 1 }}
//         />
          
//         <Box
//           sx={{
//             my: 4,
//             display: 'flex',
//             justifyContent: 'center'
//           }}
//         >
//           <Button
//             type='submit'
//             size='large'
//             variant='contained'
//             onClick={handleSubmit}
//           >
//             Sign up
//           </Button>
//         </Box>
//       </Box>
//     </FormControl>
//   </>
//   )
// }

function App() {
  return (
    <>
        {/* <SignInComponent /> */}
        <HomePage />
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
    </>

  );
}

export default App;
