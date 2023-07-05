import './index.css'

const PasswordItem = props => {
  const {eachObj, isChecked, deleteList} = props
  const {id, url, username, password} = eachObj
  const deleteButtonClicked = () => {
    deleteList(id)
  }
  return (
    <li className="list-item">
      <div className="profile-photo">
        <p>{url[0].toUpperCase()}</p>
      </div>

      <div className="data-cont">
        <p>{url}</p>
        <p>{username}</p>
        {isChecked ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
      </div>

      <button
        className="delete-btn"
        type="button"
        data-testid="delete"
        onClick={deleteButtonClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
