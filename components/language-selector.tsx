'use client'

import { useState } from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverTrigger,
} from '@/components/ui/popover'

const languages = [
  { value: 'hindi', label: 'Hindi' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'telugu', label: 'Telugu' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'marathi', label: 'Marathi' },
]

interface LanguageSelectorProps {
  onChange?: (value: string) => void;
}

export function LanguageSelector({ onChange }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false)
  // Remove this line:
  // const [value, setValue] = useState('hindi')

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Select Language</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            {onChange
              ? languages.find((language) => language.value === onChange)?.label
              : "Select language..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        
      </Popover>
    </div>
  )
}

