import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  const {
    goodValue,
    neutralValue,
    badValue
  } = props

  return (
    <>
      <h2>
        statistics
      </h2>
      <div>
        <p>good {goodValue}</p>
        <p>neutral {neutralValue}</p>
        <p>bad {badValue}</p>
        <p>all {goodValue + neutralValue + badValue}</p>
        <p>average {(goodValue * 1 + neutralValue * 0 + badValue * (-1)) / 3}</p>
        <p>positive {goodValue / (goodValue + neutralValue + badValue) * 100} %</p>
      </div>
    </>
  )
}

function App() {
  const [goodValue, setGoodValue] = useState(0)
  const [badValue, setBadValue] = useState(0)
  const [neutralValue, setNeutralValue] = useState(0)

  return (
    <>
      <h2>
        give feedback
      </h2>
      <div>
        <Button text={'good'} handleClick={() => setGoodValue(goodValue + 1)} />
        <Button text={'neutral'} handleClick={() => setNeutralValue(neutralValue + 1)} />
        <Button text={'bad'} handleClick={() => setBadValue(badValue + 1)} />
      </div>
      <Statistics
        goodValue={goodValue}
        neutralValue={neutralValue}
        badValue={badValue}
      />
    </>
  );
}

export default App;
