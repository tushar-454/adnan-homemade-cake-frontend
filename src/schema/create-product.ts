import { z } from 'zod';

export const schema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.coerce.number().positive(),
  discount: z.coerce.number().int().positive(),
  images: z
    .array(
      z.object({
        link: z.string().nonempty().url(),
      }),
    )
    .nonempty(),
  category: z.string().nonempty(),
  variants: z
    .array(
      z.object({
        name: z.string().nonempty(),
        price: z.coerce.number().positive(),
      }),
    )
    .nonempty(),
});

export type FormType = z.infer<typeof schema>;
