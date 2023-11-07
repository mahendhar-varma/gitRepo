import './index.css'
import {Link} from 'react-router-dom'

const RepoItem = props => {
  const {data} = props
  const {title, owner, description, forks, published} = data
  const {avatarUrl, login} = owner

  return (
    <li className="list-item">
      <Link to={`/details/${login}/${title}`} className="link">
        <div className="itemContainer">
          <img src={avatarUrl} alt="Repo" className="avatar" />
          <div>
            <h1 className="head">{title}</h1>
            <p className="text">{description}</p>
            <div className="itemContainer">
              <p className="forks">forks: {forks}</p>
              <p className="forks">
                {published} by {title}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default RepoItem
