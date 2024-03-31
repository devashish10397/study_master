import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function VideoSummaryForm() {
    const [url, setUrl] = useState('');
    const [file, setFile] = useState(null);
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSummarize = async () => {
        setLoading(true);
        try {
            setError('');
            const formData = new FormData();
            let endpoint;
            if (url) {
                // console.log('URL:', url);
                formData.append('youtubeUrl', url);
                endpoint = 'http://localhost:5000/api/summarize-url';
            }
            if (file) {
                // console.log('File:', file);
                formData.append('pdfFile', file);
                endpoint = 'http://localhost:5000/api/summarize-pdf';
            }
            if (!url && !file) {
                throw new Error('Either URL or file must be provided');
            }
            const response = await axios.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { transcript } = response.data;
            const lines = transcript.split('\n');
            
            let tableRows = lines.map((line, index) => <tr key={index}><td>{line}</td></tr>);
            
            setSummary(tableRows);

        } catch (error) {
            console.error('Error:', error.message);
            console.error('Full error:', error);
            setError('Error summarizing video. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="input-container">
                <input
                    type="text"
                    id="youtubeUrl"
                    placeholder="Enter YouTube URL"
                    value={url}
                    onChange={handleUrlChange}
                />
                <span style={{ color: '#1877F2' }}> / </span>
                <input
                    type="file"
                    id="pdfFile"
                    accept=".pdf"
                    onChange={handleFileChange}
                />
            </div>
            <button className="grow-btn" onClick={handleSummarize} disabled={loading}>
                {loading ? 'Summarizing...' : 'Get Summary'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {summary && (
                <div>
                    <h3 style={{ color: '#1877F2' }}>Summary:</h3>
                    {/* <p style={{ color: '#1877F2' }}>{summary}</p> */}
                    <table style={{ color: '#1877F2' }}>
                        <tbody>
                            {summary}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
    
}

export default VideoSummaryForm;
