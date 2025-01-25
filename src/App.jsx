import Header from './Component/Header';
import './App.css';
import Section from './Component/Section';
import Layout from './Component/Layout';
import AboutMe  from './Component/AboutMe.jsx';




const App = () => {
  

  return (
    <>
      <Layout>
      <Header/>
      <div class="homepage-background" id='root'>
            <img src="https://mack-html.netlify.app/assets/img/banner/v2/bg-1.jpg" 
            alt=""  width="95%"/>
        </div>
      <Section/>
      <AboutMe/>
      </Layout>
    </>
  )
}

export default App
