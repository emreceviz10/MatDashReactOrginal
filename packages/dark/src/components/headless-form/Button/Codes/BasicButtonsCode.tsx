
import CodeModal from 'src/components/ui-components/CodeModal'


const BasicButtonsCode = () => {
  return (
    <div>
      <CodeModal>
        {`
    
    import { Button } from "@headlessui/react";

    <div className="flex gap-3 flex-wrap">
        <Button className="ui-button bg-primary">
        Primary
        </Button>
        <Button className="ui-button bg-secondary">
        Secondary
        </Button>
        <Button className="ui-button bg-success">
        Success
        </Button>
        <Button className="ui-button bg-error">
        Error
        </Button>
        <Button className="ui-button bg-warning">
        Warning
        </Button>
        <Button className="ui-button bg-info">
        Info
        </Button>
    </div>
        `}
      </CodeModal>
    </div>
  )
}

export default BasicButtonsCode
