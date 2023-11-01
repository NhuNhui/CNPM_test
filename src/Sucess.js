import React, { useState, useEffect } from 'react';
import './Success.css'

export const Success = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  }, [isVisible]);

  return (
    <div className="success">
      {!isVisible && <div>Thêm máy in thành công</div>}
    </div>
  );
}


