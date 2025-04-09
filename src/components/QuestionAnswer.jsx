import React from 'react'
import Answer from './Answer'
import CodeBlock from './CodeBlock'

const QuestionAnswer = ({ item, index }) => {
  return (
    <>
      <div className={item.type === 'q' ? 'flex justify-end' : ''}>
        {
          item.type === 'q' ? (
            <li key={index + Math.random()} className='text-right p-1 border-8 bg-zinc-700 border-zinc-700 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit'>
              <Answer index={index} ans={item.text} totalResult={1} type={item.type} />
            </li>
          ) : (
            item.text.map((ansItem, ansIndex) => {
              // Detect code block
              if (/^```/.test(ansItem)) {
                const cleanedCode = ansItem.replace(/```[a-z]*\n?/, '').replace(/```$/, '')
                return (
                  <li key={ansIndex + Math.random()} className='text-left p-1'>
                    <CodeBlock code={cleanedCode} />
                  </li>
                )
              } else {
                return (
                  <li key={ansIndex + Math.random()} className='text-left p-1'>
                    <Answer index={ansIndex} ans={ansItem} totalResult={item.length} type={item.type} />
                  </li>
                )
              }
            })
          )
        }
      </div>
    </>
  )
}

export default QuestionAnswer
