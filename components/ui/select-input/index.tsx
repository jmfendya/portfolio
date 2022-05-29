import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import styles from "./select.module.scss"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

const SelectInput = ({ categories, onChange }: any) => {
  const [category, setCategory] = useState(categories[0])

  return (
    <Listbox
      value={category}
      onChange={(e) => {
        onChange(e)
        setCategory(e)
      }}
    >
      {({ open }) => (
        <>
          {/* LABEL */}
          <Listbox.Label className={styles.label}>Category</Listbox.Label>

          {/* SELECTOR */}
          <div className="relative">
            <Listbox.Button className={styles.button}>
              <span className="flex items-center">
                <span className="ml-3 block truncate">{category.name}</span>
              </span>
              <span className={styles.icon}>
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            {/* DROPDOWN */}
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* OPTIONS */}
              <Listbox.Options className={styles.options}>
                {categories.map((category: any) => (
                  <Listbox.Option
                    key={category.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
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
                            {category.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
  )
}

export default SelectInput
