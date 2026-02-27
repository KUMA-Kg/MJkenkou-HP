"use client";
import React, { useState } from "react";

type Props = {
  cfg?: any;
};

export default function Contact({ cfg }: Props) {
  const toEmail = "mjkk.contact@gmail.com";

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("お問い合わせ内容を入力してください。");
      return;
    }

    try {
      setIsSending(true);
      setStatus("");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          tel,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "送信に失敗しました。");
      }

      setStatus("送信しました。ありがとうございます。");
      setName("");
      setTel("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus(err.message || "送信に失敗しました。");
    } finally {
      setIsSending(false);
    }
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
              type="email"
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

          <button type="submit" style={buttonStyle} disabled={isSending}>
            {isSending ? "送信中..." : "送信する"}
          </button>

          {status && <p style={{ fontSize: 13 }}>{status}</p>}

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
