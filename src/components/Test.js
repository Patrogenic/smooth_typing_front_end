import TypingTestContainer from './TypingTestContainer';

const Test = () => {
  const texts = [
    "A gear is a rotating circular machine part having cut teeth or, in the case of a cogwheel or gearwheel, inserted teeth (called cogs), which mesh with another (compatible) toothed part to transmit (convert) torque and speed. The basic principle behind the operation of gears is analogous to the basic principle of levers. A gear may also be known informally as a cog.",
    "New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States.",
    "San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California. Located in Northern California, San Francisco is the 17th most populous city in the United States, and the fourth most populous in California.",
    "Baseball is a bat-and-ball game played between two opposing teams, typically of nine players each, that take turns batting and fielding. The game proceeds when a player on the fielding team, called the pitcher, throws a ball which a player on the batting team tries to hit with a bat.",
    "Hip hop or hip-hop is a culture and art movement that was created by African Americans, Latino Americans and Caribbean Americans in the Bronx, New York City. The origin of the name is often disputed. It is also argued as to whether hip hop started in the South or West Bronx.",
  ];
  const rndNum = Math.floor(Math.random() * texts.length);

  return(
    <div>
      <TypingTestContainer type="test" text={texts[rndNum]}/>
    </div>
  )
}

export default Test;