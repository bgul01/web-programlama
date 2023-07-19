import React from 'react' ; 

import { useState } from 'react';

type UserType ={

  name:string;
    email : string;
    phone: string;


}

function LoginCheck() {
  const [user, setUser] = useState<UserType | null>({} as UserType); // null yerine boş olursa hata alır o yüzden  as usertype yadık

 const handleLogin = () => {
  setUser ({
    name:'can',
    email : 'cc@hotmail.com',
    phone: '5555555 '
  })

 }

 const handleOut = () => {

  setUser ({}as UserType);
  
 }





  return (
    <div>

      <button onClick={handleLogin}>giriş yap</button>
      <button onClick={handleOut}>çıkış yap</button>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
        
      </div>
    </div>
  )
}

export default LoginCheck