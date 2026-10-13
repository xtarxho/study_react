import React from "react";
import { Link } from "react-router-dom";

function ListPage(props){

    const delItem = (index) => {
        const newList = props.list.filter((_, i) => i !== index)
        props.setList(newList)
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

            <h1>게임 목록</h1>
            <div className="form-box">
                <table border='1'>

                    <thead>
                        <tr>
                            <th width='15%'>장르</th>
                            <th>제목</th>
                            <th width='20%'>출시일</th>
                            <th width='15%'>플랫폼</th>
                            <th width='10%'>비고</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            props.list.map((t,index)=>(
                                <tr>
                                    <td>{t.genre}</td>
                                    <td>{t.title}</td>
                                    <td>{t.date}</td>
                                    <td>{t.platform}</td>
                                    <td>
                                        <input type="button" value='삭제' className="delete-btn" onClick={()=>{delItem(index)}}/>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

                {/* 데이터가 없을 때 */}
                {
                    props.list.length === 0 && (
                        <p>등록된 게임이 없습니다</p>
                    )
                }

            </div>

        </div>
    )
}

export default ListPage;