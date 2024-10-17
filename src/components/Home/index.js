import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamList: [],
    isTrue: true,
  }

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    console.log(data)
    const newList = teams.map(eachData => ({
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
      id: eachData.id,
    }))
    this.setState({teamList: newList, isTrue: false})
  }

  render() {
    const {teamList, isTrue} = this.state
    return (
      <>
        <div className="main-cont">
          {isTrue && (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          )}
          {!isTrue && (
            <>
              <div className="logo-main">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  className="ipl-logo"
                  alt="ipl logo"
                />
                <h1 className="logo-name">IPL Dashboard</h1>
              </div>
              <ul className="dash-list">
                {teamList.map(eachValue => (
                  <TeamCard key={eachValue.id} teamItem={eachValue} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}

export default Home
