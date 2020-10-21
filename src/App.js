import { Button, Grid, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';


function App() {
  const [fullname, setFullname] = useState("");
  const [institution, setInstitution] = useState("");
  const [bio, setBio] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);
  const [start, setStart] = useState(false);
  const [error, setError] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      if (start) {
        setTimeSpent(timeSpent + 1000)
      }
    }, 1000)
    return () => clearInterval(timer);
  }, [start, timeSpent])

  const updateFullname = (event) => {
    setFullname(event.target.value)
    setStart(true);
  }

  const updateInstitution = (event) => {
    setInstitution(event.target.value)
    setStart(true);
  }

  const updateBio = (event) => {
    setBio(event.target.value);
    setStart(true);
  }

  const submit = (e) => {
    e.preventDefault();

    if (!fullname || !bio || !institution) {
      setError("Fullname, bio and institution are required");
    }
    setStart(false)
    setTimeSpent(0);
  }

  return (
    <div>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <h1 style={{textAlign: "center"}}>{timeSpent/1000} seconds</h1>
        {error ? <Alert severity="error">{error}</Alert> : null}
      </div>


      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10%"}}>
        <form onSubmit={submit} style={{display: "flex", flexDirection: "column"}}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField value={fullname} onChange={updateFullname} fullWidth placeholder="Your fullname" variant="outlined" size="small" />
            </Grid>

            <Grid item>
              <TextField value={institution} onChange={updateInstitution} fullWidth placeholder="Institution" variant="outlined" size="small" />
            </Grid>

            <Grid item>
              <TextField value={bio} onChange={updateBio} fullWidth placeholder="Bio" variant="outlined" size="small" />
            </Grid>

            <Grid item>
              <Button variant="contained" color="primary" fullWidth onClick={submit}>Submit</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default App;
