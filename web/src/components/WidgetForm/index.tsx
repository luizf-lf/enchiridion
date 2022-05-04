import { useState } from 'react';

import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import thoughtImage from '../../assets/thought.svg';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImage,
      alt: 'Imagem de um pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer>
        Feito com ♥ por{' '}
        <a
          className="underline underline-offset-2"
          href="https://luizf-lf.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          luizf-lf
        </a>
      </footer>
    </div>
  );
}
