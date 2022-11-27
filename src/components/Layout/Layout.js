//import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function Layout({ children }) {
  return (
    <div >
        {children}
      <Footer />
    </div>
  )
}