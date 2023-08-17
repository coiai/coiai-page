import * as React from 'react';

import BottomNav from './BottomNav';
import SideNav from './SideNav';

export default function Navigation() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1020); // 1020はスマートフォンの幅を表す値です
    };

    handleResize(); // 初回のレンダリング時にも実行する
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <BottomNav /> : <SideNav />}
    </>
  );
}
