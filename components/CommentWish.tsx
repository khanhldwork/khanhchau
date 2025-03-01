"use client";

import { useEffect } from "react";

interface Wish {
  _id: string;
  name: string;
  phone: string;
  message: string;
}

interface Props {
  wishes: Wish[];
  fetchWishes: () => void; // Nhận hàm fetch từ Guestbook
}

const CommentWish: React.FC<Props> = ({ wishes, fetchWishes }) => {
  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <div className="mt-6">
      {wishes.length === 0 ? (
        <p className="text-gray-500">Chưa có lời chúc nào!</p>
      ) : (
        <div className="space-y-2">
          {wishes.map((wish) => (
            <div key={wish._id} className="px-4 py-3 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="font-semibold text-sm text-gray-900">{wish.name}</h3>
              <p className="text-gray-700 mt-1 text-sm">{wish.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentWish;