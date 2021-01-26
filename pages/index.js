import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import db from '../db.json';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Quiz Alura - luizf-lf</title>
        <meta name="title" content="Quiz Game Of Thrones - luizf-lf" />
        <meta
          name="description"
          content="Quiz desenvolvido durante a segunda edição da Imersão React da Alura"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://alura-quiz.luizf-lf.vercel.app/"
        />
        <meta property="og:title" content="Quiz Alura - luizf-lf" />
        <meta
          property="og:description"
          content="Quiz desenvolvido durante a segunda edição da Imersão React da Alura"
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://alura-quiz.luizf-lf.vercel.app/"
        />
        <meta property="twitter:title" content="Quiz Alura - luizf-lf" />
        <meta
          property="twitter:description"
          content="Quiz desenvolvido durante a segunda edição da Imersão React da Alura"
        />
        <meta property="twitter:image" content="" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <input
                type="text"
                placeholder="Digite o seu nome"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />
              <button type="submit" disabled={name.length === 0 && true}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/luizf-lf/alura-quiz" />
      </QuizContainer>
    </QuizBackground>
  );
}
