import { useState } from "react";
import Head from "next/head";
import Meta from "@/component/Meta.jsx";
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
  const [showConfigs, setShowConfigs] = useState(false);
  const [url, setUrl] = useState(movie.urls[0]);
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
        <Meta
          title={movie.title}
          desc={movie.desc}
          url={movie.urls[0]}
          keywords={movie.keywords}
          image={movie.poster}
          type="video"
        ></Meta>
        <title>{movie.title}</title>
      </Head>
      <Box mt={4} p={5}>
        <Container>
          <Paper>
            <div className="servers">
              {movie.urls.map((item, index) => {
                return (
                  <Button
                    className="server"
                    variant="contained"
                    color={item == url ? "primary" : "default"}
                    onClick={() => setUrl(item)}
                    key={item}
                  >
                    Server {index + 1}
                  </Button>
                );
              })}

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
              <VideoPlayer
                key="player"
                poster={"/images/poster/" + movie.poster}
                src={url}
              />
            </div>
            <Typography variant="h6" component="h1" className="title">
              {movie.title}
            </Typography>
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

export async function getServerSideProps(router) {
  const data = require("./../../data/movies.json");
  const { id } = router.query;
  let movie = false;
  for (let film of data) {
    if ((film.id = id)) {
      movie = film;
      break;
    }
  }

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
  };
}

export default Player;
