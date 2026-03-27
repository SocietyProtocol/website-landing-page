import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true,
          },
          {
            name: "description",
            label: "Description",
            type: "string",
            required: true,
          },
          {
            name: "date",
            label: "Date",
            type: "datetime",
          },
          {
            name: "author",
            label: "Author",
            type: "string",
          },
          {
            name: "image",
            label: "Cover Image",
            type: "image",
          },
          {
            name: "cardImage",
            label: "Card Image",
            type: "image",
            description: "Background image for article cards. Falls back to Cover Image if empty.",
          },
          {
            name: "isIntro",
            label: "Intro Article",
            type: "boolean",
            description: "Show in 'Explore our Intro Articles' section on homepage and learn page.",
          },
          {
            name: "order",
            label: "Intro Order",
            type: "number",
            description: "Display order within the intro articles section (lower = first).",
          },
          {
            name: "body",
            label: "Body (MDX)",
            type: "string",
            isBody: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        label: "Roles",
        name: "roles",
        path: "content/roles",
        format: "mdx",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true,
          },
          {
            name: "emoji",
            label: "Emoji",
            type: "string",
            description: "An emoji icon for the role card",
          },
          {
            name: "commitment",
            label: "Time Commitment",
            type: "string",
            required: true,
          },
          {
            name: "responsibilities",
            label: "Responsibilities",
            type: "string",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            name: "requirements",
            label: "Requirements",
            type: "string",
            required: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        label: "Roadmap",
        name: "roadmap",
        path: "content/roadmap",
        format: "mdx",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true,
          },
          {
            name: "description",
            label: "Description",
            type: "string",
          },
          {
            name: "body",
            label: "Body (MDX)",
            type: "string",
            isBody: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        label: "Whitepaper",
        name: "whitepaper",
        path: "content/whitepaper",
        format: "mdx",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true,
          },
          {
            name: "description",
            label: "Description",
            type: "string",
          },
          {
            name: "body",
            label: "Body (MDX)",
            type: "string",
            isBody: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        label: "Glossary",
        name: "glossary",
        path: "content/glossary",
        format: "mdx",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true,
          },
          {
            name: "description",
            label: "Description",
            type: "string",
          },
          {
            name: "body",
            label: "Body (MDX)",
            type: "string",
            isBody: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        label: "Ideology",
        name: "ideology",
        path: "content/ideology",
        format: "mdx",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true,
          },
          {
            name: "description",
            label: "Description",
            type: "string",
          },
          {
            name: "body",
            label: "Body (MDX)",
            type: "string",
            isBody: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        label: "Team Members",
        name: "team",
        path: "content/team",
        format: "mdx",
        fields: [
          {
            name: "title",
            label: "Name",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true,
          },
          {
            name: "role",
            label: "Role",
            type: "string",
            required: true,
            options: ["core", "advisor"],
          },
          {
            name: "jobTitle",
            label: "Job Title",
            type: "string",
            required: true,
          },
          {
            name: "image",
            label: "Photo",
            type: "image",
          },
          {
            name: "order",
            label: "Sort Order",
            type: "number",
            required: true,
          },
          {
            name: "xUrl",
            label: "X (Twitter) URL",
            type: "string",
          },
          {
            name: "farcasterUrl",
            label: "Farcaster URL",
            type: "string",
          },
          {
            name: "lensUrl",
            label: "Lens URL",
            type: "string",
          },
        ],
      },
    ],
  },
});
