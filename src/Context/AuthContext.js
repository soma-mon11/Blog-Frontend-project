
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
 
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
  
  const login = async (values1) => {
    const res = await fetch("http://localhost:8000/login", {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(values1)

    })
    const data = await res.json();
    console.log("context",data)
    localStorage.setItem('token', data.token);
    setCurrentUser(data.data[0])


  };
  const logout = async () => {
    const res = await fetch("http://localhost:8000/logout", {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      //   body: JSON.stringify(values1)

    })
    console.log(res)
    if (res.status === 200) {
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      setCurrentUser(null);
      
    }

  };
  const [comment1, setComment1] = useState([])
  const [posts, setPost]=useState([]);
  useEffect(() => {
    const token=localStorage.getItem('token')
      fetchComment(token)
      
    }, [])

  
  const fetchComment = async (token) => {

    const res = await fetch("http://localhost:8000/getcomment", {
      credentials: 'include',
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "token":token
      },
    })
    const data = await res.json();
    console.log(data)
    setComment1(data.data)
  }
   
  // useEffect(()=>{
  //   const token=localStorage.getItem("token")
  //   fetchData(token)
  // },[])

  //   const fetchData = async (token) => {
  //     try {
      

  //       const apiUrl = `http://localhost:8000/getposts`;
  //       const res = await fetch(apiUrl, {
  //         method: 'GET',
  //         headers: {
  //           'Content-type': 'application/json',
  //           'header':token
            
  //         }
  //       });

  //       const data = await res.json();
  //       console.log(data)
  //       setPost(data);
     

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  
  
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser, login, logout,comment1,posts}}>
      {children}
    </AuthContext.Provider>

  )

};



