import React, { useState } from 'react'
import { marked } from "https://esm.sh/marked@4.0.12";

const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const MarkdownPreviewer = () => {
  const [text, setText] = useState(initialMarkdown);

  const handleTextChange = (e) => setText(e.target.value);

  const createMarkup = () => {
    return { __html: marked(text) };
  };

  return (
    <>
      <div className='fixed h-full w-[50%] px-12 py-12 space-y-6'>
        <div>
          <h1 className='border-none'>FFC Markdown Previewer</h1>
          <p>Crafted with ♥ by Frederick Moreno</p>
        </div>
        <div className='h-full max-h-[80%] bg-stone-200 p-2 rounded-[1.2rem]'>
          <p className='font-semibold leading-none pb-2 px-3'>Editor</p>
          <textarea className='w-full h-[95%] bg-stone-100 rounded-2xl px-6 border custom-scrollbar' id='editor' value={text} onChange={handleTextChange} />
        </div>
      </div>
      <div className='pl-[50%] w-full overflow-auto'>
        <div id='preview' className='space-y-4 px-10 bg-white py-10 my-4 mr-3 rounded-2xl' dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </>
  )
}

export default MarkdownPreviewer
