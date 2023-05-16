import React  from 'react';
import { useEffect , useState} from 'react';
import { useNavigate } from 'react-router';


function Protected(props) {
  const {Component} = props;
  const navigate = useNavigate();
  const [logedIn, setLogedIn] = useState(false)
  useEffect(() => {
      const checkUser = ()=>{
        if(props.user){
          setLogedIn(true);
        }else{
          navigate(-1);
        }
      }
      checkUser();
  })
  
  return (
    <>
      {logedIn ? <Component /> : null}
    </>
  )
}

export default Protected;