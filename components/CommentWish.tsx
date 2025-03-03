"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface Wish {
  _id: string;
  name: string;
  phone: string;
  message: string;
}

interface Props {
  wishes: Wish[];
  fetchWishes: () => void;
}

const CommentWish: React.FC<Props> = ({ wishes, fetchWishes }) => {
  const [visibleWishes, setVisibleWishes] = useState<Wish[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchWishes();
  }, []);

  useEffect(() => {
    setVisibleWishes(wishes.slice(0, 3));
  }, [wishes]);

  const handleShowMore = () => {
    setShowAll(true);
    setVisibleWishes(wishes);
  };

  return (
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
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={handleShowMore}
                className="px-6"
              >
                Xem thêm
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentWish;
