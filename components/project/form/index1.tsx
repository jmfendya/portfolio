import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import { getAllCategories } from "content/fetcher"
import styles from "./form.module.scss"

const { data: categories } = getAllCategories()

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

const ProjectForm = () => {
  const [selected, setSelected] = useState(categories[0])

  return (
    <form action="#" method="POST">
      <div className="px-4 py-5 space-y-6 sm:p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* TITLE */}
          <div className="col-span-3 sm:col-span-2">
            <label htmlFor="title" className={styles["form-label"]}>
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={styles["form-input"]}
            />
          </div>

          {/* EXCERPT */}
          <div className="col-span-3 sm:col-span-2">
            <label htmlFor="title" className={styles["form-label"]}>
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={styles["form-input"]}
            />
          </div>
        </div>

        <div>
          <label htmlFor="about" className={styles["form-label"]}>
            About
          </label>
          <textarea
            id="about"
            name="about"
            rows={3}
            className={styles["form-textarea"]}
            placeholder="you@example.com"
            defaultValue={""}
          />
        </div>

        {/* CATEGORIES */}
        <div>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative w-full sm:w-1/3 bg-white border border-gray-300 rounded shadow pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-indigo-00 focus:border-indigo-400 sm:text-sm">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selected.type}
                      </span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full sm:w-1/3 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {categories.map((category: any) => (
                        <Listbox.Option
                          key={category.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={category}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {category.type}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>

      <div className="px-4 py-3 text-right sm:px-6">
        <button type="submit" className={styles["form-submit"]}>
          Save
        </button>
      </div>
    </form>
  )
}

export default ProjectForm
