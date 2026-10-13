import React from "react";

function UserList({users}){
    return(
        <div>
            {
                users.map((u)=>(
                    <div>
                        {u.name}
                    </div>
                ))
            }
        </div>
    )
        
    


}

export default UserList