import Header from '../../components/header'
import RadioLinks from '../../components/radio-links'
import './index.scss'

const HomeView = () => {

   return(
      <main className='main-container'>
         <Header/>

         <section className='home-content'>
         
            {/*<h3>Olá 👋</h3>*/}
            <h1 data-aos='zoom-in'>Eu sou Augusto, Desenvolvedor Front-End</h1>

            <nav data-aos='zoom-in-up'>
               <RadioLinks
                  url='https://github.com/augustoalves-13'
                  icon='/icons/git-hub.svg'
               />
               <RadioLinks
                  icon='/icons/linkedIn.svg'
               />
               <RadioLinks
                  icon='/icons/instagram.svg'
               />
            </nav>
            
         </section>
         
      </main>   
   )
}

export default HomeView

//