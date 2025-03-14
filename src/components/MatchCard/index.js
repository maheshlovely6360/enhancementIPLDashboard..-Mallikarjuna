import './index.css'
// import PieChart from "./components/PieChart"

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails
  const classAdd = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="recent-item">
      <img
        src={competingTeamLogo}
        className="recent-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${classAdd}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
