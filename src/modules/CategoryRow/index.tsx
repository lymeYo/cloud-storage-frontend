"use client"

import { memo, useEffect } from "react"

import Skeleton from "react-loading-skeleton"

import CategoryItem from "@/components/CategoryItem"

import { useCategoriesInfoQuery, useTestingMutation, useTestQuery } from "@/store/api/storage"
import { TfileType } from "@/utils/file"
import styles from "./styles.module.css"

const CategoryRow = () => {
  const { data, isLoading } = useCategoriesInfoQuery()

  return (
    <>
      <ul className={styles.list}>
        {data ? (
          Object.entries(data).map(([fileType, count]) => (
            <li key={fileType}>
              <CategoryItem type={fileType as TfileType} count={count} />
            </li>
          ))
        ) : isLoading ? (
          <Skeleton containerClassName={styles.skeletonWrapper} className={styles.skeleton} />
        ) : null}
      </ul>
      {/* <Test1 />
        <Test2 />
        <Test3 /> */}
    </>
  )
}

const Test1 = memo(function Test1() {
  const { data, refetch } = useTestQuery(null)
  console.log("Test1 data", data)

  return ""
})

const Test2 = memo(function Test2() {
  const { data } = useTestQuery(null, { refetchOnMountOrArgChange: true })
  console.log("Test2 data", data)

  return ""
})

const Test3 = () => {
  const [mutation] = useTestingMutation()

  useEffect(() => {
    setTimeout(() => {
      console.log("mutation")
      mutation()
    }, 1000)
  }, [])

  return ""
}

export default CategoryRow
