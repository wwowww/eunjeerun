import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(()=> {
    const mobile = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    mobile ? setIsMobile(true) : setIsMobile(false);
  },[isMobile])

  return isMobile;
}