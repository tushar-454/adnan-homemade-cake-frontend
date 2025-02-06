import { z } from 'zod';

export const schema = z.object({
  name: z.string().nonempty(),
});

export type FormType = z.infer<typeof schema>;
