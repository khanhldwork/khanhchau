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
    <section className="py-12 px-7">
      <div className="">
        <h2 className="text-center font-medium text-[28px] font-Lobster">Sổ Lưu Bút</h2>
        <p className="text-center text-[15px] mt-2 mb-6">Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!</p>
      </div>

      <div className="p-6 bg-primary shadow-md rounded-md">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên của bạn" className="bg-white py-5 text-[15px]" required />
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Nhập số điện thoại của bạn" className="bg-white py-5 text-[15px]" required />
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Nhập lời chúc của bạn" className="bg-white py-2.5 h-[120px] text-[15px]" required />
          <Button variant="outline" type="submit" disabled={loading} className="py-6 font-playwrite bg-white text-black font-extrabold uppercase rounded-xl w-full mt-1 text-[14px]">{loading ? "Đang gửi..." : "Gửi lời chúc"}</Button>
        </form>
        {submitted && <p className="text-green-600 mb-4">Cảm ơn bạn đã gửi lời chúc!</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}
      </div>
    </section>
  );
};

export default Guestbook;
