import { Footer, Navbar } from "components/ui"
import styles from "./layout.module.css"

type Props = {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className={styles.wrapper}>{children}</main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Layout
