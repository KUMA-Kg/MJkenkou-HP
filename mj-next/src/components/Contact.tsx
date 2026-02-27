"use client";
import React, { useMemo, useState } from "react";

type Props = {
  cfg?: any;
};

export default function Contact({ cfg }: Props) {
  const toEmail = "mjkk.contact@gmail.com";
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `【お問い合わせ】${name || "お客様"}様`;
    const bodyLines = [
      "お問い合わせが届きました。",
      "",
      `■お名前：${name}`,
      `■電話番号：${tel}`,
      `■メール：${email}`,
      "",
      "■お問い合わせ内容",
      message,
      "",
      "（このメールはWebサイトのお問い合わせフォームから作成されました）",
    ];
    const body = bodyLines.join("\n");

    // mailto はURLエンコード必須
    const params = new URLSearchParams({
      subject,
      body,
    });

    return `mailto:${toEmail}?${params.toString()}`;
  }, [name, tel, email, message]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 入力チェック（最低限）
    if (!message.trim()) {
      alert("お問い合わせ内容を入力してください。");
      return;
    }
    // メーラー起動
    window.location.href = mailtoHref;
  };

  return (
    <section id="contact" className="column">
      <h2>
        <span>お問い合わせ</span>CONTACT
      </h2>

      <form onSubmit={onSubmit} style={{ marginTop: "6vw" }}>
        <div style={{ display: "grid", gap: "12px" }}>
          <label>
            お名前
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例）山田 太郎"
              style={inputStyle}
            />
          </label>

          <label>
            電話番号
            <input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="例）090-xxxx-xxxx"
              style={inputStyle}
            />
          </label>

          <label>
            メールアドレス
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="例）example@gmail.com"
              style={inputStyle}
            />
          </label>

          <label>
            お問い合わせ内容（必須）
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="ご相談内容をご記入ください"
              rows={6}
              style={{ ...inputStyle, resize: "vertical" }}
              required
            />
          </label>

          <button type="submit" style={buttonStyle}>
            メールを作成して送る
          </button>

          <p style={{ fontSize: 12, opacity: 0.75 }}>
            ※送信ボタンを押すとメールアプリが開きます。メール送信は端末側で行われます。
          </p>

          <p style={{ fontSize: 12 }}>
            直接メール：{" "}
            <a href={`mailto:${toEmail}`} style={{ textDecoration: "underline" }}>
              {toEmail}
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  padding: "12px 12px",
  border: "1px solid rgba(0,0,0,.2)",
  borderRadius: 6,
  fontSize: 14,
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 12px",
  borderRadius: 6,
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
  background: "var(--accent)",
  color: "#fff",
};
