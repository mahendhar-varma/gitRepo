import {Component} from 'react'
import RepoItem from '../RepoItem/index'
import './index.css'

class Home extends Component {
  state = {repositoryList: []}

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    const apiUrl =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'

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
      const updatedData = data.items.map(item => ({
        forks: item.forks,
        owner: {
          avatarUrl: item.owner.avatar_url,
          id: item.owner.id,
          login: item.owner.login,
        },
        title: item.name,
        description: item.description,
        published: item.pushed_at,
      }))
      this.setState({repositoryList: updatedData})
    } else {
      console.log('Error occured')
    }
  }

  render() {
    const {repositoryList} = this.state

    return (
      <div className="container">
        <h1 className="title">Most starred Repos </h1>
        <ul className="listContainer">
          {repositoryList.map(item => (
            <RepoItem data={item} key={item.owner.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
