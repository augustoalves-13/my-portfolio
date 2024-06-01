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
               <RadioLinks url='https://github.com/augustoalves-13'>
                  <svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.41199 0.898698C10.7575 1.35448 12.0375 1.98454 13.2193 2.77278C14.8884 2.3462 16.6046 2.1319 18.3273 2.13495C20.1064 2.13495 21.8229 2.35711 23.4318 2.77099C24.6131 1.98351 25.8925 1.35406 27.2373 0.898698C28.4861 0.474073 30.2652 -0.213927 31.3223 0.956031C32.0389 1.75153 32.2181 3.08453 32.3453 4.1022C32.4887 5.23811 32.5227 6.71803 32.1464 8.1872C33.5852 10.0452 34.4523 12.2614 34.4523 14.6766C34.4523 18.3352 32.4707 21.5118 29.5378 23.712C28.1263 24.7575 26.5608 25.5771 24.8974 26.1415C25.2808 27.0194 25.494 27.9905 25.494 29.0099V34.3849C25.494 34.8601 25.3052 35.3158 24.9692 35.6518C24.6332 35.9878 24.1775 36.1766 23.7023 36.1766H12.9523C12.4771 36.1766 12.0214 35.9878 11.6854 35.6518C11.3494 35.3158 11.1607 34.8601 11.1607 34.3849V32.6094C9.44962 32.819 8.01449 32.6327 6.79437 32.1149C5.5187 31.5738 4.63003 30.7353 3.96174 29.9327C3.32749 29.173 2.63591 27.4602 1.63616 27.1269C1.41287 27.0526 1.20642 26.935 1.02858 26.7808C0.850746 26.6267 0.705011 26.439 0.599697 26.2286C0.387008 25.8035 0.351877 25.3114 0.502034 24.8604C0.65219 24.4095 0.975334 24.0367 1.40038 23.824C1.82542 23.6113 2.31755 23.5762 2.76849 23.7263C3.96174 24.1241 4.73933 24.9841 5.27145 25.6757C6.13145 26.7865 6.8302 28.2377 8.19187 28.8164C8.75266 29.0547 9.57503 29.2106 10.8615 29.035L11.1607 28.9741C11.1641 27.9991 11.3671 27.0351 11.7573 26.1415C10.0939 25.5771 8.52836 24.7575 7.11687 23.712C4.18391 21.5118 2.20233 18.337 2.20233 14.6766C2.20233 12.265 3.0677 10.0505 4.50283 8.19436C4.12658 6.7252 4.15883 5.2417 4.30216 4.10399L4.31112 4.03591C4.44191 2.99316 4.5942 1.76586 5.3252 0.956031C6.38228 -0.213927 8.1632 0.475865 9.4102 0.90049L9.41199 0.898698Z" fill="#0F1630"/>
                  </svg>
               </RadioLinks>

               <RadioLinks>
                  <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M7.43415 3.95829C7.43368 4.90865 7.05569 5.8199 6.38335 6.49157C5.71101 7.16324 4.79939 7.54031 3.84903 7.53984C2.89867 7.53936 1.98742 7.16138 1.31575 6.48904C0.644085 5.81669 0.267012 4.90507 0.267487 3.95471C0.267962 3.00435 0.645946 2.09311 1.31829 1.42144C1.99063 0.749767 2.90225 0.372694 3.85261 0.373169C4.80297 0.373645 5.71422 0.751629 6.38589 1.42397C7.05756 2.09631 7.43463 3.00794 7.43415 3.95829ZM7.54165 10.1933H0.374987V32.625H7.54165V10.1933ZM18.865 10.1933H11.7342V32.625H18.7933V20.8537C18.7933 14.2962 27.3396 13.687 27.3396 20.8537V32.625H34.4167V18.417C34.4167 7.36246 21.7675 7.77454 18.7933 13.2033L18.865 10.1933Z" fill="#0F1630"/>
                  </svg>
               </RadioLinks>

               <RadioLinks>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.975 0.583374H26.025C31.7583 0.583374 36.4166 5.24171 36.4166 10.975V26.025C36.4166 28.7811 35.3218 31.4242 33.373 33.3731C31.4242 35.3219 28.781 36.4167 26.025 36.4167H10.975C5.24165 36.4167 0.583313 31.7584 0.583313 26.025V10.975C0.583313 8.219 1.67815 5.57584 3.62696 3.62702C5.57578 1.67821 8.21894 0.583374 10.975 0.583374ZM10.6166 4.16671C8.906 4.16671 7.26542 4.84626 6.05581 6.05587C4.8462 7.26548 4.16665 8.90606 4.16665 10.6167V26.3834C4.16665 29.9488 7.05123 32.8334 10.6166 32.8334H26.3833C28.094 32.8334 29.7345 32.1538 30.9442 30.9442C32.1538 29.7346 32.8333 28.094 32.8333 26.3834V10.6167C32.8333 7.05129 29.9487 4.16671 26.3833 4.16671H10.6166ZM27.9062 6.85421C28.5002 6.85421 29.0699 7.09016 29.4899 7.51017C29.9099 7.93017 30.1458 8.49982 30.1458 9.09379C30.1458 9.68776 29.9099 10.2574 29.4899 10.6774C29.0699 11.0974 28.5002 11.3334 27.9062 11.3334C27.3123 11.3334 26.7426 11.0974 26.3226 10.6774C25.9026 10.2574 25.6666 9.68776 25.6666 9.09379C25.6666 8.49982 25.9026 7.93017 26.3226 7.51017C26.7426 7.09016 27.3123 6.85421 27.9062 6.85421ZM18.5 9.54171C20.8759 9.54171 23.1545 10.4855 24.8345 12.1655C26.5145 13.8456 27.4583 16.1241 27.4583 18.5C27.4583 20.8759 26.5145 23.1545 24.8345 24.8345C23.1545 26.5146 20.8759 27.4584 18.5 27.4584C16.1241 27.4584 13.8455 26.5146 12.1655 24.8345C10.4855 23.1545 9.54165 20.8759 9.54165 18.5C9.54165 16.1241 10.4855 13.8456 12.1655 12.1655C13.8455 10.4855 16.1241 9.54171 18.5 9.54171ZM18.5 13.125C17.0744 13.125 15.7073 13.6913 14.6993 14.6993C13.6913 15.7073 13.125 17.0745 13.125 18.5C13.125 19.9256 13.6913 21.2927 14.6993 22.3007C15.7073 23.3087 17.0744 23.875 18.5 23.875C19.9255 23.875 21.2927 23.3087 22.3007 22.3007C23.3087 21.2927 23.875 19.9256 23.875 18.5C23.875 17.0745 23.3087 15.7073 22.3007 14.6993C21.2927 13.6913 19.9255 13.125 18.5 13.125Z" fill="#0F1630"/>
                  </svg>
               </RadioLinks>
            </nav>
            
         </section>
         
      </main>   
   )
}

export default HomeView
