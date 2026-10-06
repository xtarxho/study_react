import logo from './logo.svg';
import './App.css';

function App() {

  let mydata = [
    {id:1, title:'html', body:'my html'},
    {id:2, title:'css', body:'your css'},
    {id:3, title:'java script', body:'our js' }
  ]

  return (
    <div>

      <Nav mdata={mydata}/>

      <hr/>

      <div>
        <h1>부모 component</h1>
        <Child title='자식 component' name="hong"/>
      </div>

    </div>
  );
}

function Child(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <p>{props.name}</p>
    </div>
  )
}

function Nav(props) {

  let lis = []
  for(let i = 0; i < props.mdata.length; i++){
      let t = props.mdata[i]

      //배열에 값 담기
      lis.push(<li><a href={'/read/' + t.id}> {t.title} / {t.body}</a></li>);
  }


  return (
    <div>
      <ul>
        {lis}
      </ul>
    </div>
  )
}

export default App;
