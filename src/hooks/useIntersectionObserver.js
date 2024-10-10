import { useEffect, useState } from "react"


export default function useIntersectionObserver(elem, rootMargin = '0px', onlyOneShow) {
    let [entry, setEntry] = useState(null)

    useEffect(() => {
        let observer = new IntersectionObserver(
            ([e]) => {
                setEntry((e.isIntersecting))
                if (e.isIntersecting && onlyOneShow) {
                    observer.disconnect(elem.current)
                }
            },
            { rootMargin }
        )


        observer.observe(elem.current)

        return () => observer.disconnect(elem.current)

    }, [])


    return entry

}