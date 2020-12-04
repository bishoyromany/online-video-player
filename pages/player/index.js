import { useState } from "react";
import Head from "next/head";
import "node_modules/video-react/dist/video-react.css"; // import css
import { Player as VideoPlayer } from "video-react";
import {
  Container,
  Paper,
  Box,
  Typography,
  Modal,
  TextField,
  Button,
} from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";

const Player = ({ movie }) => {
  const [showConfigs, setShowConfigs] = useState(true);
  const [url, setUrl] = useState("");
  const modalBody = (
    <div className="playerConfigs">
      <Paper>
        <Typography variant="h6" component="h4" className="configs-title">
          Player Configs
        </Typography>

        <div className="form">
          <TextField
            id="outlined-secondary"
            label="Video URL"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </Paper>
    </div>
  );

  return (
    <div id="Player">
      <Head>
        <title>Online Video Player</title>
      </Head>
      <Box mt={4} p={5}>
        <Container>
          <Paper>
            <div className="servers">
              <Button
                className="server"
                variant="contained"
                color="secondary"
                onClick={() => setShowConfigs(true)}
                startIcon={<PermDataSettingIcon />}
              >
                Custom Video
              </Button>

              <Button
                className="server"
                variant="contained"
                onClick={() => (window.location.href = url)}
                startIcon={<CloudDownloadIcon />}
              >
                Download
              </Button>
            </div>
            <div className="player">
              <VideoPlayer key="player" src={url} />
            </div>
          </Paper>
        </Container>
      </Box>

      <Modal
        open={showConfigs}
        onClose={() => setShowConfigs(false)}
        className="c-modal"
      >
        {modalBody}
      </Modal>
    </div>
  );
};

export default Player;
