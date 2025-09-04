import type { NextRequest } from 'next/server';
import { Resend } from 'resend';

// Helper functions to generate HTML emails
function generateCustomerConfirmationEmail(name: string, company?: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting Ancile AI</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #374151; margin: 0; padding: 0; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 40px 30px; text-align: center; }
          .logo { color: #ffffff; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: -0.5px; }
          .tagline { color: #dbeafe; font-size: 14px; margin: 8px 0 0 0; font-weight: 400; }
          .content { padding: 40px 30px; }
          .greeting { font-size: 18px; color: #111827; margin: 0 0 24px 0; font-weight: 600; }
          .message { font-size: 16px; color: #374151; margin: 0 0 32px 0; line-height: 1.7; }
          .next-steps { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; margin: 32px 0; }
          .next-steps h3 { color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; }
          .steps-list { margin: 0; padding: 0; list-style: none; }
          .steps-list li { margin: 0 0 16px 0; padding-left: 24px; position: relative; color: #475569; font-size: 15px; }
          .steps-list li:before { content: '✓'; position: absolute; left: 0; top: 0; color: #059669; font-weight: bold; }
          .footer { background-color: #f9fafb; padding: 32px 30px; border-top: 1px solid #e5e7eb; text-align: center; }
          .signature { color: #374151; font-size: 16px; margin: 0; }
          .company { color: #1e40af; font-weight: 600; }
          .contact-info { color: #6b7280; font-size: 14px; margin: 16px 0 0 0; }
          .divider { height: 1px; background-color: #e5e7eb; margin: 24px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="logo">Ancile AI</h1>
            <p class="tagline">Intelligent Solutions for Modern Business</p>
          </div>
          
          <div class="content">
            <h2 class="greeting">Hello ${name},</h2>
            
            <p class="message">
              Thank you for your interest in Ancile AI. We have successfully received your inquiry and appreciate you taking the time to reach out to us regarding ${company ? `${company}'s` : 'your'} AI solution needs.
            </p>
            
            <div class="next-steps">
              <h3>What Happens Next</h3>
              <ul class="steps-list">
                <li>Our solutions team will carefully review your inquiry within 4 business hours</li>
                <li>A senior consultant will contact you via your preferred communication method</li>
                <li>We'll schedule a personalized consultation to discuss your specific requirements</li>
                <li>You'll receive a tailored proposal outlining how we can best serve your needs</li>
              </ul>
            </div>
            
            <p class="message">
              In the meantime, if you have any urgent questions or additional information to share, please don't hesitate to reply to this email or contact us directly.
            </p>
          </div>
          
          <div class="footer">
            <p class="signature">
              Best regards,<br>
              <span class="company">The Ancile AI Team</span>
            </p>
            <div class="divider"></div>
            <p class="contact-info">
              Email: hello@ancile.io | Web: ancile.io<br>
              This email was sent in response to your inquiry on our website.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function generateContactEmail(name: string, email: string, company: string, message: string, phone?: string, submissionId?: number, submittedAt?: string): string {
  const id = submissionId || Math.floor(Math.random() * 100000);
  const time = submittedAt || new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Business Inquiry - ${company || name}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #374151; margin: 0; padding: 0; background-color: #f9fafb; }
          .container { max-width: 700px; margin: 0 auto; background-color: #ffffff; }
          .header { background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 32px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; }
          .header p { color: #fecaca; margin: 8px 0 0 0; font-size: 15px; }
          .priority-badge { display: inline-block; background-color: #ffffff; color: #dc2626; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 16px; }
          .content { padding: 32px; }
          .section { background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 24px; }
          .section h2 { color: #111827; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #f3f4f6; }
          .info-grid { display: grid; gap: 12px; }
          .info-item { display: flex; align-items: flex-start; }
          .info-label { font-weight: 600; color: #374151; min-width: 100px; margin-right: 16px; }
          .info-value { color: #111827; flex: 1; }
          .message-section { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; }
          .message-content { background-color: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap; font-family: inherit; line-height: 1.6; }
          .action-buttons { text-align: center; margin: 32px 0; }
          .btn { display: inline-block; padding: 12px 24px; margin: 0 8px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; }
          .btn-primary { background-color: #1e40af; color: #ffffff; }
          .btn-secondary { background-color: #f3f4f6; color: #374151; }
          .footer { background-color: #f9fafb; padding: 24px 32px; border-top: 1px solid #e5e7eb; }
          .submission-meta { background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; text-align: center; }
          .submission-meta p { margin: 0; color: #6b7280; font-size: 13px; }
          .submission-id { font-weight: 600; color: #374151; }
          .timestamp { color: #9ca3af; }
          .system-info { color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Business Inquiry</h1>
            <p>${company || 'Individual Prospect'} - Lead Notification</p>
            <div class="priority-badge">Action Required</div>
          </div>
          
          <div class="content">
            <div class="section">
              <h2>Contact Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Name:</span>
                  <span class="info-value">${name}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Email:</span>
                  <span class="info-value"><a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a></span>
                </div>
                <div class="info-item">
                  <span class="info-label">Company:</span>
                  <span class="info-value">${company || 'Not specified'}</span>
                </div>
                ${phone ? `
                <div class="info-item">
                  <span class="info-label">Phone:</span>
                  <span class="info-value"><a href="tel:${phone}" style="color: #1e40af; text-decoration: none;">${phone}</a></span>
                </div>
                ` : ''}
              </div>
            </div>

            <div class="message-section">
              <h2>Inquiry Details</h2>
              <div class="message-content">${message}</div>
            </div>

            <div class="action-buttons">
              <a href="mailto:${email}" class="btn btn-primary">Reply to Prospect</a>
              <a href="tel:${phone || ''}" class="btn btn-secondary" ${!phone ? 'style="display: none;"' : ''}>Call Now</a>
            </div>
          </div>
          
          <div class="footer">
            <div class="submission-meta">
              <p>
                <span class="submission-id">Submission ID: #${id.toString().padStart(6, '0')}</span><br>
                <span class="timestamp">Received: ${time}</span>
              </p>
            </div>
            <p class="system-info">
              Ancile AI Contact Management System<br>
              This notification was automatically generated from your website contact form.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { data, error } = await request.json();

    if (!data) {
      return Response.json({ error: 'Missing form data' }, { status: 400 });
    }

    if (!data.email) {
      return Response.json({ error: 'Customer email is required' }, { status: 400 });
    }

    // Send customer confirmation email
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: 'Ancile AI <noreply@ancile.io>',
      to: [data.email],
      subject: 'Thank you for your inquiry - Ancile AI',
      html: generateCustomerConfirmationEmail(data.name, data.company),
    });

    if (customerError) {
      console.error('Customer email error:', customerError);
      return Response.json({ error: 'Failed to send customer email', details: customerError }, { status: 500 });
    }

    // Send sales notification email
    const { data: salesData, error: salesError } = await resend.emails.send({
      from: 'Ancile AI Notifications <notifications@ancile.io>',
      to: ['sales@ancile.io'],
      subject: `New Business Inquiry: ${data.company || data.name}`,
      html: generateContactEmail(data.name, data.email, data.company, data.message, data.phone, data.submissionId, data.submittedAt),
      replyTo: data.email,
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