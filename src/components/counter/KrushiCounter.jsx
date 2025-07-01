import React, { useEffect, useState } from "react";
import "./KrushiCounter.css";
//Rushi
//Doke

const stats = [
    { icon: "fab fa-quora", label: "Quora Followers", target: 12000 },
    { icon: "fab fa-facebook", label: "Followers", target: 7500 },
    { icon: "fas fa-code", label: "Lines of Code", target: 100000 },
    { icon: "fas fa-check", label: "Projects Done", target: 12000 },
];

const CounterCard = ({ icon, label, target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let current = 0;
        const step = Math.ceil(target / 100);
        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            setCount(current);
        }, 10);
        return () => clearInterval(interval);
    }, [target]);

    return (
        <div className="card">
            <i className={icon}></i>
            <div className="number">{count.toLocaleString()}</div>
            {label}
        </div>
    );
};

const KrushiCounter = () => {
    return (
        <div className="container">
            {stats.map((item, index) => (
                <CounterCard key={index} {...item} />
            ))}
        </div>
    );
};

export default KrushiCounter;
