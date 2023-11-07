import './index.css'
import {Component} from 'react'

class SpecificDetails extends Component {
  state = {specificObject: {}, ownerDetails: {}}

  componentDidMount() {
    this.getSpecificDetails()
  }

  getSpecificDetails = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    console.log(params)
    const {title, repo} = params
    const apiUrl = `https://api.github.com/repos/${title}/${repo}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: 'token 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',
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = {
        forks: data.forks,
        title: data.name,
        description: data.description,
      }

      const ownerData = {
        ownerImageUrl: data.owner.avatar_url,
      }
      console.log(ownerData)
      this.setState({specificObject: updatedData, ownerDetails: ownerData})
    } else {
      console.log('Error Occured')
    }
  }

  render() {
    const {specificObject, ownerDetails} = this.state
    const {forks, title, description} = specificObject
    const {ownerImageUrl} = ownerDetails
    console.log(ownerImageUrl)
    return (
      <div className="specificContainer">
        <img src={ownerImageUrl} alt="itemDetails" className="specificImage" />
        <h1 className="specificHead">{title}</h1>
        <p className="specificText">{description}</p>
        <div className="itemContainer">
          <p className="forks">forks: {forks}</p>
        </div>
      </div>
    )
  }
}

export default SpecificDetails
