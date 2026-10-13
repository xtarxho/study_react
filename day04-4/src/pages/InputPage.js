import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function InputPage(props){

    const [genre, setGenre] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [platform, setPlatform] = useState('')
    const navi = useNavigate()

    const addItem = (index) => {

        if(title.trim()){
            props.setList([...props.list, {genre, title, date, platform}])
            
            setGenre('')
            setTitle('')
            setDate('')
            setPlatform('')

            navi('/list')

        }

    }

    return(
        <div className="container">
            <div className="nav">
                <Link to='/'>
                    <input type="button" value='등록'/>
                </Link>
                <Link to='/list'>
                    <input type="button" value='리스트'/>
                </Link>
            </div>

            <h1>게임 등록</h1>
            <div className="form-box">
                <div className="form-group">
                    <label>장르</label>
                    <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
                        <option value=''>선택</option>
                        <option value='action'>액션</option>
                        <option value='RPG'>RPG</option>
                        <option value='FPS'>FPS</option>
                    </select>

                </div>

                <div className="form-group">
                    <label>제목</label>
                    <input value={title} onChange={(e)=> {setTitle(e.target.value)}}/>

                </div>

                <div className="form-group">
                    <label>출시일</label>
                    <input type="date" value={date} onChange={(e)=> {setDate(e.target.value)}}/>

                </div>
                
                <div className="form-group">
                    <label>플랫폼</label>
                    <input value={platform} onChange={(e)=> {setPlatform(e.target.value)}}/>

                </div>

                <input className="add-btn" type="button" value='추가' onClick={addItem}/>

            </div>
        </div>
    )
}

export default InputPage;