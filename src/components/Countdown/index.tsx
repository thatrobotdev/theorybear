import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const today = new Date();

type TestDate = {
  number: Number;
  date: Date;
};

const PumaPrideTestDates: TestDate[] = [
  {
    number: 1,
    date: new Date('2023-10-06'),
  }
];

const PhoenixFireTestDates: TestDate[] = [
  {
    number: 1,
    date: new Date('2023-10-06'),
  }
];

const ConcertChoirTestDates: TestDate[] = [
  {
    number: 1,
    date: new Date('2023-10-06'),
  }
];

function closestEventDate(testDates: TestDate[]): TestDate {
  let closestEventDate: Date;
  let closestEventNumber: Number;

  for(let i = 0; i < testDates.length; i++) {
    // Upcoming event must be after today
    if(testDates[i].date > today) {
        // If closestEvent is undefined, set it to the current event
        if(typeof closestEventDate == 'undefined') {
            closestEventDate = testDates[i].date;
            closestEventNumber = testDates[i].number;
        } else if(testDates[i].date < closestEventDate) {
            // If closestEvent is defined, check if the current event is closer than the previous closest event

            // If it is, set closestEvent to the current event
            closestEventDate = testDates[i].date;
            closestEventNumber = testDates[i].number;
        }
    }
  }

  const closestTest: TestDate = {
      date: closestEventDate,
      number: closestEventNumber,
  };

  return(closestTest);
}

export default function Countdown(): JSX.Element {
    const closestPumaPrideTest: TestDate = closestEventDate(PumaPrideTestDates);
    const closestConcertChoirTest: TestDate = closestEventDate(ConcertChoirTestDates);
    const closestPhoenixFireTest: TestDate = closestEventDate(PhoenixFireTestDates);

    const daysUntilPumaPrideTest = Math.ceil((closestPumaPrideTest.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const daysUntilConcertChoirTest = Math.ceil((closestConcertChoirTest.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const daysUntilPhoenixFireTest = Math.ceil((closestPhoenixFireTest.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    const buttonLink = "https://theorybear.org/docs/introduction";

    let bearMessage = "Hello!";
    let buttonMessage = "Brush up on some skills";

    if(daysUntilPumaPrideTest == daysUntilConcertChoirTest && daysUntilPumaPrideTest == daysUntilPhoenixFireTest) {
        bearMessage += ` You have a music theory test in ${daysUntilPumaPrideTest} day`;

        if(daysUntilPumaPrideTest > 1 || daysUntilPumaPrideTest == 0) {
          bearMessage += "s";
        }

        bearMessage += "!";
    } else {
        bearMessage += ` Puma Pride: Your music theory test ${closestConcertChoirTest.number} is in ${daysUntilPumaPrideTest} day`;

        if(daysUntilPumaPrideTest > 1 || daysUntilPumaPrideTest == 0) {
            bearMessage += "s";
        }

        bearMessage += "!";

        bearMessage += ` Concert Choir: Your music theory test ${closestConcertChoirTest.number} is in ${daysUntilConcertChoirTest} day`;
        
        if(daysUntilConcertChoirTest > 1 || daysUntilConcertChoirTest == 0) {
            bearMessage += "s";
        }

        bearMessage += "!";

        bearMessage += ` Phoenix Fire: Your music theory test ${closestPhoenixFireTest.number} is in ${daysUntilPhoenixFireTest} day`;
        
        if(daysUntilConcertChoirTest > 1 || daysUntilConcertChoirTest == 0) {
            bearMessage += "s";
        }

        bearMessage += "!";

        buttonMessage = "Let's get studying!";
    }

  return (
    <section className={styles.countdown}>
    
    <div className="container">
        <div className="row">
            <div className="col">
                <img src="/img/logo.svg" alt="Countdown" height="100"/>
            </div>
            <div className="col">
                <p className={styles.typedOut}>{bearMessage.toString()}</p>
                <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={buttonLink}>
            {buttonMessage.toString()}
          </Link>
        </div>
            </div>
        </div>
        
    </div>
    </section>
  );
}
