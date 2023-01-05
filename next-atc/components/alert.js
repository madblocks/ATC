import { useRouter } from 'next/router'
import { Alert } from 'flowbite-react'

export default function AlertMessage({status, message, onDismiss}) {
  return (
    <Alert
      color="success"
      onDismiss={onDismiss}
      // onDismiss={function onDismiss(){return alert("Alert dismissed!")}}
    >
      <span>
        <span className="font-medium">
          {status}
        </span>
        {' '}{message}
      </span>
    </Alert>
  )
}