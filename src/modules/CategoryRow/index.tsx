"use client"
import CategoryItem from "@/components/CategoryItem"

import styles from "./styles.module.css"

const CategoryRow = () => {
  return (
    <ul className={styles.list}>
      <li>
        <CategoryItem type='text' />
      </li>
      <li>
        <CategoryItem type='video' />
      </li>
      <li>
        <CategoryItem type='image' />
      </li>
      <li>
        <CategoryItem type='other' />
      </li>
    </ul>
  )
}
export default CategoryRow
