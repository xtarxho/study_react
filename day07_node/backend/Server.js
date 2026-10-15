//Express모듈
//URL에 따른 요청이나 응답등을 간단하게 작성할 수 있도록 도와주는 모듈
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

//express모듈의 초기화
const app = express();
app.use(cors());
app.use(express.json());

//DB연결정보 등록
const db = mysql.createConnection({
    host: "localhost",
    user: "myuser",
    password: '1111',
    database: 'mydb'
})

//DB연결 및 쿼리문 요청

//회원가입을 위한 커리문
app.post("/signup", (req, res) => {
    const sql = "insert into login (`name`, `email`, `password`) values(?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

//로그인을 요청
app.post("/login", (req, res) => {

    const sql = "select * from login where `email`=? and `password`=?";

    const values = [
        req.body.email,
        req.body.password
    ]

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json({
                result:"success",
                name:data[0].name
            });
        }else{
            return res.json("fail");
        }
    })

})

app.listen(3000, () => {
    console.log("연결중...")
})

