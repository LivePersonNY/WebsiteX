import * as React from 'react';

const ContentToc = function (props) {
    return (
        <div
            data-localize={props.autoApprove && 'auto-approve'}
            autoapprove={props.autoApprove && 'true'}
            id={props.anchor}
            className={`pane comp-content-toc ${props.backgroundColor || 'bg-transparent'} ${props.cssClasses || ''}`}
        >
            <div className="comp-content-toc__inner">
                <aside className="comp-content-toc__toc" aria-label="Table of contents">
                    <nav className="comp-content-toc__nav"></nav>
                </aside>
                <div className="comp-content-toc__content">{props.body}</div>
            </div>
        </div>
    );
};

export default ContentToc;
