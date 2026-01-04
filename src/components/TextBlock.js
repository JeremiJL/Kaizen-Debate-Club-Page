import React from "react";

const hasContent = (v) => {
    if (v === null || v === undefined) return false;
    if (typeof v === "string") return v.trim().length > 0;
    return true;
};

export default function TextBlock({
                                      sideNoteContent,
                                      h2Content,
                                      pContent,
                                      children,
                                      showDivider = true,
                                  }) {
    return (
        <div className="content-block pt-0">
            {hasContent(sideNoteContent) && (
                <p className="side-note">{sideNoteContent}</p>
            )}
            {hasContent(h2Content) && <h2>{h2Content}</h2>}
            {hasContent(pContent) && <p>{pContent}</p>}
            {hasContent(children) && <div className="pb-1">{children}</div>}
            {showDivider && <hr />}
        </div>
    );
}
