"use client";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import NavBar from "@/components/NavBar";

interface User {
    name: string;
    educational: string;
    email: string;
    phone: string;
    remark: string;
    operate: string;
}
const userService = {
    getUsers: (): User[] => {
        return [
            {
                name: "王小明",
                email: "ming@example.com",
                phone: "0903013690",
                operate: "active",
                remark: "111",
                educational: "大學部",
            },
            {
                name: "李小華",
                email: "hua@example.com",
                phone: "0903013690",
                operate: "active",
                remark: "111",
                educational: "大學部"
            },
            {
                name: "張小美",
                email: "mei@example.com",
                phone: "0903013690",
                remark: "111",
                educational: "大學部",
                operate: "active"
            },
        ];
    }
}

export default function UserList() {
    // 使用者資料
    const [users, setUsers] = useState<User[]>([]);

    // 使用 useEffect 來取得使用者資料 因為沒有監聽任何變數 所以是頁面第一次載入時會執行
    useEffect(() => {
        const data = userService.getUsers();
        setUsers(data);
    }, []);

    // 狀態標籤模板
    const statusTemplate = (rowData: User) => {
        return (
            <Tag
                value={rowData.operate === "active" ? "啟用" : "停用"}
                severity={rowData.operate === "active" ? "success" : "danger"}
            />
        );
    };

    // 操作按鈕模板
    const actionTemplate = (rowData: User) => {
        return (
            <div className="flex gap-2">
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-info p-button p-component p-button-icon-only"
                    tooltip="編輯"
                    onClick={() => alert(`編輯 ${rowData.name}`)}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger p-button p-component p-button-icon-only"
                    tooltip="刪除"
                    onClick={() => alert(`刪除 ${rowData.name}`)}
                />
            </div>
        );
    };

    return (
      <div>
        <NavBar />
        <div className="card">
            <h2 className="text-2xl font-bold mb-4 mt-4">聯絡人列表</h2>
            <DataTable
                value={users}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="顯示第 {first} 到 {last} 筆，共 {totalRecords} 筆"
                className="p-datatable-sm"
            >
                <Column
                    field="name"
                    header="姓名"
                    sortable
                    className="w-[15%]"
                />
                 <Column
                    field="educational"
                    header="學制"
                    sortable
                    className="w-[15%]"
                />
                <Column
                    field="email"
                    header="電子郵件"
                    sortable
                    className="w-[25%]"
                />
                <Column
                    field="phone"
                    header="電話"
                    sortable
                    className="w-[15%]"
                />
                 <Column
                    field="operate"
                    header="操作"
                    body={actionTemplate}
                    className="w-[15%]"
                />
            </DataTable>
        </div>
      </div>  
    );
}
