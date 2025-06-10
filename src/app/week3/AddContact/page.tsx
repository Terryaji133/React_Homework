"use client";

import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import NavBar from "@/components/NavBar";
import { InputTextarea } from "primereact/inputtextarea";

interface FormData {
  name: string; // 姓名
  email: string; // 電子郵件
  phone: string; // 密碼
  educational: string; // 性別
  remark:string;
}

export default function MemberForm() {
  // 表單狀態
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    educational: "",
    remark:"",
  });

  // 處理表單提交
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataString =
      "姓名: " +
      formData.name +
      "\n" +
      "電子郵件: " +
      formData.email +
      "\n" +
      "電話: " +
      formData.phone +
      "\n" +
      "學制: " +
      formData.educational +
      "\n";
      formData.remark +
      "\n";
    alert("表單資料: \n" + formDataString);
  };

  return (
    <div>
        <NavBar />
        <div className="flex justify-center items-center min-h-screen">
            <Card title="新增聯絡人" className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">姓名</label>
                        <InputText
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone">電話</label>
                        <InputText
                            id="phone"
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                        />
                    </div>

                   

                    <div className="flex flex-col gap-2">
                        <label>學制</label>
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <RadioButton
                                    inputId="university"
                                    name="educational"
                                    value="university"
                                    checked={formData.educational === "university"}
                                    onChange={(e) =>
                                        setFormData({ ...formData, educational: e.value })
                                    }
                                />
                                <label htmlFor="university" className="ml-2">大學部</label>
                            </div>
                            <div className="flex items-center">
                                <RadioButton
                                    inputId="master"
                                    name="educational"
                                    value="master"
                                    checked={formData.educational === "master"}
                                    onChange={(e) =>
                                        setFormData({ ...formData, educational: e.value })
                                    }
                                />
                                <label htmlFor="master" className="ml-2">碩士班</label>
                            </div>
                            <div className="flex items-center">
                                <RadioButton
                                    inputId="PhD"
                                    name="educational"
                                    value="PhD"
                                    checked={formData.educational === "PhD"}
                                    onChange={(e) =>
                                        setFormData({ ...formData, educational: e.value })
                                    }
                                />
                                <label htmlFor="PhD" className="ml-2">博士班</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">電子郵件</label>
                        <InputText
                            id="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2 h-auto">
                        <label htmlFor="remark">備註</label>
                        <InputTextarea
                            id="remark"
                            value={formData.remark}
                            onChange={(e) =>
                                setFormData({ ...formData, remark: e.target.value })
                            }
                            className="h-[123px] overflow-hidden"
                        />
                    </div>
                    <Button type="submit" label="註冊" className="mt-4" />
                </form>
            </Card>
        </div>
    </div>
  );
}