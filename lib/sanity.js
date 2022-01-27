import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "9lzcksqr",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skVreUizZrzq7rI9n3EWe2b2KRQpCGfru2qlL1qr6eSXlyxu2RiG9T8e4yeYuskZ5z4p4uHcqRHDjv0PYghYDNKj3c4b5XuKzpMciu6NAMWHJ3mX15V1B6vuWbsq1gYN0v1RoDGiZ5ckawpiSC4vrw2E53ueZVSQlVkhfZNsFX2xPL3w8VTn",
  useCdn: false,
});
