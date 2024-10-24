import React, { useState } from 'react'
import { marked } from "https://esm.sh/marked@4.0.12";

const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

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
    <div className='border border-red-500'>
      <div className='fixed h-full w-[50%] border border-blue-500'>
        <h1>Welcome to nowhere!</h1>
        <textarea className='w-full h-full max-h-[70%] bg-neutral-100 px-6 border' id='editor' value={text} onChange={handleTextChange} />
      </div>
      <div className='pl-[50%] w-full overflow-auto p-8 bg-neutral-100 border'>
        <div id='preview' className='space-y-4' dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default MarkdownPreviewer
