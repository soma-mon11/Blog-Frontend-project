import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link, Navigate } from "react-router-dom";
import ProtectedRouteModel from "./ProtectedRouteModel";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color:'red'
  };

const ProtectedRoute=({children,accessBy})=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    //   const handleClose = () => setOpen(false);  
    const{currentUser}=useContext(AuthContext)
    if(accessBy==="non-auth"){
        if(!currentUser){
            return children;
        }
        else{
            return <Modal
            open={handleOpen}
           //  onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
               <h1>Please Logout</h1>
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
               <Button><Link to='/'>Back</Link></Button>
               
              </Typography>
             
            </Box>
          </Modal>
        }

    }
    else if(accessBy==="auth"){
        if(currentUser){
            return children;
        }
        else{
         return  <Modal
         open={handleOpen}
        //  onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1>Please Login</h1>
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
            <Button><Link to='/'>Back</Link></Button>
           </Typography>
          
         </Box>
       </Modal>
        
    }
}
    return <Navigate to='/'></Navigate>
}
export default ProtectedRoute