import React from "react";

function Signupvali(values){

    if(values.name == ''){
        alert("이름을 입력하세요");
        return false;
    }
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

export default Signupvali