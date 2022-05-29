import { useState } from "react"
import { Controller } from "react-hook-form"

import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"

function RichText({ control }: any) {
  const [value, setValue] = useState(EditorState.createEmpty())

  return (
    <div
      style={{
        border: "1px solid #ccc",
        minHeight: 30,
        padding: 10,
      }}
    >
      <Controller
        name="DraftJS"
        control={control}
        render={({ field: { value, onChange } }) => {
          return <Editor editorState={value} onChange={onChange} />
        }}
      />
    </div>
  )
}

export default RichText
