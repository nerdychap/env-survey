import { Container } from '@mui/material';
import { useReducer, useState } from 'react';
import Questions from './components/Questions';
import SurveyForm from './components/SurveyForm';
import { initialSurveyState } from './constants/constants';
import SurveyContext from './store/context';
import surveyReducer from './store/reducer';

function App() {
  const [state, dispatch] = useReducer(surveyReducer, [])
  const [survey, setSurvey] = useState(initialSurveyState)
  const value = { state, dispatch, survey, setSurvey }
  return (
    <Container sx={{ textAlign: 'center' }} maxWidth="lg">
      <SurveyContext.Provider value={value}>
        <h1 >Enveritas Surveys</h1>
        <SurveyForm />
        <Questions />
      </SurveyContext.Provider>

    </Container>
  );
}

export default App;
