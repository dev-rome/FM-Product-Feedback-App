import prisma from "../lib/prisma";

async function main() {
  const user = await prisma.user.upsert({
    where: { username: "velvetround" },
    update: {},
    create: {
      username: "velvetround",
      name: "Zana Kelley",
      image: "/assets/user-images/image-zena.jpg",
    },
  });

  await prisma.feedback.createMany({
    data: [
      {
        id: 1,
        title: "Add tags for solutions",
        category: "enhancement",
        status: "suggestion",
        description:
          "Easier to search for solutions based on a specific stack.",
        authorId: user.id,
      },
      {
        id: 2,
        title: "Add a dark theme option",
        category: "feature",
        status: "suggestion",
        description:
          "It would help people with light sensitivities and who prefer dark mode.",
        authorId: user.id,
      },
      {
        id: 3,
        title: "More comprehensive reports",
        category: "feature",
        status: "planned",
        description:
          "It would be great to see a more detailed breakdown of solutions.",
        authorId: user.id,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
