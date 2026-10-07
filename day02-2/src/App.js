import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let mode = 'WELCOME'
  let [mode, setMode] = useState("WELCOME")
  let [id, setId] = useState(null)
  
  let content = null

  let m_topics = [
    { id: 1, title: 'html', body: 'my html' },
    { id: 2, title: 'css', body: 'your css' },
    { id: 3, title: 'java script', body: 'our js' }
  ]

  if (mode === 'WELCOME') {
    content = <Article title='Welcome상태'
      body='STATE WELCOME' />
  } else if (mode === 'READ') {

    let title, body
    for( let i = 0; i < m_topics.length; i++ ){
      if( m_topics[i].id === id ){
        title = m_topics[i].title;
        body = m_topics[i].body;
      }
    }

    content = <Article title={title}
      body={body} />
  }

  return (
    <div>

      <Header title='React'
        onChangeMode={() => { setMode('WELCOME') }} />

      <Nav topics={m_topics}
        onChangeMode={(id) => { setMode('READ'); setId(id) }} />

      <Article title='Welcome' body='hello, web' />

      {content}

    </div>
  );
}

function Header(props) {
  return (
    <header>
      <h1>
        <a href='/'
          onClick={(event) => {
            event.preventDefault()
            props.onChangeMode()
          }}>
          {props.title}
        </a>
      </h1>
    </header>
  )
}

function Nav(props) {

  let lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]

    lis.push(<li>
      <a id={t.id} href={'/read/' + t.id} onClick={(event) => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id))
      }}>
        {t.title} / {t.body}
      </a>
    </li>);
  }


  return (
    <nav>
      <ul>
        {lis}
      </ul>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

export default App;
