import { Navbar } from "components/ui"
import styles from "./layout.module.css"

type Props = {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Navbar */}
      <Navbar />

      {/* childrem */}
      <div className={styles.wrapper}>{children}</div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
