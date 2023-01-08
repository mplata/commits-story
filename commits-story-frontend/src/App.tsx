import { useEffect, useState } from 'react';
import './App.css'
import { CommitInfo } from './types/types';
import { getCommits } from './services/commits';
import CommitDisplay from './components/commit/Commit';

function App() {

  const [commits, setCommits] = useState<CommitInfo[]>([]);
  useEffect(() => {
    const loadCommits = async () => {
      const commitsResp: CommitInfo[] = await getCommits('');
      setCommits(commitsResp);
    };
    loadCommits();
  }, []);
  const commitsDisplays = commits.map(commit => {
    return <CommitDisplay key={commit.sha} commit={commit}/>;
  });
  return (
    <div className="App">
      <header>
        <h1>Commits Story</h1>
      </header>
      <div>
        {commitsDisplays}
      </div>
      <footer>
        Powered by...
      </footer>
    </div>
  )
}

export default App
