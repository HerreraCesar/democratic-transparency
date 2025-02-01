import { z, defineCollection } from "astro:content";

// TODO: unificar
type Category =
  | "government"
  | "ministry"
  | "secretary"
  | "undersecretary"
  | "directorate"
  | "subdirectorate"
  | "entity"
  | "organism"
  | "consulting";

interface Authority {
  name: string;
  position: string;
  email: string;
  phone: string;
}

interface Entity {
  name: string;
  category: Category;
  authority: Authority;
  dependencies: Entity[];
}

const categorySchema = z.enum([
  "government",
  "ministry",
  "secretary",
  "undersecretary",
  "directorate",
  "subdirectorate",
  "entity",
  "organism",
  "consulting",
]);

const authoritySchema = z.object({
  name: z.string(),
  position: z.string(),
  email: z.string(),
  phone: z.string(),
});

const entitySchema: z.ZodType<Entity> = z.object({
  name: z.string(),
  category: categorySchema,
  authority: authoritySchema,
  dependencies: z.array(z.lazy(() => entitySchema)),
});

const entitiesCollection = defineCollection({
  type: "data",
  schema: z.array(entitySchema),
});

export const collections = {
  entities: entitiesCollection,
};
