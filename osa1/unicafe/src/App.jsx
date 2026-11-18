import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <header>
        Give feedback
      </header>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <header>
        Statistics
      </header>
      <div>
        <p>
          good {good}
        </p>
      </div>
      <div>
        <p>
          neutral {neutral}
        </p>
      </div>
      <div>
        <p>
          bad {bad}
        </p>
      </div>
    </div>
  )
}

export default App