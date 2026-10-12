import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h2>홈</h2>
            <p>여기는 홈입니다</p>
            <p>
                <Link to='/hello/react'>동적 라우터의 예시</Link>
            </p>
        </div>
    )
}

// 두가지 방법이 있음 맨 밑에 작성하는 법과 컴포넌트 앞에 작성하는 법
export default Home;