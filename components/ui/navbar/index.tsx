import { Fragment } from "react"
import { useRouter } from "next/router"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { MenuIcon, XIcon, UserCircleIcon } from "@heroicons/react/outline"
import { getMainNav, getAdminNav } from "content/fetcher"
import styles from "./navbar.module.scss"
import Link from "next/link"

// CLASSNAMES
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

const Navbar = () => {
  const { pathname } = useRouter()

  const { data: mainNav } = getMainNav()
  const { data: adminNav } = getAdminNav()

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
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                        alt="Workflow"
                      />
                    </div>
                  </a>
                </Link>

                {/*  NAVIGATION */}
                <div className={styles["nav-items-wrapper"]}>
                  <div className={styles["nav-items"]}>
                    {mainNav.map((item: any) => (
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

              {/* RIGHT NAV */}
              <div className={styles["nav-right"]}>
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <UserCircleIcon className="h-8 w-8 text-white" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className={styles["menu-items"]}>
                      {adminNav.map((item: any) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={activeAdminClass(item)}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <Menu.Item>
                            <span>{item.name}</span>
                          </Menu.Item>
                        </a>
                      ))}

                      <Menu.Item>
                        <a
                          href="#"
                          type="button"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={(e) => {
                            e.preventDefault()
                          }}
                        >
                          Sign Out
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* MOBILE NAV LIST */}
          <Disclosure.Panel className="sm:hidden z-[100] absolute w-full h-full bg-gray-800 ">
            <div className={styles["mobile-nav"]}>
              {mainNav.map((item: any) => (
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
