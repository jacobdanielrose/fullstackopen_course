import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


const StatisticLine = ({ text, value, percentage }) => {
  if (percentage) {
    return (
      <>
        <p>{text} {value} %</p>
      </>
    )
  }
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

const Statistics = (props) => {
  const {
    goodValue,
    neutralValue,
    badValue
  } = props

  if (!(goodValue || neutralValue || badValue)) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h2>
        statistics
      </h2>
      <div>
        <StatisticLine text="good" value={goodValue} />
        <StatisticLine text="neutral" value={neutralValue} />
        <StatisticLine text="bad" value={badValue} />
        <StatisticLine text="all" value={goodValue + neutralValue + badValue} />
        <StatisticLine text="average" value={(goodValue * 1 + neutralValue * 0 + badValue * (-1)) / 3} />
        <StatisticLine text="positive" value={goodValue / (goodValue + neutralValue + badValue) * 100} percentage />
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
