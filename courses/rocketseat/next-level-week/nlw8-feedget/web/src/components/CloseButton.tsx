import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar Formulário De Feedback"
    >
      <X className="w-4 h-4" height="bold" />
    </Popover.Button>
  );
}
