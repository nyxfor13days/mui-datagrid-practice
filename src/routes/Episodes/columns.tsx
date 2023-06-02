import { useAutocomplete } from "@mui/base";
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { GridColDef } from "@mui/x-data-grid";
import { DateTime } from "luxon";

interface GetColumnsProps {
  characters: string[];
}

const GetColumns = ({ characters }: GetColumnsProps) => {
  const { getInputProps, getListboxProps, getOptionProps, groupedOptions } =
    useAutocomplete({
      id: "characters-autocomplete",
      options: characters,
      getOptionLabel: (option) => option,
    });

  console.log("characters", characters);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Index",
      width: 64,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      width: 196,
    },
    {
      field: "episode",
      headerName: "Episode",
      width: 124,
    },
    {
      field: "main_character",
      headerName: "Main Character",
      flex: 1,
      width: 256,
      editable: true,
      renderEditCell: (params) => {
        return (
          <Box>
            <Input {...getInputProps()} />
            {characters.length > 0 ? (
              <ul {...getListboxProps()}>
                {(groupedOptions as typeof characters).map((option, index) => (
                  <li {...getOptionProps({ option, index })}>{option}</li>
                ))}
              </ul>
            ) : null}
          </Box>
        );
      },
    },
    {
      field: "air_date",
      headerName: "Aired On",
      flex: 1,
      width: 196,
    },
    {
      field: "created",
      headerName: "Created On",
      flex: 1,
      width: 196,
      valueFormatter: (params) =>
        DateTime.fromISO(params.value).toLocaleString(DateTime.DATETIME_FULL),
    },
  ];

  return columns;
};

const Input = styled("input")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

export default GetColumns;
