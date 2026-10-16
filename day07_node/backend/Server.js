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
    host: "react-mysql-database.czyckmc4w3q6.ap-northeast-2.rds.amazonaws.com",
    user: "myuser",
    password: '12345678',
    database: 'mydb'
})

db.connect((err)=> {
    if(err){
        console.log("DB연결 실패")
    }else{
        console.log("DB연결 성공")
    }
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
                name:data[0].name,
                email:data[0].email
            });
        }else{
            return res.json("fail");
        }
    })

})

//탈퇴 요청
app.post("/withdraw", (req,res)=>{
    const sql = 'delete from login where `email`=?';

    const values = [
        req.body.email
    ]

    db.query(sql, values, (err, data)=>{
        //delete쿼리를 수행한 후 완료된 행수를 반환
        if(data.affectedRows > 0){
            return res.json("success"); //탈퇴 성공
        }else{
            return res.json("fail") //탈퇴 실패
        }
    })

})

//aws 서버측에서 사용할 경로
const path = require("path");

app.use( express.static( path.join(__dirname, "build") ) );

app.get('*', ( req, res )=>{
    res.sendFile( path.join(__dirname, "build", "index.html") );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("연결중...")
})

