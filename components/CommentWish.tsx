"use client";

import { useEffect, useState } from "react";

interface Wish {
    _id: string;
    name: string;
    phone: string;
    message: string;
}

const CommentWish: React.FC = () => {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchWishes();
    }, []);

    const fetchWishes = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://weddingserver-1.onrender.com/wishes");
            if (!response.ok) {
                throw new Error("Không thể tải danh sách lời chúc!");
            }

            const data = await response.json();
            setWishes(data.reverse()); // Đảo ngược để hiển thị lời chúc mới nhất trước
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" mt-6">
            {!loading && !error && wishes.length === 0 && (
                <p className="text-gray-500">Chưa có lời chúc nào!</p>
            )}

            {!loading && !error && wishes.length > 0 && (
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