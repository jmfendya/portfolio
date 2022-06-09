import { useRouter } from "next/router"
import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import styles from "./navbar.module.css"
import Link from "next/link"

import { navigation } from "content/navigation"

// CLASSNAMES
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

const Navbar = () => {
  const { pathname } = useRouter()

  const activeClass = (item: any) => {
    const classes = classNames(
      pathname === item.href.toLowerCase()
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white",
      "px-3 py-2 rounded-md text-sm font-medium"
    )

    return classes
  }

  const activeAdminClass = (item: any) => {
    const classes = classNames(
      pathname === item.href.toLowerCase() ? "bg-gray-100 font-semibold" : "",
      "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    )

    return classes
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className={styles["navbar-wrapper"]}>
            <div className={styles.navbar}>
              {/* MOBILE NAV */}
              <div className={styles["mobile-nav-icon"]}>
                {/* Mobile menu button */}
                <Disclosure.Button className={styles["mobile-nav-btn"]}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* LEFT NAV */}
              <div className={styles["nav-left"]}>
                <Link href="/">
                  <a className="cursor-pointer">
                    <div className={styles["nav-brand"]}>
                      {/* <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      /> */}
                      {/* <img
                        className="hidden lg:block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                        alt="Workflow"
                      /> */}
                      <span style={{ fontSize: 24, color: "white" }}>
                        JMFendya
                      </span>
                    </div>
                  </a>
                </Link>

                {/*  NAVIGATION */}
                <div className={styles["nav-items-wrapper"]}>
                  <div className={styles["nav-items"]}>
                    {navigation.map((item: any) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={activeClass(item)}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE NAV LIST */}
          <Disclosure.Panel className="sm:hidden z-[100] absolute w-full h-full bg-gray-800 ">
            <div className={styles["mobile-nav"]}>
              {navigation.map((item: any) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={activeClass(item) + " block"}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
