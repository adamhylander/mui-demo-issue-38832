import React from 'react'
import { Button, Tooltip } from '@mui/material'

export const Block: React.FC<{ year: number; label: string; disabled?: boolean }> = ({
                                                                                       year,
                                                                                       label,
                                                                                       disabled,
                                                                                     }) => {
  return (
    <Tooltip
      open={true}
      title={year}
      placement="right"
      disableFocusListener
      disableTouchListener
      arrow
    >
      <Button variant="outlined" sx={{ width: 300 }}>
        {label}
      </Button>
    </Tooltip>
  )
}
