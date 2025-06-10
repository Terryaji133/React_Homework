'use client';
import { Button } from "primereact/button";
// 練習1：使用常數渲染
const strHello = "Hello World!";

// 練習2：使用函數傳入參數
function returnHello(name: string) {
  return <div>你好！{name}</div>;
}
function handleClick() {
    alert("新年快樂");
    return;
}
export default function Week1() {

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Week 1</h1>
      
      {/* 練習1：常數渲染 */}
      <div className="p-4 border rounded-lg">
        <h1 className="text-xl font-semibold mb-2">練習1：常數渲染</h1>
        <h2 className="text-lg">{strHello}</h2>
      </div>

      {/* 練習2：函數參數渲染 */}
      <div className="p-4 border rounded-lg">
        <h1 className="text-xl font-semibold mb-2">練習2：函數參數渲染</h1>
        <h2 className="text-lg">{returnHello("小明")}</h2>
      </div>

      {/* 練習3：按鈕事件處理 */}
      <div className="p-4 border rounded-lg">
        <h1 className="text-xl font-semibold mb-2">練習3：按鈕事件處理</h1>
        <Button label="Click me  按下我" icon="pi pi-car" onClick={handleClick}/>
      </div>
    </div>
  );
} 