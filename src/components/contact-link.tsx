"use client";

import type { ComponentProps, MouseEvent } from "react";
import { site } from "@/lib/site";

type ContactLinkProps = ComponentProps<"a">;

/** Same look as a normal link. While contact actions are off, the click does nothing and no phone or WhatsApp URL is exposed. */
export function ContactLink({ href, target, rel, onClick, ...props }: ContactLinkProps) {
  function guard(event: MouseEvent<HTMLAnchorElement>) {
    if (!site.contactActionsEnabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  }

  if (!site.contactActionsEnabled) {
    return <a {...props} role="link" aria-disabled="true" onClick={guard} />;
  }

  return <a {...props} href={href} target={target} rel={rel} onClick={onClick} />;
}
