const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, scheduled_date, scheduled_time, timezone } =
      await req.json();

    if (!email || !scheduled_date || !scheduled_time) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const displayName = name || "there";

    const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,sans-serif;">
  <div style="max-width:520px;margin:0 auto;padding:40px 24px;">
    <h1 style="font-size:22px;font-weight:bold;color:#0a0a0a;margin:0 0 8px;">
      Booking Confirmed
    </h1>
    <p style="font-size:14px;color:#555;line-height:1.6;margin:0 0 24px;">
      Hi ${displayName}, your intro call has been scheduled successfully.
    </p>
    <div style="background:#f8f6f3;border-radius:8px;padding:20px;margin-bottom:24px;">
      <p style="margin:0 0 6px;font-size:14px;color:#0a0a0a;">
        <strong>Date:</strong> ${scheduled_date}
      </p>
      <p style="margin:0 0 6px;font-size:14px;color:#0a0a0a;">
        <strong>Time:</strong> ${scheduled_time}
      </p>
      <p style="margin:0;font-size:14px;color:#0a0a0a;">
        <strong>Timezone:</strong> ${timezone}
      </p>
    </div>
    <p style="font-size:14px;color:#555;line-height:1.6;margin:0 0 24px;">
      You'll receive a follow-up with meeting details shortly.
    </p>
    <p style="font-size:13px;color:#999;margin:0;">
      — Lazar Bukejlovic
    </p>
  </div>
</body>
</html>`;

    if (!LOVABLE_API_KEY) {
      console.warn("LOVABLE_API_KEY not set — skipping email send");
      return new Response(
        JSON.stringify({ success: false, reason: "email_not_configured" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailResponse = await fetch("https://api.lovable.dev/v1/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        to: email,
        subject: `Intro Call Confirmed — ${scheduled_date}`,
        html,
      }),
    });

    const result = await emailResponse.text();

    if (!emailResponse.ok) {
      console.error("Email API error:", emailResponse.status, result);
      return new Response(
        JSON.stringify({ success: false, reason: "email_send_failed" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
