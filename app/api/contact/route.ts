import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.NEXT_PUBLIC_EMAIL_API_KEY!);

sendgrid.setApiKey(process.env.EMAIL_API_KEY!);

export async function POST(request: NextRequest) {
  const data = await request.json();
  try {
    const msg: any = {
      //   to: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_TO, // Your email where you'll receive emails
      //   from: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_FROM, // your website email address here
      to: process.env.SENDGRID_EMAIL_TO,
      from: process.env.SENDGRID_EMAIL_FROM,
      replyTo: data?.email,
      body: data?.message,
      //   subject: `[Lead from website]`,
      subject: data?.subject,
      html: data?.htmlContent,
    };

    const res = await sendgrid.send(msg);
    return NextResponse.json(res[0].statusCode);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: error?.code || 400 },
    );
  }
}
