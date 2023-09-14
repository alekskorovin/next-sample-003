import * as RadixDialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export function Dialog() {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <button>Edit profile</button>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay />
        <RadixDialog.Content>
          <RadixDialog.Title>Edit profile</RadixDialog.Title>
          <RadixDialog.Description>
            Make changes to your profile here. Click save when you're done.
          </RadixDialog.Description>
          <RadixDialog.Close asChild>
            <button aria-label="Close">
              <Cross2Icon />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
