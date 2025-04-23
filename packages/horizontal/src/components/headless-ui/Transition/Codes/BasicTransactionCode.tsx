import CodeModal from 'src/components/ui-components/CodeModal'


const BasicTransactionCode = () => {
  return (
    <div>
      <CodeModal>
        {`
    
    import  { useState } from "react";
    import { Transition } from '@headlessui/react'

    const [open, setOpen] = useState(false)

    <button onClick={() => setOpen((open) => !open)} className="ui-button bg-primary justify-center">Toggle Transition</button>
    <Transition show={open}>
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">I will fade in and out</div>
    </Transition>
        `}
      </CodeModal>
    </div>
  )
}

export default BasicTransactionCode
