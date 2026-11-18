import { useState } from 'react'

const Statistics = (props) => {
  if (props.statistics[0] + props.statistics[1] + props.statistics[2] == 0) {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <p>
          good {props.statistics[0]}
        </p>
        <p>
          neutral {props.statistics[1]}
        </p>
        <p>
          bad {props.statistics[2]}
        </p>
        <p>
          all {props.statistics[0] + props.statistics[1] + props.statistics[2]}
        </p>
        <p>
          average {(props.statistics[0] - props.statistics[2]) / (props.statistics[0] + props.statistics[1] + props.statistics[2])}
        </p>
        <p>
          positive {props.statistics[0] / (props.statistics[0] + props.statistics[1] + props.statistics[2]) * 100}%
        </p>
      </div>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const statistics = [good, neutral, bad]

  return (
    <div>
      <h1>
        Give feedback
      </h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h1>
        Statistics
      </h1>
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App