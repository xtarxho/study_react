import React, { useState } from "react";

function MovieForm({ addMovie }) {

    const [movieTitle, setMovieTitle] = useState('')
    const [movieYear, setMovieYear] = useState('')
    const [titleError, setTitleError] = useState('')
    const [yearError, setYearError] = useState('')

    const resetErrors = () => {
        setTitleError('')
        setYearError('')
    }

    const resetForm = () => {
        setMovieTitle('')
        setMovieYear('')
    }

    //영화등록
    const onSubmit = (event) => {

        event.preventDefault()
        // alert(movieTitle + "/" + movieYear)

        if (validateForm()) {
            addMovie({
                //1970년 1월1일부터 현재까지 경과한 시간을 1/1000초 단위로 가져온다
                id: Date.now(),
                title: movieTitle,
                year: movieYear
            })
            resetErrors()
        }

        resetForm()

    }

    //입력값에 문제가 없는지 검증
    const validateForm = () => {
        resetErrors()
        let validate = true;

        if (!movieTitle.trim()) {
            setTitleError("영화제목을 입력하세요")
            validate = false;
        }

        if (!movieYear.trim()) {
            setYearError("개봉년도을 입력하세요")
            validate = false;
        }

        return validate

    }

    return (
        <form onSubmit={onSubmit}>
            <input placeholder='영화제목' value={movieTitle} onChange={(e) => { setMovieTitle(e.target.value) }} />

            <div style={{ color: 'red' }}>{titleError}</div>

            <input type="number" placeholder='개봉년도' value={movieYear} onChange={(e) => { setMovieYear(e.target.value) }} />

            <div style={{ color: 'red' }}>{yearError}</div>

            <button type='submit'>영화추가</button>
        </form>
    )
}

export default MovieForm