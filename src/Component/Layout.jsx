import "./layout.css"
 


const Layout = ({children}) => {
  return (
      <div>
          <div className="heading">
            <div className="logo-img">
                <img src="https://mack-html.netlify.app/assets/img/logo/logo-3.svg" width={"50px"} alt="person"/>
            </div>
          <nav >
            <ul>
              <li className="home">Home
                  <div>
                    <ul >
                      <li>Home 1</li>
                      <li>Home 2</li>
                      <li>Home 3</li>
                    </ul>
                  </div>
              </li>
              <li>About Me</li>
              <li>Services</li>
              <li>Work</li>
              <li>Testimonials</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="div-hr">
            <hr />
            <hr />
            <hr />
          </div>
          </div>
          {children}
          <h2 className="footing">Footer Section</h2>
      </div>
  )
}

export default Layout;