import memorySvg from "./assets/images/icon-memory.svg"
import reactionSvg from "./assets/images/icon-reaction.svg"
import verbalSvg from "./assets/images/icon-verbal.svg"
import visualSvg from "./assets/images/icon-visual.svg"
import "./SummaryCard.css"

export const SummaryCard = () => {
  return (
    <div className='summary-card-wrapper'>
      <div className='summary-card'>
        <div className='summary-card-meter'>
          <p>Your result</p>
          <div className='summary-card-meter-circle'>
            <p>76</p>
            <p>of 100</p>
          </div>
          <p>Great</p>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div>
          <h3>Summary</h3>
          <div>
            <img alt='' src={reactionSvg} />
            <p>Reaction</p>
            <p>
              <strong>80</strong> / 100
            </p>
          </div>
          <div>
            <img alt='' src={memorySvg} />
            <p>Memory</p>
            <p>
              <strong>92</strong> / 100
            </p>
          </div>
          <div>
            <img alt='' src={verbalSvg} />
            <p>Verbal</p>
            <p>
              <strong>61</strong> / 100
            </p>
          </div>
          <div>
            <img alt='' src={visualSvg} />
            <p>Visual</p>
            <p>
              <strong>72</strong> / 100
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
