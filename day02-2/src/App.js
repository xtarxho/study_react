import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let mode = 'WELCOME'
  let [mode, setMode] = useState("WELCOME")
  let [id, setId] = useState(null)

  let [nextid, setNextId] = useState(1)
  
  //비어있는 배열 만들기
  let [m_topics, setTopics] = useState([])

  let content = null



  if (mode === 'WELCOME') {
    content = <Article title='Welcome상태'
      body='STATE WELCOME' />
  } else if (mode === 'READ') {

    let title, body
    for (let i = 0; i < m_topics.length; i++) {
      if (m_topics[i].id === id) {
        title = m_topics[i].title;
        body = m_topics[i].body;
      }
    }

    content = <Article title={title}
      body={body} />

  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      if (title === '') {
        alert("제목을 입력하세요")
        return;
      }

      if (body === '') {
        alert("내용을 입력하세요")
        return;
      }

      let newTopic = { id:nextid, title:title, body:body }
      
      //... -> 다른 배열에게 현재 배열을 복사하라는 뜻
      // m_topics의 내용을 [...m_topics]을 통해 newTopics배열로 복사
      let newTopics = [...m_topics]

      newTopics.push(newTopic)
      setTopics(newTopics)

      setMode('READ')
      setId(nextid)
      setNextId(nextid + 1)

    }} />
  }

  return (
    <div>

      <Header title='React'
        onChangeMode={() => { setMode('WELCOME') }} />

      <Nav topics={m_topics}
        onChangeMode={(id) => { setMode('READ'); setId(id) }} />

      <Article title='Welcome' body='hello, web' />

      {content}

      <hr />

      <a href='/' onClick={(event) => {
        event.preventDefault()
        setMode('CREATE')
      }}>Create</a>

      <button onClick={
        ()=>{
          let newTopics = []

          for( let i = 0; i < m_topics.length; i++ ){

            //삭제하고 싶은 id를 제외한 나머지 요소들을 newTopics배열에 추가
            if( m_topics[i].id !== id ){
              newTopics.push(m_topics[i])
            }

          }

          //변경된 배열의 내용을 m_topics에 갱신
          setTopics(newTopics)

        }
      }>
        삭제
        </button>

    </div>
  );
}

function Create(props) {
  return (
    <div>
      <h2>Create(생성)</h2>

      <form onSubmit={(event) => {
        event.preventDefault() //페이지의 새로고침을 방지
        let title = event.target.title.value
        let body = event.target.body.value
        props.onCreate(title, body)
      }}>
        <p><input type='text' name='title' /></p>

        <p>
          <textarea cols='50' rows='3' name='body'></textarea>
        </p>

        <p>
          <input type='submit' value='생성' />
        </p>

      </form>

    </div>
  )
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
