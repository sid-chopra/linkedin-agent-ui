import React, { useState } from 'react'
import './App.scss'
import axios from 'axios'

const API_URL = 'https://linkedin-agent-production-8ca7.up.railway.app'

const TOPICS = [
  { label: '🅰️ Angular', value: 'Angular', hint: 'Share something new, practical or exciting in the Angular ecosystem' },
  { label: '🤖 AI & Tech', value: 'AI and frontend tech', hint: 'Share a fresh insight or finding about AI trends and tools. Maintain a motivational tone' },
  { label: '🧭 Leadership', value: 'Leadership and tech emergence', hint: 'Share a lesson or observation about leading teams in a fast changing tech world' },
  { label: '🎲 Random', value: null, hint: null },
]

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [hint, setHint] = useState('')
  const [post, setPost] = useState('')
  const [loading, setLoading] = useState(false)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null) // { type: 'success' | 'error', message: '' }

  const handleGenerate = async () => {
    if (!selectedTopic) return alert('Please select a topic first!')

    // If random, pick one from the first 3
    const topic = selectedTopic.value
      ? selectedTopic
      : TOPICS[Math.floor(Math.random() * 3)]

    setLoading(true)
    setPost('')
    setStatus(null)

    try {
      const res = await axios.post(`${API_URL}/generate-post`, {
        topic: topic.value,
        hint: hint || topic.hint
      })
      setPost(res.data.post)
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to generate post. Try again!' })
    } finally {
      setLoading(false)
    }
  }

  const handleSend = async () => {
    if (!post) return
    setSending(true)
    setStatus(null)

    try {
      await axios.post(`${API_URL}/send-draft`, {
        topic: selectedTopic?.value || 'Random',
        post
      })
      setStatus({ type: 'success', message: '📧 Draft sent to your email!' })
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send email. Try again!' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="app">
      <div className="header">
        <h1>LinkedIn Post Agent 🤖</h1>
        <p>Generate, edit and send your weekly post</p>
      </div>

      <div className="content">

        {/* Topic Selection */}
        <div className="card">
          <h2>Choose a Topic</h2>
          <div className="topic-grid">
            {TOPICS.map((t) => (
              <button
                key={t.label}
                className={`topic-btn ${selectedTopic?.label === t.label ? 'selected' : ''}`}
                onClick={() => setSelectedTopic(t)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hint Input */}
        <div className="card">
          <h2>Add a Hint (optional)</h2>
          <textarea
            className="hint-input"
            rows={2}
            placeholder="e.g. Focus on Angular signals and performance..."
            value={hint}
            onChange={(e) => setHint(e.target.value)}
          />
        </div>

        {/* Generate Button */}
        <button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={loading || !selectedTopic}
        >
          {loading ? '⏳ Generating...' : '✨ Generate Post'}
        </button>

        {/* Generated Post */}
        {loading && <p className="loading-text">🤖 Talking to Groq AI... hang tight!</p>}

        {post && (
          <div className="card">
            <h2>Your Post — Edit if needed</h2>
            <textarea
              className="post-textarea"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
            <div className="action-row">
              <button className="retry-btn" onClick={handleGenerate} disabled={loading}>
                🔄 Retry
              </button>
              <button className="send-btn" onClick={handleSend} disabled={sending}>
                {sending ? 'Sending...' : '📧 Send to Email'}
              </button>
            </div>
          </div>
        )}

        {/* Status Message */}
        {status && (
          <p className={`status-msg ${status.type}`}>{status.message}</p>
        )}

      </div>
    </div>
  )
}

export default App