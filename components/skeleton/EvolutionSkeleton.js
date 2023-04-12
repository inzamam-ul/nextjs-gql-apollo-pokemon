import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import * as React from "react";

const EvolutionSkeleton = () => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={130} height={130} />
      <Skeleton variant="rectangular" width={120} height={20} />
      <Skeleton variant="rounded" width={120} height={20} />
    </Stack>
  );
};

export default EvolutionSkeleton;
