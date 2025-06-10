"use client";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const items = [
    {
        label: "首頁",
        icon: "pi pi-home",
        command: () => router.push("/"),
    },
    {
        label: "新增聯絡人",
        icon: "pi pi-user",
        command: () => router.push("/week3/AddContact"),
    },
    {
        label: "檢視聯絡人",
        icon: "pi pi-user",
        command: () => router.push("/week3/ViewContact"),
    },
    {
        label: "聯絡人管理",
        icon: "pi pi-user",
        command: () => router.push("/week3/ContactManagement"),
    },
    {
        label: "訂單填寫",
        icon: "pi pi-shopping-cart",
        command: () => router.push("/week3/Order"),
    },
    {
      label: "--------->>>",
    },
    {
      label: "註冊",
      icon: "pi pi-user",
      command: () => router.push("/week3/Register"),
    },
    {
      label: "登入",
      icon: "pi pi-user",
      command: () => router.push("/week3/Login"),
    },
    {
      label: "會員管理",
      icon: "pi pi-user",
      command: () => router.push("/week3/MemberManagement"),
    },
  ];
  const end = (
    <div className="flex align-items-center gap-2">
      <Button icon="pi pi-user" rounded text />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} end={end} />
    </div>
  );
}