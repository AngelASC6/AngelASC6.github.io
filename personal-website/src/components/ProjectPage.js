// components/ProjectPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const ProjectPage = () => {
  const { projectName } = useParams();
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        // Fetch from public folder
        const response = await fetch(`/projectPages/${projectName}.md`);
        
        if (!response.ok) {
          throw new Error('Project not found');
        }
        
        const content = await response.text();
        setMarkdownContent(content);
        setError(null);
      } catch (err) {
        setError(`Project "${projectName}" not found`);
        console.error('Error loading markdown:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [projectName]);

  if (loading) {
    return <div className="loading">Loading project...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <h2>Project Not Found</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="project-page">
      <h1>{projectName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
      <div className="markdown-content">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectPage;