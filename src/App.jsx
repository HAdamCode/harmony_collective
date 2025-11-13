import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import BookUs from './pages/BookUs'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import GroupPage from './pages/GroupPage'
import Groups from './pages/Groups'
import Home from './pages/Home'
import Join from './pages/Join'
import Media from './pages/Media'
import Performances from './pages/Performances'

function NotFound() {
  return (
    <div className="section">
      <h1>Page not found</h1>
      <p>The page you requested is no longer available.</p>
    </div>
  )
}

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <ScrollToTop />
      <main className="site-main" id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/:slug" element={<GroupPage />} />
          <Route path="/performances" element={<Performances />} />
          <Route path="/media" element={<Media />} />
          <Route path="/book-us" element={<BookUs />} />
          <Route path="/join" element={<Join />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
