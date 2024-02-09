import memorySvg from "./assets/images/icon-memory.svg"
import reactionSvg from "./assets/images/icon-reaction.svg"
import verbalSvg from "./assets/images/icon-verbal.svg"
import visualSvg from "./assets/images/icon-visual.svg"
import "./SummaryCard.css"

export const SummaryCard = () => {
  return (
    <>
      <div className='summary-card-wrapper'>
        <div className='summary-card'>
          <div className='summary-card-meter'>
            <p>Your result</p>
            <div className='summary-card-meter-circle'>
              <p>76</p>
              <p>of 100</p>
            </div>
            <p className='summary-card-meter-sentiment'>Great</p>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className='summary-card-score-breakdown-wrapper'>
            <h3>Summary</h3>
            <div className='summary-card-score-breakdown-row reaction'>
              <div className='summary-card-score-break-down-topic'>
                <img alt='' src={reactionSvg} />
                <p>Reaction</p>
              </div>
              <p className='summary-card-score-breakdown-row-score'>
                <span>80</span> / 100
              </p>
            </div>
            <div className='summary-card-score-breakdown-row memory'>
              <div className='summary-card-score-break-down-topic'>
                <img alt='' src={memorySvg} />
                <p>Memory</p>
              </div>
              <p className='summary-card-score-breakdown-row-score'>
                <span>92</span> / 100
              </p>
            </div>
            <div className='summary-card-score-breakdown-row verbal'>
              <div className='summary-card-score-break-down-topic'>
                <img alt='' src={verbalSvg} />
                <p>Verbal</p>
              </div>
              <p className='summary-card-score-breakdown-row-score'>
                <span>61</span> / 100
              </p>
            </div>
            <div className='summary-card-score-breakdown-row visual'>
              <div className='summary-card-score-break-down-topic'>
                <img alt='' src={visualSvg} />
                <p>Visual</p>
              </div>
              <p className='summary-card-score-breakdown-row-score'>
                <span>72</span> / 100
              </p>
            </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
      <div className='too-small-screen'>
        <p>Uh oh</p>
        <p>This page is only able to be viewed on a screen 320px or wider</p>
      </div>
    </>
  )
}
