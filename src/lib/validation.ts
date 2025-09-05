import { z } from 'zod';

export const contactFormApiSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company is required").max(100, "Company name must be less than 100 characters"),
  phone: z.string().optional().refine(
    (phone) => !phone || /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, '')),
    "Please enter a valid phone number"
  ),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
  submissionId: z.number().optional(),
  submittedAt: z.string().optional(),
});
