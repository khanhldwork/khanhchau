"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Guestbook: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://weddingserver-1.onrender.com/wishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, message }),
      });

      if (!response.ok) {
        throw new Error("Gửi lời chúc thất bại, vui lòng thử lại!");
      }

      console.log("Lời chúc đã gửi:", { name, phone, message });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);

      setName("");
      setPhone("");
      setMessage("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F0F5F3] py-10">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-center font-medium text-[26px]">Sổ Lưu Bút</h2>
        <p className="text-center text-[15px] mt-2 mb-6">Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!</p>
      </div>

      <div className="max-w-[90%] mx-auto p-6 bg-[#DBE3E2] rounded-md">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên của bạn" className="bg-white py-4 text-[15px]" required />
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Nhập số điện thoại của bạn" className="bg-white py-4 text-[15px]" required />
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Nhập lời chúc của bạn" className="bg-white py-2.5 h-[100px] text-[15px]" required />
          <Button type="submit" disabled={loading} className="py-5 bg-red-500  text-white rounded-2xl w-full mt-1 text-[15px]">{loading ? "Đang gửi..." : "Gửi lời chúc"}</Button>
        </form>
        {submitted && <p className="text-green-600 mb-4">Cảm ơn bạn đã gửi lời chúc!</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}
      </div>
    </section>
  );
};

export default Guestbook;
