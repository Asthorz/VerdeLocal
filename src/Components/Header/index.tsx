import React,{useState} from 'react'
import './css/styles.css'
import { Link } from "react-router-dom";
import Logomarca from '../../assets/imagem/2-removebg-preview.png'
import { BtnFinalmenu, Containerfluido, Frasemenu, Headerdash, Iconsheader, Logomarcaimg, Logonome, Minhaacc, Notifioper, Userinfo, Usernotifi } from "./styles";
import Button from '@mui/material/Button';
import { CiMenuFries } from "react-icons/ci";
import Pesquisa from "../PesquisaBox";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import Perfil from '../../assets/imagem/perfil.png'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { salesData } from './css/EventListNotificao/EventListUser'
export default function Headerdashboard() {
  const [anchorEl, setAnchorEl] = useState <null | HTMLElement>(null);;
  const [Notificao, setNotificao] = useState <null | HTMLElement>(null);;
  const open = Boolean(anchorEl);
  const openNotifi = Boolean(Notificao);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const handleClicktruNotificao=(event)=>{
  setNotificao(event.currentTarget);

}
const handleCloseNotificao=(event)=>{
  setNotificao(null);

}



  return (
    <div>
         <Headerdash>
             <Containerfluido>
                    <div className="linha w-100">
                        {/*Logo Marca */}
                        <div className="Links-logo">
                           <Link to={'/'} className="Link">    
                           <Logomarcaimg src={Logomarca} className="logo"/>
                           <Logonome>Verde<span className="Danger">Local</span></Logonome>
                           </Link>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center pl-4">
                                  <Button className="rounded-circle mr-3"><CiMenuFries/></Button>
                                  <Pesquisa/>
                        </div>
                        <Iconsheader className="col-sm-5 d-flex align-items-center justify-content-end ">
                        <Button className="rounded-circle mr-3"><CiLight/></Button>
                        <Button className="rounded-circle mr-3"><IoCartOutline/></Button>
                        <Button className="rounded-circle mr-3"><HiOutlineMail/></Button>
                        <Button className="rounded-circle mr-3" onClick={handleClicktruNotificao}><CiBellOn/><Menu
        anchorEl={Notificao}
        className='noficao'
        id="Notificao"
        open={openNotifi}
        onClose={handleCloseNotificao}
        onClick={handleCloseNotificao}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <Frasemenu>
          Perdida (1)
          </Frasemenu>
        <Divider className='mb-3'/>

        <MenuItem onClick={handleCloseNotificao}>
               <div className='d-flex align-items-center'>
                <span className='rounded-circle'>                          
                          <Minhaacc className='d-flex align-items-center'>
                             <div className="userImg">
                                <span className="rounded-circle">
                                    <img src={Perfil} alt="Perfil" className="perfilimg"/>
                                </span>
                            
                             </div>                         <div className='info'>
        {salesData.map(sale => (
          <li key={sale.id}>
            <Usernotifi>
              <h4>
                <span><b>{sale.buyerName}</b> comprou <strong>{sale.productName}</strong> no valor de R$ {sale.price.toFixed(2)}</span>
              </h4>
            </Usernotifi>
          </li>
        ))}
      </div>
      
      
                           </Minhaacc> 
                           <Notifioper>alguns segundos atrás</Notifioper>

                           
                          </span>
                          <Divider className='mb-3'/>
                          
               </div>
               
               
     
        </MenuItem> 
        <MenuItem onClick={handleCloseNotificao}>
               <div className='d-flex align-items-center'>
                <span className='rounded-circle'>                          
                          <Minhaacc className='d-flex align-items-center'>
                             <div className="userImg">
                                <span className="rounded-circle">
                                    <img src={Perfil} alt="Perfil" className="perfilimg"/>
                                </span>
                            
                             </div>                         <div className='info'>
        {salesData.map(sale => (
          <li key={sale.id}>
            <Usernotifi>
              <h4>
                <span><b>{sale.buyerName}</b> comprou <strong>{sale.productName}</strong> no valor de R$ {sale.price.toFixed(2)}</span>
              </h4>
            </Usernotifi>
          </li>
        ))}
      </div>
      
      
                           </Minhaacc> 
                           <Notifioper>alguns 3 min atras  </Notifioper>

                           
                          </span>
                          <Divider className='mb-3'/>
                          
               </div>
               
               
     
        </MenuItem> 
        <BtnFinalmenu>
          <Button>Ver todas as notificações </Button>
        </BtnFinalmenu>
      </Menu> </Button>
                        <div>
                          <Button className='userImg d-flex align-items-center' onClick={handleClick}>
                          <Minhaacc className='d-flex align-items-center'>
                             <div className="userImg">
                                <span className="rounded-circle">
                                    <img src={Perfil} alt="Perfil" className="perfilimg"/>
                                </span>
                        
                             </div>
                             <Userinfo>
                                  <h4>Eduardo Melo</h4>
                                    <p className="mb-0">Admin</p>
                                    
                                  </Userinfo>
                           </Minhaacc> 
                          </Button>
                      
                          <Menu
        anchorEl={anchorEl}
        className='Usermenu'
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Minha conta
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Resetar Senha
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
                        </div>

                              

                        </Iconsheader>
                    </div>
             </Containerfluido>
         </Headerdash>
    </div>
  )
}
