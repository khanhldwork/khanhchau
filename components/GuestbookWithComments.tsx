"use client";

import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface Wish {
  _id: string;
  name: string;
  phone: string;
  message: string;
}

const GuestbookWithComments: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
        description:
          "Chúng tôi vô cùng trân trọng và biết ơn lời chúc phúc của bạn dành cho ngày trọng đại của chúng tôi. Cảm ơn bạn đã chia sẻ niềm vui này cùng chúng tôi!",
        action: {
          label: "Đóng",
          onClick: () => console.log("Đóng thông báo"),
        },
      });

      setName("");
      setPhone("");
      setMessage("");
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
    } finally {
      setLoading(false);
    }
  };

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

  const handleShowMore = () => {
    setShowAll(true);
  };

  const visibleWishes = showAll ? wishes : wishes.slice(0, 3);

  return (
    <section className="py-12 px-7">
      <div>
        <h2 className="text-center font-bold text-[28px] font-great-vibes">Sổ Lưu Bút</h2>
        <p className="text-center text-[15px] mt-2 mb-6">
          Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!
        </p>
      </div>

      <div className="p-6 bg-primary shadow-md rounded-md">
        <form onSubmit={handleSubmit} className="grid gap-3">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của bạn"
            className="bg-white py-5 text-[15px]"
            required
          />
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Nhập số điện thoại của bạn"
            className="bg-white py-5 text-[15px]"
            required
          />
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Nhập lời chúc của bạn"
            className="bg-white py-2.5 h-[120px] text-[15px]"
            required
          />
          <Button
            variant="outline"
            type="submit"
            className="py-6 bg-white text-black font-semibold uppercase rounded-xl w-full mt-1 text-[14px]"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                Đang gửi...
              </>
            ) : (
              "Gửi lời chúc"
            )}
          </Button>
        </form>
      </div>

      <div className="p-6 bg-primary shadow-md mt-2 rounded-md">
        {wishes.length === 0 ? (
          <div className="px-4 py-3 border rounded-lg shadow-sm bg-gray-50 text-center">
            <h3 className="font-semibold text-sm text-gray-900 uppercase">Đang tải lời chúc...</h3>
          </div>
        ) : (
          <div className="space-y-2">
            {visibleWishes.map((wish) => (
              <div key={wish._id} className="px-4 py-3 border rounded-lg shadow-sm bg-gray-50">
                <h3 className="font-semibold text-sm text-gray-900 uppercase">{wish.name}</h3>
                <p className="text-gray-700 mt-1 text-sm">{wish.message}</p>
              </div>
            ))}
            {!showAll && wishes.length > 3 && (
              <div className="flex justify-center">
                <Button variant="outline" onClick={handleShowMore} className="px-6 mt-3">
                  Xem thêm {wishes.length - visibleWishes.length} lời chúc
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GuestbookWithComments;