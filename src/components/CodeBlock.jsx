
import { Copy } from 'lucide-react'
import { useState } from 'react'

const CodeBlock = ({ code }) => {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }
    return (
        <>

            <div className="relative bg-zinc-800 text-green-300 p-4 rounded-xl overflow-x-auto">
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 text-xs text-white"
                >
                    {copied ? 'Copied!' : <Copy size={16} className='cursor-pointer' />}
                </button>
                <pre className="text-sm whitespace-pre-wrap">
                    <code>{code}</code>
                </pre>
            </div>


        </>
    )
}

export default CodeBlock