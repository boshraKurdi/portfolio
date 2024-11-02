import { useEffect, useRef, useState } from "react";

export default function Progress({title , hand}) {
    const [offset, setOffset] = useState(0);
    const cycleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setOffset(hand)
                }else{
                    setOffset(0)
                }
            },
            { threshold: 0.5 }
        );

        if (cycleRef.current) {
            observer.observe(cycleRef.current);
        }

        // تنظيف المراقب عند إزالة المكون
        return () => {
            if (cycleRef.current) {
                observer.unobserve(cycleRef.current);
            }
        };
    }, [hand]);
  return (
    <div className="ex-item" ref={cycleRef}>
      <div className="ex-info">
        <div className="p">{title}</div>
        <div className="p">{offset}%</div>
      </div>
      <div className="prog-line" data-p={offset+''}>
        <span style={{ width: offset+'%' }}></span>
      </div>
    </div>
  );
}
