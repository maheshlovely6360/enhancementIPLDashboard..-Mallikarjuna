import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamItem} = props
  const {name, teamImageUrl, id} = teamItem
  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img className="image-url" src={teamImageUrl} alt={`${name}`} />
        <div>
          <p className="card-heading">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
