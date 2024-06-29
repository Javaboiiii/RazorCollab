import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'

const Editor = () => {
    return (
        <div>
            <CodeMirror
                value={value}
                options={{
                    mode: 'javascript',
                    theme: 'dracula',
                    autoCloseBrackets: true,
                    autoCloseTags: true,
                    lineNumbers: true
                }}
                cursor={{
                    line: 1,
                    ch: 0
                }}
                onChange={(editor, data, value) => {

                }}
            />
        </div>
    )
}

export default Editor