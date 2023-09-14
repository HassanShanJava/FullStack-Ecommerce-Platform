import { Store } from '@prisma/client'
import React from 'react'

interface SettingsFormProps{
  initialData:Store
}

const SettingsForm:React.FC<SettingsFormProps> = ({params}) => {
  return (
    <div>SettingsForm</div>
  )
}

export default SettingsForm