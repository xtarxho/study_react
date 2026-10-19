import React from "react";

function LoginValidation(values){

    //로그인할 때 이메일, 비밀번호를 입력했는지 
    // 확인하는 유효성 검사 코드들이다
    if(values.email == ''){
        alert("이메일을 입력하세요");
        return false;
    }

    if(values.password == ''){
        alert("비밀번호를 입력하세요");
        return false;
    }
    return true;
}

export default LoginValidation