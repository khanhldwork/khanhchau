"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import CommentWish from "./CommentWish";

interface Wish {
  _id: string;
  name: string;
  phone: string;
  message: string;
}

const Guestbook: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

      toast("Gửi lời chúc thành công!", {
        description: "Cảm ơn bạn đã đồng hành cùng chúng tôi!",
        action: {
          label: "Đóng",
          onClick: () => console.log("Đóng thông báo"),
        },
      });

      setName("");
      setPhone("");
      setMessage("");

      // Gọi lại API để cập nhật danh sách lời chúc
      fetchWishes();
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      toast("Gửi lời chúc thất bại!", {
        description: "Vui lòng thử lại sau.",
        action: {
          label: "Đóng",
          onClick: () => console.log("Đóng thông báo lỗi"),
        },
      });
    }
  };

  // Hàm fetch lời chúc (truyền xuống CommentWish)
  const fetchWishes = async () => {
    try {
      const response = await fetch("https://weddingserver-1.onrender.com/wishes");
      if (!response.ok) {
        throw new Error("Không thể tải danh sách lời chúc!");
      }

      const data = await response.json();
      setWishes(data.reverse());
    } catch (error) {
      console.error("Lỗi khi tải lời chúc:", error);
    }
  };

  return (
    <section className="py-12 px-7">
      <div className="">
        <h2 className="text-center font-bold text-[28px] font-great-vibes">Sổ Lưu Bút</h2>
        <p className="text-center text-[15px] mt-2 mb-6">
          Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!
        </p>
      </div>

      <div className="p-6 bg-primary shadow-md rounded-md">
        <form onSubmit={handleSubmit} className="grid gap-3">
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên của bạn" className="bg-white py-5 text-[15px]" required />
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Nhập số điện thoại của bạn" className="bg-white py-5 text-[15px]" required />
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Nhập lời chúc của bạn" className="bg-white py-2.5 h-[120px] text-[15px]" required />
          <Button variant="outline" type="submit" className="py-6 bg-white text-black fon-bold uppercase rounded-xl w-full mt-1 text-[14px]">Gửi lời chúc</Button>
        </form>
      </div>

      <CommentWish wishes={wishes} fetchWishes={fetchWishes} />
    </section>
  );
};

export default Guestbook;