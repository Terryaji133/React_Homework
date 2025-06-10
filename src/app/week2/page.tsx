"use client";
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

interface FormData {
    email: string; // 帳號
    password: string; // 密碼
    rememberMe: boolean; // 記住我
}

export default function LoginForm() {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        rememberMe: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
    const [loading, setLoading] = useState(false);
    const validateForm = (data: FormData) => {
        const newErrors: { [key: string]: string | null } = {};
        if (!data.email) {
            newErrors.email = "帳號不能為空";
        } else {
            newErrors.email = null;
        }
        if (data.password.length < 6) {
            newErrors.password = "密碼長度至少 6 個字元";
        } else {
             newErrors.password = null;
        }
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);


        const hasErrors = Object.values(validationErrors).some(error => error !== null);

        if (!hasErrors) {
          setLoading(true); // Start loading
          // Simulate an async operation (replace with actual backend call later)
          alert(
              `登入資訊：\nEmail：${formData.email}\n密碼：${formData.password}\n記住我：${formData.rememberMe}`
          );
          setLoading(false); // End loading
          // Here you would typically send the data to your backend
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Card className="w-96" title="登入">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="block font-medium text-gray-700"
                        >
                            帳號
                        </label>
                        <InputText
                            id="email"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                setErrors(prev => ({ ...prev, email: null })); // Clear error on change
                            }}
                            className={`w-full p-2 border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                            aria-describedby="email-help"
                        />
                        {errors.email && <small id="email-help" className="p-error block text-red-500 text-xs mt-1">{errors.email}</small>}
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="block font-medium text-gray-700"
                        >
                            密碼
                        </label>
                        <InputText
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => {
                                setFormData({ ...formData, password: e.target.value });
                                setErrors(prev => ({ ...prev, password: null })); // Clear error on change
                            }}
                             className={`w-full p-2 border rounded-md focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                            aria-describedby="password-help"
                        />
                         {errors.password && <small id="password-help" className="p-error block text-red-500 text-xs mt-1">{errors.password}</small>}
                    </div>
                    <div className="flex items-center">
                        <Checkbox
                            inputId="rememberMe"
                            checked={formData.rememberMe}
                            onChange={(e) =>
                                setFormData({ ...formData, rememberMe: e.checked ?? false })
                            }
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-gray-700">
                            記住我
                        </label>
                    </div>
                    <Button    
                        label={loading ? "請稍後..." : "登入"} 
                        icon={loading ? "pi pi-spin pi-spinner" : null}
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                    />
                </form>
                <div className="mt-4 text-center">
                  <a href="/week2/forgetPassword" className="text-sm text-blue-500 hover:underline">忘記密碼?</a>
                </div>
                <div className="mt-4 text-center">
                  <a href="/week2/newAccount" className="text-sm text-blue-500 hover:underline">註冊新帳號</a>
                </div>
            </Card>
        </div>
    );
}
