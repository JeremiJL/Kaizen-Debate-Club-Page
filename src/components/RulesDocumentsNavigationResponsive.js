import React, {useMemo, useRef, useState} from "react";

const TABS = [
    { id: "general", label: "General Rules" },
    { id: "kaizen_team_debate", label: "Kaizen Team Debate" },
    { id: "one_vs_all", label: "ONE VS ALL" },
    { id: "kaizen_policy_debate", label: "Kaizen Policy Debate" },
    { id: "unified_voice_variation", label: "Unified Voice Variation" },
    { id: "hot_potato_debate", label: "Warmup: Hot Potato Debate" },
    { id: "you_against_the_world", label: "Warmup: You against the world" },
];

export default function DocumentsNavigationResponsive({ onChange }) {
    const listRef = useRef(null);
    const [active, setActive] = useState(0);

    const select = (idx) => {
        setActive(idx);
        onChange?.(TABS[idx].id);
    };

    const scrollChips = (dir) => {
        const el = listRef.current;
        if (!el) return;
        const amount = Math.round(el.clientWidth * 0.7) * dir; // 70% of visible width
        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    return (
        <nav aria-label="Rules" className="pager">
            <button className="pager__arrow" aria-label="Scroll left" onClick={() => scrollChips(-1)}>
                <span aria-hidden="true">&laquo;</span>
            </button>

            <ul className="pagination pager__strip" ref={listRef}>
                {TABS.map((t, idx) => (
                    <li key={t.id} className="page-item">
                        <button
                            type="button"
                            className={`page-link ${idx === active ? "is-active" : ""}`}
                            onClick={() => select(idx)}
                            title={t.label}
                        >
                            {t.label}
                        </button>
                    </li>
                ))}
            </ul>

            <button className="pager__arrow" aria-label="Scroll right" onClick={() => scrollChips(1)}>
                <span aria-hidden="true">&raquo;</span>
            </button>
        </nav>
    );
}
