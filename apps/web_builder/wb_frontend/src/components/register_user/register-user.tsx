import React, { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);  
  const [errorMessage, setErrorMessage] = useState("");  
  const [successMessage, setSuccessMessage] = useState("");  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp. Vui lòng thử lại.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:4000/dev/register", {
        username,
        password,
      });

      if (response.status === 201) {
        setSuccessMessage(`Đăng ký thành công: ${response.data.message}`);
      } else {
        setErrorMessage("Đăng ký không thành công. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi trong quá trình đăng ký:", error);
      setErrorMessage("Đã xảy ra lỗi. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Đăng ký</h1>

        {/* Username Field */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Tên người dùng
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Nhập tên người dùng"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Nhập mật khẩu"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Xác nhận mật khẩu
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Xác nhận mật khẩu"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          disabled={loading}  
        >
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </button>

        {/* Success or Error message */}
        {successMessage && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4 text-center">{errorMessage}</p>}

        <p className="text-center text-sm text-gray-500 mt-4">
          Bạn đã có tài khoản? {" "}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Đăng nhập
          </a>
        </p>
      </form>
    </div>
  );
};
