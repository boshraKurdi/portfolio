import { useEffect, useRef, useState } from "react";

export default function Cycle({num}) {
    const dash = 85 * Math.PI * 2;
    const targetOffset = dash - (dash * num) / 100;
    const [offset, setOffset] = useState(dash); // ابدأ من القيمة القصوى
    const cycleRef = useRef(null); // مرجع للعنصر لمراقبته

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // تحقق إذا كان العنصر مرئيًا
                if (entries[0].isIntersecting) {
                    setOffset(targetOffset); // ابدأ التحريك عندما يصبح العنصر مرئيًا
                }else{
                    setOffset(dash)
                }
            },
            { threshold: 0.5 } // 50% من العنصر يجب أن يكون ظاهرًا
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
    }, [targetOffset]);

    return (
        <div className="cycle" ref={cycleRef}>
            <svg width="250" height="250">
                <circle
                    cx="125"
                    cy="125"
                    r="85"
                    strokeWidth="19px"
                    className="cycle-bg"
                ></circle>
                <circle
                    cx="125"
                    cy="125"
                    r="85"
                    strokeWidth="19px"
                    style={{
                        strokeDasharray: dash,
                        strokeDashoffset: offset,
                        transition: "stroke-dashoffset 1s ease-out" // إضافة التحريك السلس
                    }}
                    className="cycle-prog"
                ></circle>
                <text x="50%" y="50%" textAnchor="middle" dy=".3em">{num}%</text>
            </svg>
            <div className="inner">
                <h1>{num}%</h1>
            </div>
        </div>
    );
}
