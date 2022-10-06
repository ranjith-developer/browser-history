import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
// const App = () => <div>Hello World</div>

class App extends Component {
  state = {
    historyList: initialHistoryList,
    searchInput: '',
  }

  onSearch = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  getFilteredHistoryList = () => {
    const {historyList, searchInput} = this.state
    console.log(searchInput)
    const filteredHistoryList = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )
    return filteredHistoryList
  }

  onDelete = id => {
    //  const {historyList} = this.state
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(each => each.id !== id),
    }))
  }

  render() {
    const listToDisplay = this.getFilteredHistoryList()

    console.log(listToDisplay)
    return (
      <div className="page">
        <nav className="nav-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-logo-input-container-container">
            <img
              className="search-image"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search history"
              onChange={this.onSearch}
            />
          </div>
        </nav>
        {listToDisplay.length === 0 ? (
          <div className="no-history-container">
            <p>There is no history to show</p>
          </div>
        ) : (
          <ul className="browser-history-list-container">
            {listToDisplay.map(each => {
              const onDeleteClicked = () => {
                this.onDelete(each.id)
              }
              return (
                <li className="each-history-container" key={each.id}>
                  <p className="history-item-time">{each.timeAccessed}</p>
                  <div className="history-item-logo-container">
                    <img src={each.logoUrl} alt="domain logo" />
                  </div>
                  <div className="history-content-delete-container">
                    <div className="history-title-url-container">
                      <p className="history-title">{each.title}</p>
                      <p className="history-url">{each.domainUrl}</p>
                    </div>
                    <button
                      className="delete-button"
                      type="button"
                      onClick={onDeleteClicked}
                      testid="delete"
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                      />
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}

export default App