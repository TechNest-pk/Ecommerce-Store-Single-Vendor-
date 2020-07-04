import React from 'react';

//React Markdown HTML Viewer
import ReactMarkdown from 'react-markdown';

// Casecading Styleheet
import '../App.css';

export default function ProductOverview(props) {

    const { overview } = props;

    return (
        <React.Fragment>
            <ReactMarkdown
                source={overview}
                escapeHtml={false}
            />
        </React.Fragment>
    );
}