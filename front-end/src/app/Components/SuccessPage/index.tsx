import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SuccessPage = () => {
  const router = useRouter();
  return (
    <div className="success-container">
      <div className="logo-position">CobbleWeb</div>
      <div className="success-text">Success</div>
      <div className="success-text-instractions">
        Click on the button below to go to login page
      </div>
      <button className="button" onClick={() => router.push("/login")}>
        Go to login
      </button>
    </div>
  );
};

export default SuccessPage;
