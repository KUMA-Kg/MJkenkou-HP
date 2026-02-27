export async function POST(req) {
  try {
    const { name, tel, email, message } = await req.json();

    if (!message || !String(message).trim()) {
      return Response.json(
        { ok: false, error: "お問い合わせ内容は必須です。" },
        { status: 400 }
      );
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM,
        to: ["mjkk.contact@gmail.com"],
        reply_to: email || undefined,
        subject: `【お問い合わせ】${name || "お客様"}`,
        text: [
          "お問い合わせが届きました。",
          "",
          `■お名前：${name || ""}`,
          `■電話番号：${tel || ""}`,
          `■メール：${email || ""}`,
          "",
          "■お問い合わせ内容",
          message || "",
        ].join("\n"),
      }),
    });

    const result = await resendRes.json();

    if (!resendRes.ok) {
      return Response.json(
        { ok: false, error: result?.message || "送信に失敗しました。" },
        { status: 500 }
      );
    }

    return Response.json({ ok: true, result });
  } catch (error) {
    console.error(error);
    return Response.json(
      { ok: false, error: "送信に失敗しました。" },
      { status: 500 }
    );
  }
}
