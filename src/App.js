import './App.css';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;

    this.state = {
      mode: 'read',
      selected_content_id: 3,
      subject: { title: 'WEB', sub: 'World Wide Web' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for informaion' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    }
  }
  render() {
    console.log('app render');

    let _title, _desc, _article = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} sub={_desc} />
    } else if (this.state.mode === 'read') {
      let i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} sub={_desc} />
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={(_title, _desc) => {
        this.max_content_id = this.max_content_id + 1;

        let _contents = this.state.contents.concat(
          { id: this.max_content_id, title: _title, desc: _desc }
        )

        // this.state.contents.push(
        //   { id: this.max_content_id, title: _title, desc: _desc }
        // );

        this.setState({
          contents: _contents
        })
      }} />
    } else if (this.state.mod === 'update') {
      _article = <UpdateContent onSubmit={(_title, _desc) => {
      }} />
    }
    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        ></Subject>

        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState(
              {
                mode: 'read',
                selected_content_id: Number(id)
              }
            )

          }.bind(this)}
        />

        <Control
          onChangeMode={(e) => {
            this.setState({
              mode: e
            })
          }}
        >

        </Control>
        {_article}
      </div>
    )
  }
}

export default App;
