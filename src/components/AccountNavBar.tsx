"use client";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const items = [
    {
        label: "首頁 Home",
        icon: "pi pi-home",
        command: () => router.push("/"),
    },
    {
        label: "新增聯絡人 AddContact",
        icon: "pi pi-user",
        command: () => router.push("/week3/AddContact"),
    },
    {
        label: "檢視聯絡人 ViewContact",
        icon: "pi pi-user",
        command: () => router.push("/week3/ViewContact"),
    },
    {
        label: "聯絡人管理 Member Management",
        icon: "pi pi-user",
        command: () => router.push("/week3/ContactManagement"),
    },
    {
        label: "訂單填寫 Order",
        icon: "pi pi-shopping-cart",
        command: () => router.push("/week3/Order"),
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