import { Card, CardBody, Typography } from '@material-tailwind/react';
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
      <section>
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-4">
          {Array.from({ length: 50 }, () => lorem.generateParagraphs(1)).map(
            (paragraph, index) => (
              <Card key={index}>
                <CardBody className="text-center">
                  <Typography variant="h4" className="mb-2">
                    Title
                  </Typography>
                  <Typography className="font-medium">{paragraph}</Typography>
                </CardBody>
              </Card>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default withPageTitle(Home);
