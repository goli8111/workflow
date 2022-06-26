import './App.css';
import * as React from 'react';
import RootWorkflow from './components/template/RootWorkflow'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const card = (
  <React.Fragment>
      <div class="service-card-error">
        <div class="title">
          Title 1<Chip label="primary" color="primary" />
        </div>
        <p class="bodyin">Lorem ipsum  ad aliquip ex ea commodo consequat. <br/><br/> Learningrobo</p>
      </div>
  </React.Fragment>
);

function App() {
  return (
    <div className="App">
      <RootWorkflow />
        <table>
        {/* <tr>
          <td>
            Build
          </td>
          <td>
            QA Pre Release
          </td>
          <td>
            QA Release
          </td>
          <td>
            Live Pre Release
          </td>
          <td>
            Live Release
          </td>
        </tr> */}
        <tr>
          <td>
            <Card variant="outlined">{card}</Card>
          </td>
          <td>
            <Card variant="outlined">{card}</Card>
          </td>
          <td>
            <Card variant="outlined">{card}</Card>
          </td>
          <td>
            <Card variant="outlined">{card}</Card>
          </td>
          <td>
            <Card variant="outlined">{card}</Card>
          </td>
        </tr>
      </table>

    </div>
  );
}

export default App;
