"use client";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import NavBar from "@/components/NavBar";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";

interface User {
    name: string;
    educational: string;
    email: string;
    phone: string;
    remark: string;
    operate: string;
}

export default function ViewContact() {
    // 使用者資料
    // const [users, setUsers] = useState<User[]>([]);

    // 使用 useEffect 來取得使用者資料 因為沒有監聽任何變數 所以是頁面第一次載入時會執行
    // useEffect(() => {
    //     const data = userService.getUsers();
    //     setUsers(data);
    // }, []);

    // 狀態標籤模板
    // const statusTemplate = (rowData: User) => {
    //     return (
    //         <Tag
    //             value={rowData.operate === "active" ? "啟用" : "停用"}
    //             severity={rowData.operate === "active" ? "success" : "danger"}
    //         />
    //     );n    // };

    // 操作按鈕模板
    // const actionTemplate = (rowData: User) => {
    //     return (
    //         <div className="flex gap-2">
    //             <Button
    //                 icon="pi pi-pencil"
    //                 className="p-button-rounded p-button-info p-button p-component p-button-icon-only"
    //                 tooltip="編輯"
    //                 onClick={() => alert(`編輯 ${rowData.name}`)}
    //             />
    //             <Button
    //                 icon="pi pi-trash"
    //                 className="p-button-rounded p-button-danger p-button p-component p-button-icon-only"
    //                 tooltip="刪除"
    //                 onClick={() => alert(`刪除 ${rowData.name}`)}
    //             />
    //         </div>
    //     );n    // };

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        alert(`Searching for: ${searchQuery}`);
        // Here you would typically fetch data based on the searchQuery
    };

    return (
      <div>
        <NavBar />
        <Card className="min-h-screen w-full p-4 bg-gray-500">
            <div className="flex flex-col p-4">
                <h2 className="text-2xl font-bold mb-4">查詢聯絡人</h2>
                <div className="flex w-full max-w-xl gap-2">
                    <InputText
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="請輸入姓名或電話查詢"
                        className="flex-grow h-full"
                    />
                    <Button label="查詢" onClick={handleSearch} />
                </div>
            </div>
        </Card>
      </div>
    );
}
