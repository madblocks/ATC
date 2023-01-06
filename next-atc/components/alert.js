import { Alert } from 'flowbite-react'

export default function AlertMessage({status, color, message, onDismiss}) {

  return (
    <Alert
      color={color}
      onDismiss={onDismiss}
    >
      <span>
        <span className="font-medium">
          {status}.
        </span>
        {'    '}{message}
      </span>
    </Alert>
  )
}