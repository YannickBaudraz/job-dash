import { Typography } from '@material-tailwind/react';
import { LoremIpsum } from 'lorem-ipsum';
import withPageTitle from '../../common/components/hoc/withPageTitle';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function Home() {
  return (
    <>
      <Typography variant="h1">
        Vite + React + Typescript + Material Tailwind
      </Typography>
      <Typography variant="paragraph">
        {Array.from({ length: 50 }, () => lorem.generateParagraphs(1)).map(
          (paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )
        )}
      </Typography>
    </>
  );
}

export default withPageTitle(Home);
