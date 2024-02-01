/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

function OuterQuiz({ externalDB }) {
  return (
    <div>
      <ThemeProvider theme={externalDB.theme}>
        <QuizScreen
          externalQuestions={externalDB.questions}
          externalBG={externalDB.bg}
        />
      </ThemeProvider>
    </div>
  );
}

export async function getServerSideProps(context) {
  const [projectName, projectAuthor] = context.query.id.split('___');
  const externalDB = await fetch(
    `https://${projectName}.${projectAuthor}.vercel.app/api/db`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Erro ao realiza a requisição ao servidor.');
    })
    .catch((err) => {
      console.error(err);
    });

  return {
    props: {
      externalDB,
    },
  };
}

export default OuterQuiz;
