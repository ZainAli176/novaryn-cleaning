import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, zip, email, service, message } = body;

    if (!firstName || !phone || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Novaryn Cleaning <onboarding@resend.dev>",
        to: ["Novaryncleaning@gmail.com"],
        reply_to: email,
        subject: `New Booking Request — ${service}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f0f7ff;border-radius:12px;">
            
            <div style="background:#1A6FD4;padding:24px;border-radius:10px 10px 0 0;text-align:center;">
              <h1 style="color:white;margin:0;font-size:22px;">📋 New Booking Request</h1>
              <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Novaryn Cleaning — Atlanta, GA</p>
            </div>

            <div style="background:white;padding:28px;border-radius:0 0 10px 10px;border:1px solid #DCE8F5;border-top:none;">

              <div style="background:#E8F2FD;border-left:4px solid #1A6FD4;padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:24px;">
                <p style="margin:0;font-size:13px;font-weight:600;color:#1A6FD4;text-transform:uppercase;letter-spacing:0.5px;">Service Requested</p>
                <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:#0F1923;">${service}</p>
              </div>

              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;width:38%;font-size:13px;color:#5A6A7A;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Name</td>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:15px;font-weight:600;color:#0F1923;">${firstName} ${lastName || ""}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#5A6A7A;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Phone</td>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;"><a href="tel:${phone}" style="font-size:15px;font-weight:600;color:#1A6FD4;text-decoration:none;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#5A6A7A;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Email</td>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;"><a href="mailto:${email}" style="font-size:15px;font-weight:600;color:#1A6FD4;text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#5A6A7A;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">ZIP Code</td>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#0F1923;">${zip || "—"}</td>
                </tr>
                ${
                  message
                    ? `
                <tr>
                  <td style="padding:12px 0;font-size:13px;color:#5A6A7A;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Message</td>
                  <td style="padding:12px 0;font-size:15px;color:#0F1923;line-height:1.6;">${message}</td>
                </tr>`
                    : ""
                }
              </table>

              <div style="margin-top:24px;padding:16px;background:#f9fafb;border-radius:8px;text-align:center;">
                <p style="margin:0;font-size:13px;color:#5A6A7A;">Reply directly to this email to respond to <strong>${firstName}</strong>.</p>
              </div>

            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
