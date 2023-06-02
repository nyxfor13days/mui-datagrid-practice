import { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Stack, Typography, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { episodesQuery, getAllCharacters } from "./query";
import GetColumns from "./columns";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

  const columns = GetColumns({ characters: characters });

  const { loading } = useQuery(episodesQuery, {
    onCompleted: (data) => {
      setEpisodes(data.episodes.results);
      getCharacters();
    },
  });

  const [getCharacters] = useLazyQuery(getAllCharacters, {
    onCompleted: (data) => setCharacters(data.characters.results),
  });

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Episodes</Typography>

      <Paper elevation={2}>
        <DataGrid
          density="compact"
          loading={loading}
          columns={columns}
          rows={episodes}
        />
      </Paper>
    </Stack>
  );
};

export default Episodes;
