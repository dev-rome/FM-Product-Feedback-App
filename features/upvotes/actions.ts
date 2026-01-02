"use server";

import prisma from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function toggleUpvote(feedbackId: number) {
  const user = await requireUser();

  const existing = await prisma.upvote.findFirst({
    where: { userId: user.id, feedbackId },
    select: { id: true },
  });

  if (existing) {
    await prisma.upvote.delete({ where: { id: existing.id } });
  } else {
    await prisma.upvote.create({ data: { userId: user.id, feedbackId } });
  }

  revalidatePath("/");
  revalidatePath(`/feedback/${feedbackId}`);
}
