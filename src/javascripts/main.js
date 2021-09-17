// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bulma/css/bulma.css'
import React from 'react'
import ReactDOM from 'react-dom'

import { webprojects } from './webprojects'

class Main extends React.Component {
  render() {
    return <Wprojects webprojects={webprojects} />
  }
}

class Wprojects extends React.Component {
  constructor(props) {
    super(props)
    this.state = { webprojects }
    //So I'm thinking this.state with the bracket is suppose to make this array of objects changeable?
    this.sortTitle = this.sortTitle.bind(this)
    this.sortLead = this.sortLead.bind(this)
    this.sortType = this.sortType.bind(this)
    this.sortStatus = this.sortStatus.bind(this)
    //binding is require for function to work and be defined.
  }
  sortTitle() {
    this.state.webprojects.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
    this.setState({
      webprojects: this.state.webprojects
    })
    //It's like adding components, but not like changing it... I'm so confused?
    //I think state was suppost to change it? maybe I have a bug?
  }

  sortLead() {
    this.state.webprojects.sort((a, b) => {
      return a.lead.localeCompare(b.lead)
    })
    this.setState({
      webprojects: this.state.webprojects
    })
  }

  sortType() {
    this.state.webprojects.sort((a, b) => {
      return a.type.localeCompare(b.type)
    })
    this.setState({
      webprojects: this.state.webprojects
    })
  }

  sortStatus() {
    this.state.webprojects.sort((a, b) => {
      return a.status.localeCompare(b.status)
    })
    this.setState({
      webprojects: this.state.webprojects
    })
  }
  //This render() makes sense to me...
  render() {
    return (
      <div className="container">
        <div class="columns m-5">
          <header>
            <h1 class="title is-1">Web Project List</h1>
          </header>
          <nav class="column">
            <button className="button is-success mr-2" onClick={this.sortTitle}>Sort by Title</button>
            <button className="button is-success mr-2" onClick={this.sortLead}>Sort by Lead</button>
            <button className="button is-success mr-2" onClick={this.sortType}>Sort by Type</button>
            <button className="button is-success mr-2" onClick={this.sortStatus}>Sort by Status</button>
          </nav>
        </div>
        <main class="columns is-flex-wrap-wrap">
          {this.state.webprojects.map(m => {
            return <DisplayProjects key={m.id} project={m} />
          })}
        </main>
      </div>
    )
  }
}

//This make sense... I understand how this is displayed via map and such.

function DisplayProjects(props) {
  const m = props.project
  return (
    <div class="column">
      <div class="card p-2 m-5">
        <div class="columns ">
          <div class="column ">
            <h2 class="title">{m.title}</h2>
            <p class="subtitle">By {m.lead}</p>
            <p class="">Description: {m.description}</p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p>Type:
              <select>
                <option value="">{m.type}</option>
                <option value="">front-end</option>
                <option value="">full-stack</option>
                <option value="">static</option>
              </select>
            </p>

            <p>Status:
              <select>
                <option value="">{m.status}</option>
                <option value="">not started</option>
                <option value="">in progress</option>
                <option value="">finish</option>
                <option value="">cancelled</option>
              </select>
            </p>
            <p>Proguess: {m.proguess}%
              <progress class="progress" value={m.proguess} max="100"></progress></p>
            <p>favorite: {m.favorite}</p>
          </div>
          <div class="column">
            <p>Priority Level: {m.priority}</p>
            <p>Start Date:<span>{m.beginDate}</span></p>
            <p>End Date:<span>{m.endDate}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById('main'))