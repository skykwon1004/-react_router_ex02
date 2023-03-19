import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1><Link to='/'>LOGO</Link></h1>
      <button onClick={() => navigate(-1)}>뒤로</button>
      <button onClick={() => navigate(1)}>앞으로</button>
      <ul>
        <li><Link to='/sub/01'>SUB01</Link></li>
        <li><Link to='/sub/02'>SUB02</Link></li>
      </ul>
    </header>
  )
}

const SubWrap = () => {
  return (
    <div>
      <div>
        <h2>SUB HEADER 여기는 고정값</h2>
      </div>

      <Outlet />

      <div>
        SUB FOOTER
      </div>
    </div>
  )
}


const Home = () => {
  return (
    <main>
      <Tab />
    </main>
  )
}

const Sub01 = () => {
  return (
    <div>SUB 01 : Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
  )
}

const Sub02 = () => {
  return (
    <div>SUB 02 : Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
  )
}
const Tab01 = () => {
  return (
    <div>Tab 01 : Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
  )
}

const Tab02 = () => {
  return (
    <div>Tab 02 : Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
  )
}

const Footer = () => {
  return (
    <footer>
      &copy; lee
    </footer>
  )
}

const Tab = () => {
  return (
    <>
      <ul>
        <li><Link to='/tab01'>menu001</Link></li>
        <li><Link to='/tab02'>menu002</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>

    </>
  )
}


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}>
          <Route index element={<Tab01 />} />
          <Route path="tab01" element={<Tab01 />} />
          <Route path="tab02" element={<Tab02 />} />
        </Route>
        <Route path="sub" element={<SubWrap />}>
          <Route path="01" element={<Sub01 />} />
          <Route path="02" element={<Sub02 />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App