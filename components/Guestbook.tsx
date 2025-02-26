import { useState } from "react";

const Guestbook: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lời chúc đã gửi:", { name, phone, message });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Sổ Lưu Bút</h2>
      {submitted && (
        <p className="text-green-600 mb-4">Cảm ơn bạn đã gửi lời chúc!</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên người gửi"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Số điện thoại"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nhập lời chúc..."
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Gửi lời chúc
        </button>
      </form>
    </div>
  );
};

export default Guestbook;
