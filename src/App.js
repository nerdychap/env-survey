import { Container, createTheme, ThemeProvider } from '@mui/material';
import { useReducer, useState } from 'react';
import Questions from './components/Questions';
import SurveyForm from './components/SurveyForm';
import { initialSurveyState } from './constants/constants';
import SurveyContext from './store/context';
import surveyReducer from './store/reducer';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 0 2px 1px lightgrey',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
})

function App() {
  const [state, dispatch] = useReducer(surveyReducer, [])
  const [survey, setSurvey] = useState(initialSurveyState)
  const value = { state, dispatch, survey, setSurvey }
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ textAlign: 'center' }} maxWidth="lg">
        <SurveyContext.Provider value={value}>
          <h1 >Enveritas Surveys</h1>
          <SurveyForm />
          <Questions />
        </SurveyContext.Provider>

      </Container>
    </ThemeProvider>

  );
}

export default App;
