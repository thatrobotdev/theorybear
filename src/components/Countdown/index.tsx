import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type musicTheoryBook = 1 | 2 | 3;
type musicTheoryUnit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;

type CountdownEvent = {
  book: musicTheoryBook;
  unit: musicTheoryUnit;
  date: Date;
};

const CountdownList: CountdownEvent[] = [
  {
    book: 1,
    unit: 1,
    date: new Date('2023-10-06'),
  }
];

export default function Countdown(): JSX.Element {
    const today = new Date();
    let closestEventDate: Date;
    let closestEventBook: musicTheoryBook;
    let closestEventUnit: musicTheoryUnit;

    for(let i = 0; i < CountdownList.length; i++) {
        // Upcoming event must be after today
        if(CountdownList[i].date > today) {
            // If closestEvent is undefined, set it to the current event
            if(typeof closestEventDate == 'undefined') {
                closestEventDate = CountdownList[i].date;
                closestEventBook = CountdownList[i].book;
                closestEventUnit = CountdownList[i].unit;
            } else if(CountdownList[i].date < closestEventDate) {
                // If closestEvent is defined, check if the current event is closer than the previous closest event

                // If it is, set closestEvent to the current event
                closestEventDate = CountdownList[i].date;
                closestEventBook = CountdownList[i].book;
                closestEventUnit = CountdownList[i].unit;
            }
        }
    }

    let bearMessage = "There are no upcoming music theory tests for Concert Choir. Yay!";
    let buttonMessage = "Brush up on some skills";
    let buttonLink = "https://theorybear.org/docs/introduction";

    if(typeof closestEventDate !== 'undefined' || typeof closestEventBook !== 'undefined' || typeof closestEventUnit !== 'undefined') {
      const daysUntilMusicTheoryTest = Math.ceil((closestEventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        bearMessage = `Concert Choir: Your book ${closestEventBook} unit ${closestEventUnit} music theory test is in ${daysUntilMusicTheoryTest} day`;

        if(daysUntilMusicTheoryTest > 1 || daysUntilMusicTheoryTest == 0) {
            bearMessage += "s";
        }

        bearMessage += "!";

        buttonMessage = "Let's get studying!";
        buttonLink = "/docs/category/concert-choir";
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
