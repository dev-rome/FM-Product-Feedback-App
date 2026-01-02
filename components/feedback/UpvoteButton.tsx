"use client"

import { useTransition } from "react";
import Button from "../ui/Button";
import { toggleUpvote } from "@/features/upvotes/actions";

export default function UpvoteButton({ feedbackId }: { feedbackId: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type="button"
      onClick={() => startTransition(() => toggleUpvote(feedbackId))}
    >
      {isPending ? "..." : "Upvote"}
    </Button>
  );
}
