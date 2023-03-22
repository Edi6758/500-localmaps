import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import HomePage from "./pages/Home"
import New from './pages/New';


function App() {

  const theme = {
    primary: "#322153",
    secondary: "#6c63ff",
    background: "#f0f0f5",
    text: "#6c6c80",
    white: "#fff"
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/new' element={<New/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
