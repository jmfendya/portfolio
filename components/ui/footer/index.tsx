import { navigation } from "content/navigation"

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-1">
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <div className="py-0">
            <p className="mb-6 text-white text-sm text-primary-2 font-bold">
              {navigation.map((item: any) => (
                <span className="pr-8" key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </span>
              ))}
              <span className="">Copyright © {new Date().getFullYear()}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
