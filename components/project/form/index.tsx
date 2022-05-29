import dynamic from "next/dynamic"
import { getAllCategories } from "content/fetcher"
import { useForm, Controller } from "react-hook-form"

import SelectInput from "components/ui/select-input"
import styles from "./form.module.scss"

import { EditorState } from "draft-js"
const RichText = dynamic(() => import("../../ui/rich-text"), { ssr: false })

const { data: categories } = getAllCategories()

const defaultValues = {
  category: "",
  DraftJS: EditorState.createEmpty(),
}

const ProjectForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  })

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-4 py-5 space-y-6 sm:p-6">
        {/* <div className="px-4 py-5 space-y-6 sm:p-6"> */}
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
            <label htmlFor="excerpt" className={styles["form-label"]}>
              Excerpt
            </label>
            <input
              type="text"
              name="excerpt"
              id="excerpt"
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

        <div>
          {/* CATEGORIES */}
          <Controller
            control={control}
            name="category"
            render={({ field: { onChange } }) => (
              <SelectInput categories={categories} onChange={onChange} />
            )}
          />
        </div>

        <div>
          <label className={styles["form-label"]}>Description</label>
          <RichText control={control} />
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
