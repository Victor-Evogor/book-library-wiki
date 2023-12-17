import { FunctionComponent } from 'react'
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const CreateWiki: FunctionComponent = () => {
  const extensions = [StarterKit]
  const content = '<p>Hello World!</p>'

  return (
    <form>
      <div>{/* Banner inout for Wiki */}</div>
      <div>
        <label>Title Of Wiki</label>
        <input
          id="Title"
          type="text"
          className="h-10 py-1 bg-white border w-full md:w-[660px] rounded-md text-sm shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-500 transition duration-300 pl-3 pr-10 text-black block"
        />
      </div>
      <div>
        <label>Description of Wiki</label>
        {/* Use Rich text for inout description */}
        <EditorProvider extensions={extensions} content={content}>
          <FloatingMenu>This is the floating menu</FloatingMenu>
          <BubbleMenu>This is the bubble menu</BubbleMenu>
        </EditorProvider>
      </div>
    </form>
  )
}

export default CreateWiki
