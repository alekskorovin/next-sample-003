import { HTMLAttributes } from "react";

export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}
