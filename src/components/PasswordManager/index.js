import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordObjList: [],
    url: '',
    username: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  updateUrl = event => {
    this.setState({
      url: event.target.value,
    })
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  updatePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  addAPasswordList = event => {
    event.preventDefault()
    const {url, username, password, passwordObjList} = this.state
    const newObj = {
      id: uuidv4(),
      url,
      username,
      password,
    }
    this.setState({
      passwordObjList: [...passwordObjList, newObj],
      url: '',
      username: '',
      password: '',
    })
  }

  toggleIsChecked = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  deleteList = id => {
    console.log('hi')
    const {passwordObjList} = this.state
    const updatedList = passwordObjList.filter(eachObj => eachObj.id !== id)
    this.setState({
      passwordObjList: updatedList,
    })
  }

  sortElements = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {
      passwordObjList,
      isChecked,
      url,
      username,
      password,
      searchInput,
    } = this.state
    const sortedList = passwordObjList.filter(eachObj => {
      const lowerUrl = eachObj.url.toLowerCase()
      const lowerSearchInput = searchInput.toLowerCase()
      return lowerUrl.includes(lowerSearchInput)
    })
    let a
    if (sortedList.length === 0) {
      a = (
        <div className="empty-displayer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="empty-image"
          />
          <p>No Passwords</p>
        </div>
      )
    } else {
      a = ''
    }

    return (
      <div className="bg-cont">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
        </div>
        <div className="top-card">
          <form className="input-card">
            <h1 className="sub-heading">Add New Password</h1>
            <div className="total-input-cont">
              <div className="input-icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="logo-sub-image"
                />
              </div>
              <div className="input-cont">
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Website"
                  onChange={this.updateUrl}
                  value={url}
                />
              </div>
            </div>

            <div className="total-input-cont">
              <div className="input-icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="logo-sub-image"
                />
              </div>
              <div className="input-cont">
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Username"
                  onChange={this.updateUsername}
                  value={username}
                />
              </div>
            </div>

            <div className="total-input-cont">
              <div className="input-icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="logo-sub-image"
                />
              </div>
              <div className="input-cont">
                <input
                  type="password"
                  className="input-element"
                  placeholder="Enter Password"
                  onChange={this.updatePassword}
                  value={password}
                />
              </div>
            </div>
            <div className="btn-cont">
              <button
                className="add-btn"
                type="button"
                onClick={this.addAPasswordList}
              >
                Add
              </button>
            </div>
          </form>

          <div className="image-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="side-image"
            />
          </div>
        </div>

        <div className="bottom-card">
          <div className="header">
            <div className="text-cont">
              <h1 className="password-text">Your Passwords</h1>
              <div className="password-count">
                <p>{passwordObjList.length}</p>
              </div>
            </div>

            <div className="total-input-cont">
              <div className="input-icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="logo-sub-image"
                />
              </div>

              <div className="input-cont">
                <input
                  type="search"
                  className="input-element"
                  placeholder="Search"
                  onChange={this.sortElements}
                />
              </div>
            </div>
          </div>

          <div className="checkbox-cont">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              onChange={this.toggleIsChecked}
            />
            <label htmlFor="checkbox" className="label-text">
              Show passwords
            </label>
          </div>
          <ul className="list-cont">
            {sortedList.map(eachObj => (
              <PasswordItem
                eachObj={eachObj}
                isChecked={isChecked}
                deleteList={this.deleteList}
                key={eachObj.id}
              />
            ))}
            {a}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
