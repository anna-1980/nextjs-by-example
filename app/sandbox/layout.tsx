import { ReactNode } from "react";

interface SandboxLayoutProps {
  children: ReactNode;
}

export default function SandboxLayout({ children }: SandboxLayoutProps) {
  return (
    <>
    <div style={{ display: "flex", justifyContent:"space-between", width:"100%", backgroundColor:"wheat"}}>
      <p style={{ color: "red" }}>
          appears under every: <strong>/sandbox/(...)</strong>url
        </p>
      <div style={{border: "1px solid green", order:"2" }}>
        Nested Layouts for Sandbox
       <div style={{ color: "green" }}>Testing code space</div>
       
        <p>useful to for instance display a sidebar</p>
      </div>
      <div>{children}</div>
    </div>
    </>
  );
}
