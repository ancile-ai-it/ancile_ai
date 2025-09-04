import type { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { ContactEmailTemplate, CustomerConfirmationTemplate } from '../../../components/ContactEmailTemplate';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY || process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { data, error } = await request.json();

    if (!data) {
      return Response.json({ error: 'Missing form data' }, { status: 400 });
    }

    // Use test email for now (remove domain verification issue)
    const testRecipient = 'delivered@resend.dev';

    // Send customer confirmation email using React template
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: 'Ancile AI Team <hello@resend.dev>', // Use verified domain for testing
      to: [testRecipient], // Use test email for now
      subject: 'Thanks for reaching out to Ancile AI! 🎉',
      react: CustomerConfirmationTemplate({
        name: data.name,
        company: data.company
      }),
    });

    if (customerError) {
      console.error('Customer email error:', customerError);
      return Response.json({ error: 'Failed to send customer email', details: customerError }, { status: 500 });
    }

    // Send sales notification email using React template
    const { data: salesData, error: salesError } = await resend.emails.send({
      from: 'Ancile AI Contact <hello@resend.dev>', // Use verified domain
      to: [testRecipient], // Use test email for now
      subject: `🚀 New Lead: ${data.company || data.name}`,
      react: ContactEmailTemplate({
        name: data.name,
        company: data.company,
        message: data.message,
        phone: data.phone,
        submissionId: data.submissionId || Math.floor(Math.random() * 1000),
        submittedAt: data.submittedAt || new Date().toLocaleString()
      }),
    });

    if (salesError) {
      console.error('Sales email error:', salesError);
      return Response.json({ error: 'Failed to send sales email', details: salesError }, { status: 500 });
    }

    return Response.json({
      success: true,
      customerEmailId: customerData?.id,
      salesEmailId: salesData?.id
    });

  } catch (error) {
    console.error('API route error:', error);
    return Response.json({ error: 'Internal server error', details: error.message }, { status: 500 });
  }
}
