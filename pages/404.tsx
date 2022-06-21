import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.replace("/")
    }, 3000)
  }, [router])

  return (
    <div className="prose not-found">
      <h1>404</h1>
      <h2>Ooops! That page cannot be found.</h2>
      <p>
        Redirecting to{" "}
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        for more options.
      </p>
    </div>
  )
}

export default NotFound
