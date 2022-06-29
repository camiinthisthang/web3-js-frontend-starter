import Navbar from './Navbar';

export default function Layout({children}) {
    return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Navbar></Navbar>
        <div className="gradient-bg"></div>
        <main className="flex-1">{children}</main>
    
    </div>
  }