import { toast } from 'react-toastify'
import './index.scss'

const RadioLinks = (props) => {

   const openURL = () => {
      if(props.url){
         window.open(props.url, '_blank')
      } else {
         toast.warning('Sem link aqui')
      }
   }

   return(
      <button className='radioLinks-container' onClick={openURL}>
         {props.children}
      </button>
   )
}

export default RadioLinks